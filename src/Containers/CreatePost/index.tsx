import React, { Component, FC, useCallback, useEffect, useRef } from "react";
import { Keyboard, Pressable, Text, TouchableOpacity, View } from "react-native";
import LottieView from "lottie-react-native";
import ViewShot from "react-native-view-shot";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { geohashForLocation } from "geofire-common";
import moment from "moment";
import ImageResizer from "react-native-image-resizer";

import * as ControllAppActions from "../../Store/Actions/control-app-actions";
import * as PostActions from "../../Store/Actions/post-actions";
import * as UserActions from "../../Store/Actions/user-actions";
import EditContent from "../../Components/CreatePost/EditContent";
import ModalPickLocation from "../../Components/CreatePost/ModalPickLocation";
import ListType from "../../Components/CreatePost/ListType";
import Icon from "../../Components/BaseComponents/Icon";
import { Post } from "../../Models";
import { createUUID, ShowToast } from "../../Utils/Helpers";
import { LOTTIE, TYPE } from "../../Utils/Values";
import styleScaled from "./style";
import { MAP_STYLE } from "../../Utils/Themes/dark";

const CreatePost: FC<any> = (props) => {
  const { navigation, setBackgroundScreenDrawer, uploadPost, color,language, userInfor, updateUserInfor, MAP_STYLE } = props;
  const styles = styleScaled(color);
  const refViewShot = useRef();
  const refModalPickLocation = useRef<Component>();

  const refLabel = useRef<string>();
  const refContent = useRef<string>();
  const refImage = useRef<object>();
  const refType = useRef<TYPE>(TYPE.I_NEED);

  useEffect(() => {
    refViewShot.current.capture().then(image => {
      setBackgroundScreenDrawer(image);
    });
  }, []);

  const changeLabel = useCallback((text: string) => {
    refLabel.current = text.trim();
  }, []);

  const changeContent = useCallback((text: string) => {
    refContent.current = text.trim();
  }, []);

  const changeImage = useCallback((imageObject: object) => {
    refImage.current = imageObject;
  }, []);

  const changeType = useCallback((type: TYPE) => {
    refType.current = type;
  }, []);

  const pickLocation = useCallback(() => {
    if (refLabel.current && refContent.current) {
      let post = new Post();
      post.avatar = userInfor.thumbnail;
      post.type = refType.current;
      post.label = refLabel.current;
      refModalPickLocation.current.show(post);
    } else {
      ShowToast(
        "error",
        language.LACK,
        language.LACK_LABEL_OR_CONTENT
      );
    }

  }, []);

  const createPost = useCallback((coordinate: object) => {
    navigation.goBack();

    let post = new Post();
    post.id = createUUID();
    post.userId = userInfor.id;
    post.avatar = userInfor.thumbnail;
    post.nickname = userInfor.nickname;
    post.type = refType.current;
    post.label = refLabel.current;
    post.content = refContent.current;
    post.duration = moment(new Date()).add(5, "days").toDate();
    post.create_ts = new Date();
    post.latitude = coordinate.latitude;
    post.longitude = coordinate.longitude;
    post.geohash = geohashForLocation([coordinate.latitude, coordinate.longitude]);

    if (refImage.current) {
      ImageResizer.createResizedImage(refImage.current.assets[0].uri, 1024, 2048, "JPEG", 80, 0)
        .then((responseResize) => {
          post.image = responseResize.path;
          post.image_height = responseResize.height;
          post.image_width = responseResize.width;

          uploadPost(post);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      uploadPost(post);
    }

    updateUserInfor({ posts: [...userInfor.posts, post] });
  }, []);

  return (
      <ViewShot ref={refViewShot} style={styles.container}
                options={{ result: "base64", quality: 0.5 }}>

        <Pressable onPress={Keyboard.dismiss} style={styles.viewHeader}>
          <LottieView style={styles.lottie}
                      source={LOTTIE.CREATE_POST} autoPlay />
          <View style={styles.viewTitle}>
            <Text style={styles.txtWhatNews}>{language.WHATS_NEW}</Text>
            <Text style={styles.txtShareNow}>{language.SHARE_NOW+"!!!"}</Text>
          </View>
        </Pressable>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeBtn}>
          <Icon name="close" style={styles.icClose} type={"FontAwesome"} />
        </TouchableOpacity>

        {/*type*/}
        <View style={styles.viewTypes}>
          <Text style={styles.txtType}>{language.TYPE+":"}</Text>
          <ListType color={color} changeType={changeType} language={language} />
        </View>

        {/*content*/}
        <EditContent changeLabel={changeLabel} language={language} changeContent={changeContent} changeImage={changeImage} color={color} />

        <TouchableOpacity
          style={styles.btnPickLocation}
          onPress={pickLocation}>
          <Text style={styles.txtPickLocation}>{language.PICK_LOCATION}</Text>
        </TouchableOpacity>

        <ModalPickLocation MAP_STYLE={MAP_STYLE} navigation={navigation} ref={refModalPickLocation} color={color} createPost={createPost} language={language}/>
      </ViewShot>
  );
};

function mapStateToProps(state: any) {
  return {
    color: state.controlApp.settings.color.CREATE_POST,
    MAP_STYLE: state.controlApp.settings.color.MAP_STYLE,
    userInfor: state.user.userInfor,
    language: state.controlApp.settings.language
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    setBackgroundScreenDrawer: bindActionCreators(ControllAppActions.setBackgroundScreenDrawer, dispatch),
    uploadPost: bindActionCreators(PostActions.uploadPost, dispatch),
    updateUserInfor: bindActionCreators(UserActions.updateUserInfor, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
