import { SIZES } from "../../../Utils/Values";
import { moderateScale, ScaledSheet } from "react-native-size-matters";

const style = (Color: any) => {
  return ScaledSheet.create({
    containerModal: {
      height: SIZES.HEIGHT_SCREEN,
      width: SIZES.WIDTH_WINDOW,
      justifyContent: "center",
      alignItems: "center",
      margin: 0,
      backgroundColor: Color.BG_MODAL
    },
    container: {
      width: "90%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Color.BG_CONTAINER,
      borderRadius: "5@ms",
      padding: "15@ms"
    },
    viewContent: {
      width: "100%"
    },
    viewTitle: {
      width: "100%",
      marginBottom: "6@vs",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    title: {
      color: Color.TXT_TITLE,
      fontSize: "20@ms0.3",
      fontWeight: "bold",
      marginVertical: "5@vs"
    },
    txtContent: {
      color: Color.TXT_CONTENT,
      fontSize: "16@ms0.3",
      marginVertical: "8@vs"
    },
    icon: {
      marginRight: "10@s",
      fontSize: "22@ms0.3"
    },
    btnClose: {
      width: "40@ms",
      height: "40@ms",
      backgroundColor: Color.BG_BTN_CLOSE,
      borderRadius: "25@ms",
      justifyContent: "center",
      alignItems: "center",
      top: SIZES.HEIGHT_STATUSBAR + moderateScale(35),
      right: "25@ms",
      position: "absolute"
    },
    iconClose: {
      fontSize:'25@ms0.3',
      color:Color.IC_CLOSE
    }
  });
};
export default style;
