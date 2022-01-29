import { ScaledSheet } from "react-native-size-matters";
import { SHADOW_2, SHADOW_3 } from "../../Utils/Values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.BG,
      alignItems: "center"
    },
    scrollView: {
      flex:1,
      alignItems: "center",
      paddingHorizontal: "24@s",
      paddingBottom: "12@vs"
    },
    imageView: {
      marginVertical: "12@vs",
      backgroundColor: Color.BG_IMG,
      borderRadius: "13@ms",
      padding: "18@ms",
      ...SHADOW_2
    },
    image: {
      width: "160@ms",
      height: "160@ms"
    },
    txtContent: {
      color: Color.TXT_CONTENT,
      fontSize: "15@ms0.3",
      textAlign: "center",
      marginVertical: "6@vs",
      lineHeight: "22@vs"
    },
    txtGithub: {
      fontSize: '15@ms0.3',
      textDecorationLine: "underline",
      fontWeight: "bold",
      color: Color.TXT_GITHUB
    },
    txtName:{
      fontSize:'20@ms0.3',
      fontWeight:'bold',
      color:Color.TXT_NAME
    },
    btn:{
      width: "90%",
      backgroundColor: Color.BG_BTN,
      paddingVertical: '12@vs',
      justifyContent: "center",
      alignItems: "center",
      borderRadius: '8@ms',
      marginBottom: '15@vs',
      ...SHADOW_3
    },
    txtBtn:{
      color: Color.TXT_BTN,
      fontSize: '19@ms0.3',
      fontWeight: "bold"
    }
  });
};
export default styleScaled;
