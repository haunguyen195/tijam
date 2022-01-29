import { ScaledSheet } from "react-native-size-matters";
import { SHADOW_2 } from "../../Utils/Values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.BG
    },
    viewContent: {
      width: "100%",
    },
    viewContact: {
      width: "100%",
      paddingHorizontal: '3%',
      height:'55@vs',
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: Color.BG_CONTACT,
      marginBottom:'0.5@vs',
      ...SHADOW_2
    },
    input: {
      flex: 1,
      paddingVertical: "3@vs",
      paddingHorizontal: "5@s",
      color: Color.TXT_INPUT,
      fontSize: "16@ms0.3"
    },
    icon: {
      width: "9%",
      fontSize: "22@ms0.3"
    },
    txtNote: {
      backgroundColor:Color.BG_TXT_NOTE,
      paddingHorizontal: "15@s",
      paddingVertical: "15@vs",
      fontSize: "15@ms0.3",
      color: Color.TXT_NOTE,
      marginBottom:'0.5@vs',
      ...SHADOW_2
    },
    txtNoteBold: {
      color: Color.TXT_NOTE_BOLD,
      fontWeight: "bold"
    }
  });
};
export default styleScaled;
