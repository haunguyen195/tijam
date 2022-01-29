import { ScaledSheet } from "react-native-size-matters";
import { SIZES } from "../../../Utils/Values";

export const SIZE_ITEM = SIZES.WIDTH_WINDOW;

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container:{
      flexGrow: 0,
      height: "85%"
    },
    contentContainer:{
      height: "100%",
    },
    containerSlide: {
      width: SIZES.WIDTH_WINDOW,
      height: "100%",
      alignItems: "center",
      paddingHorizontal: "5%",
      justifyContent: "flex-end",
    },
    lottieView: {
      width: '100%',
    },
    viewTxt:{
      height:'40%',
      alignItems:'center',
      justifyContent:'space-evenly'
    },
    titleTxt: {
      fontSize: "25@ms0.3",
      fontWeight: "bold",
      color: Color.TXT_TITLE
    },
    descriptionTxt: {
      fontSize: "15@ms0.3",
      textAlign: "center",
      color: Color.TXT_DESCRIPTION,
      lineHeight: "22@vs",
    }

  });
};
export default styleScaled;
