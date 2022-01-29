import React, { FC } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import App from "./src/Navigation";
import { StatusBar } from "react-native";
import Toast, {ErrorToast, InfoToast, SuccessToast} from 'react-native-toast-message';
import { moderateScale } from "react-native-size-matters";

const toastConfig = {
  success: (props:any) => (
    <SuccessToast
      {...props}
      text1NumberOfLines={5}
      text2NumberOfLines={10}
      contentContainerStyle={{backgroundColor: props.props.BG}}
      text1Style={{
        fontSize: moderateScale(14, 0.3),
        color: props.props.TXT1
      }}
      text2Style={{
        fontSize: moderateScale(12, 0.3),
        color: props.props.TXT2
      }}
    />
  ),
  error: (props:any) => (
    <ErrorToast
      {...props}
      text1NumberOfLines={5}
      text2NumberOfLines={10}
      contentContainerStyle={{backgroundColor: props.props.BG}}
      text1Style={{
        fontSize: moderateScale(14, 0.3),
        color: props.props.TXT1
      }}
      text2Style={{
        fontSize: moderateScale(12, 0.3),
        color: props.props.TXT2
      }}
    />
  ),
  info: (props:any) => (
    <InfoToast
      {...props}
      text1NumberOfLines={5}
      text2NumberOfLines={10}
      contentContainerStyle={{backgroundColor: props.props.BG}}
      text1Style={{
        fontSize: moderateScale(14, 0.3),
        color: props.props.TXT1
      }}
      text2Style={{
        fontSize: moderateScale(12, 0.3),
        color: props.props.TXT2
      }}
    />
  )
};

const app: FC<any> = () => {
  return (
    // <DrawerAnimationProvider>
      <SafeAreaProvider>
        <App />
        <Toast config={toastConfig} visibilityTime={3000}/>
      </SafeAreaProvider>
    // </DrawerAnimationProvider>
  );
};

export default app;
