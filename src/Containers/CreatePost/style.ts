import { ScaledSheet, verticalScale } from "react-native-size-matters";
import { SHADOW_3, SIZES } from "../../Utils/Values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.BG
    },
    icClose:{
      color:Color.IC_CLOSE,
      fontSize:'22@ms0.3'
    },
    closeBtn: {
      width: "40@ms",
      height: "40@ms",
      backgroundColor: Color.BG_BTN_CLOSE,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "25@ms",
      right: "20@s",
      position: "absolute",
      top: SIZES.HEIGHT_PADDINGTOP + verticalScale(10),
      ...SHADOW_3
    },
    viewHeader: {
      alignSelf: "flex-start",
      marginTop: SIZES.HEIGHT_PADDINGTOP / 2,
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "flex-start",
      width: "100%"
    },
    lottie:{
      height: '140@ms0.3',
      marginHorizontal: '5@s'
    },
    viewTitle:{
      alignItems: "flex-start",
      paddingBottom: '20@vs'
    },
    txtWhatNews:{
      textAlign: "left",
      fontWeight: "bold",
      fontSize: 20,
      color: Color.TXT_WHAT_NEWS
    },
    txtShareNow:{
      textAlign: "left",
      fontWeight: "bold",
      fontSize: 24,
      color: Color.TXT_SHARE_NOW
    },
    viewTypes:{
      width: "100%",
      marginBottom: 8
    },
    txtType:{
      color: Color.TXT_TYPE,
      fontWeight: "bold",
      fontSize: 15,
      marginLeft: "5%"
    },
    btnPickLocation:{
      backgroundColor: Color.BG_BTN_PICK_LOCATION,
      paddingVertical: 12,
      marginHorizontal: "5%",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
      marginBottom: 15, ...SHADOW_3
    },
    txtPickLocation:{
      color: Color.TXT_BTN_PICK_LOCATION,
      fontSize: 20,
      fontWeight: "bold"
    }
  });
};
export default styleScaled;
