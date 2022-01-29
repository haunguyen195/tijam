import { ScaledSheet, verticalScale } from "react-native-size-matters";
import { SHADOW_2, SIZES } from "../../Utils/Values";
import { StyleSheet } from "react-native";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      flex:1,
      backgroundColor:Color.BG,
    },
    btnChangeLanguage: {
      position: "absolute",
      right: "30@s",
      top: SIZES.HEIGHT_PADDINGTOP + verticalScale(20),
      zIndex: 3,
      ...SHADOW_2
    },
    imageFlag: {
      width: "38@ms",
      height: "24@ms"
    },
    viewRouter: {
      flexDirection: "row",
      flex: 1,
      justifyContent: "space-evenly",
      alignItems: "center"
    },
    routerTouch: {
      width: "65@ms",
      height: "38@ms",
      borderRadius: "10@ms",
      justifyContent: "center",
      alignItems: "center",
      ...SHADOW_2
    }
  });
};
export default styleScaled;
