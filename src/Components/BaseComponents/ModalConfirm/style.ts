import { ScaledSheet } from "react-native-size-matters";
import { SIZES } from "../../../Utils/Values";

const style = (Color: any) => {
  return ScaledSheet.create({
    modal: {
      marginVertical: 0,
      marginHorizontal: 0
    },
    containerModal: {
      height: SIZES.HEIGHT_SCREEN,
      width: SIZES.WIDTH_WINDOW,
      justifyContent: "flex-end",
      alignItems: "center",
      margin: 0,
      backgroundColor: Color.BG
    },
    viewContent: {
      width: "90%",
      backgroundColor: Color.BG_CONTENT,
      marginVertical: "24@vs",
      borderRadius: "12@ms",
      alignItems: "center",
      padding: "12@ms"
    },
    txtTitle: {
      fontSize: "20@ms0.3",
      fontWeight: "bold",
      color: Color.TXT_TITLE,
      marginBottom: "6@vs"
    },
    txtDescription: {
      textAlign: "left",
      fontSize: "16@ms0.3",
      color: Color.TXT_DESCRIPTION,
      marginBottom: "6@vs"
    },
    viewButton: {
      flexDirection: "row"
    },
    pressAble: {
      flex: 1,
      alignItems: "center",
      paddingVertical:'12@vs'
    },
    txtCancel: {
      fontSize: "18@ms0.3",
      color: Color.TXT_CANCEL
    },
    txtConfirm: {
      fontSize: "18@ms0.3",
      fontWeight: "bold",
      color: Color.TXT_CONFIRM
    }

  });
};
export default style;
