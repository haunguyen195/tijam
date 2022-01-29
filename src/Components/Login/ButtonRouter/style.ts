import { ScaledSheet } from "react-native-size-matters";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    viewTouch: {
      flexDirection: "row",
      alignItems: "flex-end",
      width: "100%",
      marginBottom: "24@vs",
      paddingHorizontal: "5%",
      justifyContent: "space-evenly"
    },
    touchNext: {
      height: "40@ms",
      width: "25%",
      backgroundColor: Color.BG_BTN_NEXT,
      borderRadius: "8@ms",
      justifyContent: "center",
      alignItems: "center"
    }

  });
};
export default styleScaled;
