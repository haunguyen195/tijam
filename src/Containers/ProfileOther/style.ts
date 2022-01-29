import { ScaledSheet } from "react-native-size-matters";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.BG,
      paddingBottom:'10@vs'
    }
  });
};
export default styleScaled;
