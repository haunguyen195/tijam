import { scale, ScaledSheet } from "react-native-size-matters";
import { SHADOW_3, SHADOW_5 } from "../../../Utils/Values";
import { SIZES } from "../../../Utils/Values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container:{
      flex: 1,
      paddingHorizontal: "5%",
      marginVertical: '8@vs'
    },
    txtTitle:{
      color: Color.TXT_TITLE,
      fontWeight: "bold",
      fontSize: '15@ms0.3',
      marginBottom: 5
    },
    viewInput:{
      flex: 1,
      backgroundColor: Color.BG_INPUT,
      borderRadius: '8@ms',
      borderColor: Color.BD_INPUT,
      borderWidth: '1@ms',
      paddingHorizontal: '10@s'
    },
    viewLabel:{
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      height: '45@vs'
    },
    inputLabel:{
      flex: 1,
      fontWeight: "bold",
      textAlignVertical: "top",
      fontSize: '17@ms0.3',
      color: Color.TXT_INPUT_LABEL,
      paddingVertical: 0
    },
    btnImage:{
      marginHorizontal: "8@s"
    },
    inputContent:{
      textAlignVertical: "top",
      fontSize: '17@ms0.3',
      color: Color.TXT_INPUT_CONTENT,
      paddingVertical: 0
    },
    imagePreview:{
      width: SIZES.WIDTH_WINDOW * 0.9 - scale(30),
      marginVertical: "15@vs",
      borderRadius: '5@ms',
      alignSelf: "center"
    },
    btnDeleteImage:{
      backgroundColor: Color.BG_BTN_DELETE_IMAGE,
      borderRadius: "50@ms",
      padding: "8@ms",
      position: "absolute",
      top: "25@vs",
      right: "20@s"
    },
    icClose:{
      color:Color.IC_DELETE_IMAGE,
      fontSize:'22@ms0.3'
    }

  });
};
export default styleScaled;
