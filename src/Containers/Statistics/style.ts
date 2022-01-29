import { moderateScale, ScaledSheet } from "react-native-size-matters";
import { SHADOW_2 } from "../../Utils/Values";

export const SIZE_ITEM = moderateScale(130);

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      alignItems: "center",
      flex:1,
      backgroundColor:Color.BG
    },
    viewPost: {
      width: "94%",
      height: "130@ms",
      backgroundColor: Color.BG_ITEM,
      marginVertical: "6@vs",
      borderRadius: "10@ms",
      alignItems: "center",
      justifyContent: "center",
      ...SHADOW_2
    },
    txtPost: {
      fontWeight: "bold",
      fontSize: "40@ms0.3",
      color: Color.TXT_COUNT,
      marginBottom: "6@vs"
    },
    viewDescription: {
      flexDirection: "row",
      alignItems: "center"
    },
    icShare: {
      fontSize: "30@ms0.3",
      color: Color.IC_TAIL,
      marginHorizontal: "10@s"
    },
    txtDescriptionShare: {
      fontSize: "18@ms0.3",
      color: Color.TXT_DESCRIPTION
    },
    columnWrapperStyle:{
      justifyContent: "space-between",
      paddingHorizontal:"1@s"
    },
    viewCount: {
      width: "47.8%",
      height: "130@ms",
      backgroundColor: Color.BG_ITEM,
      marginVertical: "6@vs",
      borderRadius: "10@ms",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: "8@s",
      ...SHADOW_2
    },
    txtCount: {
      fontWeight: "bold",
      fontSize: "28@ms0.3",
      color: Color.TXT_COUNT,
      marginBottom: "6@vs"
    },
    txtDescription: {
      fontSize: "15@ms0.3",
      color: Color.TXT_DESCRIPTION
    },
    icCount: {
      fontSize: "25@ms0.3",
      color: Color.IC_TAIL,
      marginHorizontal: "4@s"
    },
    viewBackground: {
      height: "90@ms",
      width: "90@ms",
      borderRadius: "45@ms",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      opacity: 0.1,
      zIndex:-1
    },
    icBackground:{
      position: "absolute",
      fontSize:'60@ms0.3',
      color:Color.IC_BACKGROUND,
      zIndex: -1
    }
  });
};
export default styleScaled;
