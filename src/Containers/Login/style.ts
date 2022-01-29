import { ScaledSheet } from "react-native-size-matters";
import { SIZES } from "../../Utils/Values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.BG,
      justifyContent: "center",
      alignItems: "center"
    },
    logo: {
      width: SIZES.WIDTH_WINDOW * 0.3,
      height: SIZES.WIDTH_WINDOW * 0.3,
      marginTop: "80@vs",
      marginBottom: "40@vs"
    }

  });
};
export default styleScaled;
