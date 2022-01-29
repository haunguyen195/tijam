import { ScaledSheet } from "react-native-size-matters";
import { SIZES } from "../../../Utils/Values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      width: SIZES.WIDTH_WINDOW,
      paddingHorizontal: "10%"
    },
    bigTxt: {
      fontWeight: "bold",
      fontSize: "33@ms0.3",
      color: Color.TXT_BIG
    },
    smallTxt: {
      marginVertical: "18@vs",
      fontSize: "17@ms0.3",
      color: Color.TXT_SMALL
    },
    input: {
      backgroundColor: Color.BG_INPUT,
      width: "100%",
      paddingHorizontal: "15@s",
      height: "50@ms",
      textAlignVertical: "center",
      fontSize: "18@ms0.3",
      color: Color.TXT_INPUT,
      paddingVertical: 0,
      borderRadius: "8@ms",
      borderColor: Color.BD_INPUT,
      borderWidth: "1@ms",
      marginBottom: "15@vs"
    }
  });
};
export default styleScaled;
