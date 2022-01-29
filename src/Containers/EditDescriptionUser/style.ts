import { ScaledSheet } from "react-native-size-matters";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.BG
    },
    inputDescription: {
      flex: 1,
      textAlignVertical: "top",
      paddingVertical: "3@vs",
      paddingHorizontal: "5@s",
      margin: "15@s",
      color: Color.TXT_INPUT,
      fontSize: "17@ms0.3"
    }
  });
};
export default styleScaled;
