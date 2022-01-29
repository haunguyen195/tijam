import React, { FC, useEffect, useRef } from "react";
import { ScrollView } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ViewShot from "react-native-view-shot";

import Header from "../../Components/BaseComponents/Header";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import EditAvatar from "../../Components/EditProfile/EditAvatar";
import * as UserActions from "../../Store/Actions/user-actions";
import * as ControllAppActions from "../../Store/Actions/control-app-actions";
import EditBaseInfor from "../../Components/EditProfile/EditBaseInfor";
import EditDescriptionInfor from "../../Components/EditProfile/EditDescriptionInfor";
import EditContactInfor from "../../Components/EditProfile/EditContactInfor";
import { STATUS } from "../../Utils/Values";
import styleScaled from "./style";

interface EditProfileProps {
  color: any,
  userInfor: object,
  navigation: DrawerNavigationProp<any, any>,
  UserActionsDispatch: any,
  setBackgroundScreenDrawer: any,
  statusUploadAvatar: STATUS,
  language:object
}

const EditProfile: FC<any> = ({
                                navigation,
                                color,
                                userInfor,
                                UserActionsDispatch,
                                setBackgroundScreenDrawer,
                                statusUploadAvatar,
                                language
                              }: EditProfileProps) => {
  const styles = styleScaled(color);
  const refViewShot = useRef();

  useEffect(() => {
    refViewShot.current.capture().then(image => {
      setBackgroundScreenDrawer(image);
    });
  }, []);


  return (
    <ViewShot ref={refViewShot} style={styles.container}
              options={{ result: "base64", quality: 0.5 }}>
      <Header title={language.EDIT} />

      <ScrollView style={styles.scrollView}>
        <EditAvatar statusUploadAvatar={statusUploadAvatar} language={language}
                    resetUploadAvatarStatus={UserActionsDispatch.resetUploadAvatarStatus} posts={userInfor.posts}
                    uploadAvatar={UserActionsDispatch.uploadAvatar}
                    uploadThumbnail={UserActionsDispatch.uploadThumbnail} userId={userInfor.id} color={color}
                    image={userInfor.avatar} />
        <EditBaseInfor name={userInfor.name} gender={userInfor.gender} dob={userInfor.dob} navigation={navigation}
                       color={color} language={language}/>
        <EditDescriptionInfor description={userInfor.description} navigation={navigation} color={color} language={language}/>
        <EditContactInfor userInfor={userInfor} navigation={navigation} color={color} language={language}/>
      </ScrollView>

    </ViewShot>
  );
};

function mapStateToProps(state: any) {
  return {
    color: state.controlApp.settings.color.EDIT_PROFILE,
    language: state.controlApp.settings.language,
    userInfor: state.user.userInfor,
    statusUploadAvatar: state.user.statusUploadAvatar
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    setBackgroundScreenDrawer: bindActionCreators(ControllAppActions.setBackgroundScreenDrawer, dispatch),
    UserActionsDispatch: bindActionCreators(UserActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
