import { SHADOW_3, SIZES } from "../../../Utils/Values";
import { moderateScale, ScaledSheet } from "react-native-size-matters";
import { StyleSheet } from "react-native";

const style = (Color: any) => {
  return ScaledSheet.create({
    containerModal:{
      marginVertical: 0,
      marginHorizontal: 0
    },
    container: {
      height: SIZES.HEIGHT_SCREEN,
      width: SIZES.WIDTH_WINDOW,
      justifyContent: "center",
      alignItems: "center",
      margin: 0,
      backgroundColor: Color.BG_CONTAINER
    },
    btnClose: {
      width: "40@ms",
      height: "40@ms",
      backgroundColor: Color.BG_BTN_CLOSE_MODAL,
      borderRadius: "25@ms",
      justifyContent: "center",
      alignItems: "center",
      top: SIZES.HEIGHT_STATUSBAR + moderateScale(35),
      right: "25@ms",
      position: "absolute"
    },
    map: {
      zIndex: -1,
      ...StyleSheet.absoluteFillObject
    },
    icClose:{
      fontSize: '25@ms0.3',
      color:Color.IC_CLOSE_MODAL
    },
    btnShare:{
      position: "absolute",
      bottom: "20@vs",
      paddingVertical: "12@vs",
      paddingHorizontal: "24@s",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: '8@ms',
      ...SHADOW_3
    },
    txtShare:{
      color: Color.TXT_SHARE,
      fontSize: "20@ms0.3",
      fontWeight: "bold"
    }
  });
};
export default style;
