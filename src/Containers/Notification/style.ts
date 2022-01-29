import { ScaledSheet } from "react-native-size-matters";
import { SIZES } from "../../Utils/Values";

export const SIZE_ITEM = SIZES.WIDTH_WINDOW;

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container:{
      flex: 1,
      backgroundColor: Color.BG
    },
    viewEmpty: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1
    },
    txtEmpty: {
      fontSize: "18@ms0.3",
      marginVertical: "16@vs",
      color: Color.TXT_EMPTY
    },
    icPause:{
      fontSize: '100@ms0.3',
      color:Color.IC_PAUSE
    }
  });
};
export default styleScaled;
