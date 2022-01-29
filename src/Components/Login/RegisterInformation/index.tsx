import React, { FC, forwardRef, memo, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import styleScaled from "./style";
import ImagePicker from "react-native-image-crop-picker";
import Icon from "../../BaseComponents/Icon";
import { bindActionCreators } from "redux";
import * as UserActions from "../../../Store/Actions/user-actions";
import { connect } from "react-redux";
import * as AuthActions from "../../../Store/Actions/auth-actions";
import * as Auths from "../../../Store/Actions/auth-actions";
import auth from "@react-native-firebase/auth";
import ImageResizer from "react-native-image-resizer";
import { IMAGE, STATUS } from "../../../Utils/Values";
import { ShowToast } from "../../../Utils/Helpers";

const Avatar: FC<any> = memo((props) => {
  const { styles, uploadAvatar, language, user, uploadThumbnail } = props;
  const [avatar, setAvatar] = useState(null);
  const [avatarMime, setAvatarMime] = useState(null);

  const pickAvatar = useCallback(() => {
    ImagePicker.openPicker({
      width: 700,
      height: 700,
      cropperToolbarTitle: language.CUT,
      includeBase64: true,
      mediaType: "photo",
      cropping: true,
      cropperCircleOverlay: true,
      enableRotationGesture: true,
      writeTempFile: true,
      compressImageQuality: 0.85
    }).then(({ path, data, mime }) => {
      uploadAvatar(path, user.uid, false);

      ImageResizer.createResizedImage(path, 70, 70, "JPEG", 70, 0)
        .then(async (responseResize) => {
          uploadThumbnail(responseResize.path, user.uid, [], false);
        })
        .catch(err => {
          console.log(err);
        });

      setAvatar(data);
      setAvatarMime(mime);

    }).catch(() => {
    });
  }, [user]);

  return (
    <Pressable onPress={pickAvatar}>
      <Image
        source={avatar == null ? IMAGE.EMPTY_AVATAR : { uri: `data:${avatarMime};base64,${avatar}` }}
        style={styles.avatar} />
    </Pressable>
  );
});

const DisplayName: FC<any> = memo(forwardRef((props, ref) => {
  const { styles, language, setUserInfor } = props;
  const [lastName, setLastName] = useState(`{${language.LAST_NAME}}`);
  const [firstName, setFirstName] = useState(`{${language.FIRST_NAME}}`);
  const [reverse, setReverse] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      changeLastName(lastname: string) {
        setLastName(lastname);
      },
      changeFirstName(firstname: string) {
        setFirstName(firstname);
      },
      updateInfor() {
        let authCurrent = auth().currentUser;
        setUserInfor({
          firstName: firstName,
          lastName: lastName,
          name: reverse ? firstName + " " + lastName : lastName + " " + firstName,
          phoneNumber: authCurrent?.phoneNumber,
          id: authCurrent?.uid,
          create_ts: new Date()
        });
      }
    })
  );

  const changeReverse = useCallback(() => {
    setReverse(reverse => !reverse);
  }, []);

  return (
    <View style={styles.viewDisplayName}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.descriptionDisplayName}>{language.DISPLAY_NAME+": "}</Text>
        <TouchableOpacity onPress={changeReverse} hitSlop={styles.hitSlop}>
          <Icon type={"FontAwesome"} name={"refresh"}
                style={styles.iconReverse} />
        </TouchableOpacity>
      </View>
      <Text style={styles.displayName} numberOfLines={2}
            ellipsizeMode={"tail"}>{reverse ? firstName + " " + lastName : lastName + " " + firstName}</Text>
    </View>
  );
}));


const RegisterInformation: FC<any> = forwardRef((props, ref) => {
  const { color, language, UserActionsDispatch, user, AuthActionsDispatch, statusUploadAvatar, userInfor, setLoading } = props;
  const styles = styleScaled(color);
  const displayName = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      onPressNext(index: number) {
        displayName.current.updateInfor();
      }
    })
  );

  useEffect(() => {
    if (userInfor.phoneNumber != "") {
      console.log("Chay vao day");
      console.log(userInfor)
      UserActionsDispatch.setUserInforServer(userInfor);
      setLoading(false);
      AuthActionsDispatch.setUserReady(true);
    }
  }, [userInfor.phoneNumber]);

  useEffect(() => {
    if (statusUploadAvatar == STATUS.FAILED || statusUploadAvatar == STATUS.SUCCESS) {
      if (statusUploadAvatar == STATUS.FAILED)
        ShowToast(
          "error",
          language.ERROR,
          language.UPLOAD_IMAGE_FAILED_TRY_LATER
        );

      UserActionsDispatch.resetUploadAvatarStatus();
    }
  }, [statusUploadAvatar]);

  const changeLastName = useCallback((text: string) => {
    displayName.current.changeLastName(text.trim());
  }, []);

  const changeFirstName = useCallback((text: string) => {
    displayName.current.changeFirstName(text.trim());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.bigTxt} numberOfLines={1} ellipsizeMode={"tail"}>{`${language.WELCOME} ${userInfor.nickname}`}</Text>
      <Text style={styles.smallTxt}>{language.REGISTER_INFO_NOTE}</Text>

      <View style={{ flexDirection: "row" }}>
        <Avatar language={language} styles={styles} uploadAvatar={UserActionsDispatch.uploadAvatar}
                uploadThumbnail={UserActionsDispatch.uploadThumbnail} user={user} />
        <DisplayName language={language} styles={styles} ref={displayName} setUserInfor={UserActionsDispatch.setUserInfor}/>
      </View>

      <View style={styles.viewInput}>
        <TextInput
          onChangeText={changeLastName} placeholder={language.LAST_NAME} style={[styles.input, { width: "60%" }]}
          underlineColorAndroid={"transparent"} returnKeyType={"done"} placeholderTextColor={color.TXT_PLACE_HOLDER} />

        <TextInput onChangeText={changeFirstName} placeholder={language.FIRST_NAME} style={[styles.input, { width: "35%" }]}
                   underlineColorAndroid={"transparent"} returnKeyType={"done"} placeholderTextColor={color.TXT_PLACE_HOLDER} />
      </View>

    </View>
  );
});

function mapStateToProps(state: any) {
  return {
    userInfor: state.user.userInfor,
    statusUploadAvatar: state.user.statusUploadAvatar,
    user: state.auth.user
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    UserActionsDispatch: bindActionCreators(UserActions, dispatch),
    AuthActionsDispatch: bindActionCreators(AuthActions, dispatch),
    setLoading: bindActionCreators(Auths.setLoading, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(RegisterInformation);
