import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import CountAction from "../../Components/ProfileOther/CountAction";
import Infor from "../../Components/ProfileOther/Infor";
import BottomButton from "../../Components/ProfileOther/BottomButton";
import ListNewsPost from "../../Components/ProfileOther/ListNewsPost";
import { bindActionCreators } from "redux";
import * as Auths from "../../Store/Actions/auth-actions";
import { connect } from "react-redux";
import { UserInfor } from "../../Models";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import ViewShot from "react-native-view-shot";
import * as ControllAppActions from "../../Store/Actions/control-app-actions";
import { UserServices } from "../../Store/Services/user-services";
import styleScaled from "./style";

interface ProfileOtherProps {
  navigation: DrawerNavigationProp<any, any>,
  route: any,
  setBackgroundScreenDrawer: (image: string) => void,
  color: object,
  language:object
}

const ProfileOther: FC<any> = (props: ProfileOtherProps) => {
  const { navigation, setBackgroundScreenDrawer, color, language, route } = props;
  const [userInfor, setUserInfor] = useState<UserInfor>();
  const refViewShot = useRef();
  const styles = styleScaled(color);

  useEffect(() => {
    refViewShot.current.capture().then(image => {
      setBackgroundScreenDrawer(image);
    });

    async function fetchUserInfor() {
      let userData = await UserServices.getUserInfor(route.params.userId);

      setUserInfor(userData);
    }

    fetchUserInfor();
  }, []);


  const viewPostMap = useCallback(() => {
    navigation.navigate("UserMap", { posts: userInfor?.posts, nickname: userInfor?.nickname });
  }, [userInfor]);

  return (
    <ViewShot ref={refViewShot} style={styles.container}
              options={{ result: "base64", quality: 0.5 }}>
      <Infor language={language} navigation={navigation} color={color} userInfor={userInfor} />

      {/*view count*/}
      <CountAction color={color} userInfor={userInfor} language={language}/>

      <ListNewsPost color={color} navigation={props.navigation} viewPostMap={viewPostMap}
                    posts={userInfor ? userInfor.posts : []} language={language}/>

      <BottomButton language={language} userInfor={userInfor} navigation={navigation} color={color} isFollowed={false} />

    </ViewShot>
  );
};

function mapStateToProps(state: any) {
  return {
    userInfor: state.user.userInfor,
    color: state.controlApp.settings.color.PROFILE_OTHER,
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileOther);
