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
      height: "100%"
    }
  });
};
export default styleScaled;
