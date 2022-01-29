import { moderateScale, ScaledSheet } from "react-native-size-matters";
import { SIZES } from "../../../Utils/Values";

const style = (Color: any) => {
  return ScaledSheet.create({
    modal:{
      marginVertical: 0,
      marginHorizontal: 0
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
    icClose:{
      fontSize:'25@ms0.3',
      color:Color.IC_CLOSE
    },
    containerModal: {
      height: SIZES.HEIGHT_SCREEN,
      width: SIZES.WIDTH_WINDOW,
      justifyContent: "center",
      alignItems: "center",
      margin: 0,
      backgroundColor: Color.BG
    }
  });
};
export default style;
