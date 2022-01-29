import { ScaledSheet, verticalScale } from "react-native-size-matters";
import { SIZES } from "../../../Utils/Values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      width: SIZES.WIDTH_WINDOW,
      height: SIZES.WIDTH_WINDOW * 1.15,
      justifyContent: "flex-end"
    },
    routerButton: {
      width: "46@ms",
      height: "46@ms",
      backgroundColor: Color.INFOR_BG_ROUTERBUTTON,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "25@ms",
      position: "absolute",
      top: SIZES.HEIGHT_PADDINGTOP + verticalScale(15)
    },
    containerInfor: {
      bottom: SIZES.WIDTH_WINDOW * 0.15 + verticalScale(60),
      width: SIZES.WIDTH_WINDOW * 0.75,
      alignSelf: "center"
    },
    textNickname: {
      color: Color.INFOR_TXT_INFOR,
      fontSize: "30@ms0.3",
      fontWeight: "bold",
      marginBottom: "10@vs"
    },
    textName: {
      color: Color.INFOR_TXT_INFOR,
      fontSize: "18@ms0.3"
    },
    textDob: {
      color: Color.INFOR_TXT_INFOR,
      fontSize: "18@ms0.3",
      marginBottom: "10@vs"
    },
    textDescription: {
      color: Color.INFOR_TXT_INFOR,
      fontSize: "15@ms0.3"
    }

  });
};
export default styleScaled;
