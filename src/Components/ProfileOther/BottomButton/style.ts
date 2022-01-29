import { ScaledSheet } from "react-native-size-matters";
import { SHADOW_3 } from "../../../Utils/Values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      width: "100%",
      paddingVertical: "15@vs",
      paddingHorizontal: "20@s",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    touchButton: {
      backgroundColor: Color.BOTTOMBUTTON_BG_BUTTON,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: "12@vs",
      borderRadius: "10@ms",
      paddingHorizontal: "15@s",
      flexDirection: "row",
      ...SHADOW_3
    },
    textBigButton: {
      fontSize: "15@ms0.3",
      fontWeight: "bold",
      marginLeft: "10@s"
    }
  });
};
export default styleScaled;
