import { ScaledSheet } from "react-native-size-matters";

const style = (Color: any) => {
  return ScaledSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center'
    },
    icon: {
      fontSize: "60@ms0.3",
      marginBottom:'20@vs',
      color: Color.IC
    },
    txt: {
      fontSize: "20@ms0.3",
      textAlign: "center",
      color: Color.TXT
    }
  });
};
export default style;
