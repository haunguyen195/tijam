import { ScaledSheet } from "react-native-size-matters";

const style = (Color: any) => {
  return ScaledSheet.create({
    container: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "24@vs"
    },
    viewContent: {
      width: "100%"
    },
    viewTitle: {
      width: "100%",
      marginBottom: "6@vs",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    title: {
      color: Color.TXT_TITLE,
      fontSize: "17@ms0.3",
      fontWeight: "bold"
    },
    txtContent: {
      color: Color.TXT_CONTENT,
      fontSize: "16@ms0.3",
      marginBottom: "12@vs"
    },
    iconEdit: {
      color: Color.IC_EDIT,
      fontSize: "27@ms0.3"
    }
  });
};
export default style;
