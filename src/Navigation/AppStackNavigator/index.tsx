import React, { FC, useEffect, useState } from "react";
import DrawerNavigator from "../DrawerNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import { bindActionCreators } from "redux";
import * as AuthActions from "../../Store/Actions/auth-actions";
import * as UserActions from "../../Store/Actions/user-actions";
import * as ControlAppActions from "../../Store/Actions/control-app-actions";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import SplashScreen from "react-native-splash-screen";
import NetInfo from "@react-native-community/netinfo";

import Intro from "../../Containers/Intro";
import Login from "../../Containers/Login";
import UserMap from "../../Containers/UserMap";
import Search from "../../Containers/Search";
import CreatePost from "../../Containers/CreatePost";
import EditContactUser from "../../Containers/EditContactUser";
import EditDescriptionUser from "../../Containers/EditDescriptionUser";
import ProfileOther from "../../Containers/ProfileOther";
import EditProfile from "../../Containers/EditProfile";
import EditInforUser from "../../Containers/EditInforUser";
import Error from "../../Containers/Error";
import { connect } from "react-redux";
import Ads from "../../Containers/Ads";
import messaging from "@react-native-firebase/messaging";
import Notification from "../../Containers/Notification";
import Setting from "../../Containers/Setting";

const Stack = createStackNavigator();

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log("Authorization status:", authStatus);
  }
}

const ApplicationStack: FC<any> = (props) => {
  const { AuthActionsDispatch, isUserReady, syncUserInfor, changeConnected, initApp } = props;
  const [user, setUser] = useState<FirebaseAuthTypes.User>();
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(userCreated: FirebaseAuthTypes.User) {
    if (userCreated != null && userCreated.displayName) {
      AuthActionsDispatch.setUserReady(true);
      syncUserInfor(userCreated.uid);
    }

    AuthActionsDispatch.setUser(userCreated);
    setUser(userCreated);

    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    initApp();
    requestUserPermission();

    const unsubscribe = NetInfo.addEventListener((state) => {
      changeConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    // @ts-ignore
    return auth().onAuthStateChanged(onAuthStateChanged);
  }, []);

  useEffect(() => {
    if (!initializing)
      SplashScreen.hide();
  }, [initializing]);
  return (
    <Stack.Navigator
      initialRouteName={"DrawerNavigator"}
      screenOptions={{
        header: () => null
      }}>
      {user && isUserReady ?
        <>
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
          <Stack.Screen name="CreatePost" component={CreatePost} />
          <Stack.Screen name="Ads" component={Ads} />
          <Stack.Screen name="Error" component={Error} options={{ gestureEnabled: false }} />
          <Stack.Screen name="ProfileOther" component={ProfileOther} />
          <Stack.Screen name="UserMap" component={UserMap} />
          <Stack.Screen name="Search" component={Search}
                        options={{
                          animationEnabled: false
                        }} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="EditInforUser" component={EditInforUser} />
          <Stack.Screen name="EditContactUser" component={EditContactUser} />
          <Stack.Screen name="EditDescriptionUser" component={EditDescriptionUser} />
        </>
        :
        <>
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Error" component={Error} options={{ gestureEnabled: false }} />
        </>
      }
    </Stack.Navigator>
  );
};

function mapStateToProps(state: any) {
  return {
    isUserReady: state.auth.isUserReady
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    changeConnected: bindActionCreators(ControlAppActions.changeConnected, dispatch),
    initApp: bindActionCreators(ControlAppActions.initApp, dispatch),
    AuthActionsDispatch: bindActionCreators(AuthActions, dispatch),
    syncUserInfor: bindActionCreators(UserActions.syncUserInfor, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ApplicationStack);
