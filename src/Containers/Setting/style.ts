import { ScaledSheet } from "react-native-size-matters";
import { SHADOW_2 } from "../../Utils/Values";
import { StyleSheet } from "react-native";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: "100%",
      width: "100%",
      backgroundColor: Color.BG,
      alignItems: "center"
    },
    viewOption: {
      backgroundColor: Color.BG_OPTION,
      width: "100%",
      height: "55@vs",
      marginBottom: "0.5@vs",
      paddingHorizontal: "3%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      ...SHADOW_2
    },
    title: {
      color: Color.TXT_TITLE,
      fontSize: "15@ms0.3"
    },
    imageFlag: {
      width: "38@ms",
      height: "24@ms"
    }
  });
};
export default styleScaled;
