import { ScaledSheet } from "react-native-size-matters";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.BG
    },
    scrollView: {
      flex: 1,
      paddingHorizontal: "15@s",
      paddingTop: "12@vs"
    }
  });
};
export default styleScaled;
