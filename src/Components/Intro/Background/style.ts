import { ScaledSheet } from "react-native-size-matters";
import { SIZES } from "../../../Utils/Values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      width: SIZES.WIDTH_WINDOW * 2,
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -1
    },
    circle1: {
      width: SIZES.WIDTH_WINDOW*1.1,
      height: "55%",
      borderRadius: "200@ms",
      backgroundColor: Color.BG_CIRCLE_1,
      position: "absolute",
      top: "5%",
      left: -SIZES.WIDTH_WINDOW * 0.4
    },
    circle2: {
      width: SIZES.WIDTH_WINDOW * 1.5,
      height: "85%",
      borderRadius: "400@ms",
      backgroundColor: Color.BG_CIRCLE_2,
      position: "absolute",
      bottom: "-20%",
      left: SIZES.WIDTH_WINDOW * 0.1
    },
    circle3: {
      width: SIZES.WIDTH_WINDOW,
      height: "55%",
      borderRadius: "300@ms",
      backgroundColor: Color.BG_CIRCLE_3,
      position: "absolute",
      top: "-23%",
      right: -SIZES.WIDTH_WINDOW * 0.4
    }
  });
};
export default styleScaled;
