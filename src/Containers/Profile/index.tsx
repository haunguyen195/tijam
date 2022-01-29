import React, { FC, useCallback, useRef } from "react";
import { BackHandler } from "react-native";
import CountAction from "../../Components/Profile/CountAction";
import Infor from "../../Components/Profile/Infor";
import ListNewsPost from "../../Components/Profile/ListNewsPost";
import { bindActionCreators } from "redux";
import * as Auths from "../../Store/Actions/auth-actions";
import { connect } from "react-redux";
import { UserInfor } from "../../Models";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import ViewShot from "react-native-view-shot";
import * as ControllAppActions from "../../Store/Actions/control-app-actions";
import { useFocusEffect } from "@react-navigation/native";
import styleScaled from "./style";

interface ProfileProps {
  navigation: DrawerNavigationProp<any, any>
  userInfor: UserInfor,
  setBackgroundScreenDrawer: (image: string) => void,
  color: object,
  language:object
}


const Profile: FC<any> = ({ navigation, userInfor, setBackgroundScreenDrawer, color, language }: ProfileProps) => {
  const styles = styleScaled(color);
  const refViewShot = useRef();

  const viewPostMap = useCallback(() => {
    navigation.navigate("UserMap", { posts: userInfor?.posts, nickname: userInfor?.nickname, own:true });
  }, [userInfor]);

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        refViewShot.current.capture().then(image => {
          setBackgroundScreenDrawer(image);
        });
      }, 1000);

    }, [])
  );

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", () => true);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", () => true);
    }, [])
  );

  return (
    <ViewShot ref={refViewShot} style={styles.container}
              options={{ result: "base64", quality: 0.5 }}>
      <Infor navigation={navigation} color={color} userInfor={userInfor} />

      {/*view count*/}
      <CountAction color={color} language={language} />

      <ListNewsPost viewPostMap={viewPostMap} color={color} navigation={navigation}
                    posts={userInfor ? userInfor.posts : []} language={language} />

    </ViewShot>
  );
};

function mapStateToProps(state: any) {
  return {
    userInfor: state.user.userInfor,
    color: state.controlApp.settings.color.PROFILE,
    language: state.controlApp.settings.language,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    setUser: bindActionCreators(Auths.setUser, dispatch),
    setLoading: bindActionCreators(Auths.setLoading, dispatch),
    setBackgroundScreenDrawer: bindActionCreators(ControllAppActions.setBackgroundScreenDrawer, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
