import { ScaledSheet } from "react-native-size-matters";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    pagination: {
      width: "12@ms",
      height: "12@ms",
      borderRadius: "10@ms",
      alignItems: "center",
      marginHorizontal: "8@s"
    }
  });
};
export default styleScaled;
