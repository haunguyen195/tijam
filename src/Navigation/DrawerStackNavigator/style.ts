import { ScaledSheet } from "react-native-size-matters";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    containerDrawer: {
      position: "absolute",
      height: "100%",
      overflow: "hidden",
      opacity: 0.4,
      zIndex: 0,
      justifyContent: "center",
      alignItems: "center",
      width: "100%"
    },
    containerStack: {
      flex: 1,
      overflow: "hidden"
    }
  });
};
export default styleScaled;
