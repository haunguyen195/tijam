import { ScaledSheet } from "react-native-size-matters";
import { SIZES } from "../../../Utils/Values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      width: SIZES.WIDTH_WINDOW,
      paddingHorizontal: "10%"
    },
    bigTxt: {
      fontWeight: "bold",
      fontSize: "29@ms0.3",
      color: Color.TXT_BIG
    },
    smallTxt: {
      marginVertical: "18@vs",
      fontSize: "15@ms0.3",
      color: Color.TXT_SMALL
    },
    descriptionDisplayName: {
      fontSize: "17@ms0.3",
      color: Color.TXT_DESCRIPTION_DISPLAY_NAME
    },
    displayName: {
      fontSize: "18@ms0.3",
      color: Color.TXT_DISPLAY_NAME,
      fontWeight: 'bold',
      width:'100%'
    },
    avatar: {
      width: "90@ms",
      height: "90@ms",
      borderRadius: "8@ms",
      borderColor: Color.BD_AVATAR,
      borderWidth: "1@ms",
      backgroundColor: Color.BG_AVATAR
    },
    viewDisplayName:{
      marginHorizontal: "5%",
      justifyContent: "space-evenly"
    },
    iconReverse:{
      fontSize: "22@ms0.3",
      color: Color.IC_REVERSE,
      paddingHorizontal: "10@s"
    },
    hitSlop:{
      top: "30@ms",
      bottom: "30@ms",
      left: "20@ms",
      right: "20@ms"
    },
    viewInput:{
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between"
    },
    input: {
      backgroundColor: Color.BG_INPUT,
      paddingHorizontal: "15@s",
      height: "50@ms",
      textAlignVertical: "center",
      fontSize: "18@ms0.3",
      color: Color.TXT_INPUT,
      paddingVertical: 0,
      borderRadius: "8@ms",
      borderColor: Color.BD_INPUT,
      borderWidth: "1@ms",
      marginVertical: "24@vs"
    }
  });
};
export default styleScaled;
