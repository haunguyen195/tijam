import { ScaledSheet } from "react-native-size-matters";
import { SHADOW_2, SHADOW_3 } from "../../Utils/Values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor:Color.BG
    },
    viewSwitch: {
      width: "90%",
      flexDirection: "row",
      marginVertical: "12@vs"
    },
    touchSwitch: {
      width: "50%",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: "12@vs",
      ...SHADOW_2
    },
    textSwitch: {
      fontWeight: "bold",
      fontSize: "16@ms0.3"
    },
    input: {
      backgroundColor: Color.BG_INPUT,
      width: "90%",
      flex: 1,
      padding: "15@s",
      height: "50@ms",
      textAlignVertical: "top",
      fontSize: "16@ms0.3",
      color: Color.TXT_INPUT,
      borderRadius: "8@ms",
      borderColor: Color.BD_INPUT,
      borderWidth: "1@ms"
    },
    txtNote: {
      width: "90%",
      fontSize: "14@ms0.3",
      color: Color.TXT_NOTE,
      marginVertical: "12@vs"
    },
    btnSendFeedback: {
      width: "90%",
      backgroundColor: Color.BG_BTN_FEEDBACK,
      paddingVertical: 12,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
      marginBottom: 15,
      ...SHADOW_3
    },
    txtSendFeedback:{
      color: Color.TXT_FEEDBACK,
      fontSize: '19@ms0.3',
      fontWeight: "bold"
    }
  });
};
export default styleScaled;
