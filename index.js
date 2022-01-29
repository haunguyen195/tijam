/**
 * @format
 */

import "react-native-gesture-handler";
import { AppRegistry, Text, TextInput, TouchableOpacity, LogBox } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { TouchableOpacity as TouchableOpacityGesture } from "react-native-gesture-handler";
import messaging from "@react-native-firebase/messaging";
import { insertNotifications } from "./src/Store/Services/db-service";

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
Text.defaultProps = {
  ...(Text.defaultProps || {}),
  allowFontScaling: false,
};
TextInput.defaultProps = {
  ...(TextInput.defaultProps || {}),
  allowFontScaling: false,
};
TouchableOpacity.defaultProps = {
  ...(TouchableOpacity.defaultProps || {}),
  activeOpacity: 0.8,
};
TouchableOpacityGesture.defaultProps = {
  ...(TouchableOpacityGesture.defaultProps || {}),
  activeOpacity: 0.8,
};

messaging().setBackgroundMessageHandler(async ({messageId, notification, sentTime, data}) => {
  console.log(data)
  await insertNotifications([{
    id: messageId,
    title: notification.title,
    body: notification.body,
    time: sentTime,
    data:data
  }])
});


AppRegistry.registerComponent(appName, () => App);
