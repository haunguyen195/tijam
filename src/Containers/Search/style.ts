import { ScaledSheet } from "react-native-size-matters";
import { StyleSheet } from "react-native";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: "100%",
      width: "100%",
      backgroundColor: Color.BG
    },
    map: {
      zIndex: -1,
      ...StyleSheet.absoluteFillObject
    }
  });
};
export default styleScaled;
