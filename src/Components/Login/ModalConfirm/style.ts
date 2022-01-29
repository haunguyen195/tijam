import { ScaledSheet } from "react-native-size-matters";
import { SHADOW_3 } from "../../../Utils/Values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    modal: {
      marginVertical: 0,
      marginHorizontal: 0,
      justifyContent: "flex-end"
    },
    container: {
      width: "100%",
      backgroundColor: Color.BG_CONTAINER,
      borderTopLeftRadius: "10@ms",
      paddingHorizontal: "5%",
      paddingTop: "5%",
      borderTopRightRadius: "10@ms"
    },
    txtTitle: {
      fontWeight: "bold",
      alignSelf: "center",
      fontSize: 22,
      color: Color.TXT_TITLE_MODAL,
      marginBottom: "15@vs"
    },
    input: {
      height: "45@ms",
      width: "13%",
      marginHorizontal: "1.5%",
      borderRadius: "8@ms",
      borderWidth: "1@ms",
      textAlign: "center",
      fontSize: "22@ms0.3",
      textAlignVertical: "center",
      color: Color.TXT_INPUT_NUMBER,
      paddingVertical: 0,
      fontWeight: "bold"
    },
    touchButtonKeyBoard: {
      height: "40@ms",
      width: "25%",
      borderRadius: "8@ms",
      justifyContent: "center",
      alignItems: "center",
      ...SHADOW_3
    },
    viewRowKeyBoard: {
      width: "100%",
      marginVertical: "8@vs",
      flexDirection: "row",
      justifyContent: "space-evenly"
    },
    txtButtonKeyBoard: {
      fontSize: "22@ms0.3",
      color: Color.TXT_BTN_KEYBOARD,
      fontWeight: "bold"
    },
    txtDetail: {
      fontSize: "16@ms0.3",
      color: Color.TXT_DETAIL_MODAL
    },
    txtPhoneNumber: {
      fontWeight: "bold",
      fontSize: "18@ms0.3",
      color: Color.TXT_PHONE_NUMBER_MODAL,
      marginVertical: "8@vs"
    },
    viewDetail: {
      flexDirection: "row",
      justifyContent: "space-between"
    },
    txtCountDown: {
      fontWeight: "bold",
      alignSelf: "flex-end",
      fontSize: "34@ms0.3",
      color: Color.TXT_COUNTDOWN,
      marginRight: "20@s",
      bottom: "-5@vs",
      paddingVertical: 0,
      textAlignVertical: "bottom"
    },
    containerInputCode: {
      flexDirection: "row",
      justifyContent: "center",
      paddingVertical: "25@vs"
    },
    containerKeyBoard: {
      justifyContent: "center",
      marginBottom: "16@vs"
    }
  });
};
export default styleScaled;
