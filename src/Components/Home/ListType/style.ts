import { ScaledSheet } from "react-native-size-matters";
import { SHADOW_3, SHADOW_5 } from "../../../Utils/Values";
import { SIZES } from "../../../Utils/Values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    touchItem: {
      marginRight: SIZES.WIDTH_WINDOW*0.05,
      marginVertical:"10@vs",
      borderRadius: "20@ms",
      paddingHorizontal: "8@s",
      paddingVertical: "8@vs",
      flexDirection: "row",
      alignItems: "center",
      ...SHADOW_3
    },
    textItem:{
      fontSize: "13@ms0.3",
      marginLeft: "5@s"
    }

  });
};
export default styleScaled;
