import { SHADOW_3 } from "../../../Utils/Values";
import { ScaledSheet } from "react-native-size-matters";

const style = (Color: any) => {
  return ScaledSheet.create({
    container: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "24@vs"
    },
    image: {
      width: "140@ms",
      height: "140@ms",
      borderRadius: "5@ms",
      backgroundColor:Color.BG_AVATAR
    },
    viewContent: {
      width: "140@ms",
      height: "140@ms",
      borderRadius: "5@ms",
      ...SHADOW_3
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
    iconEdit: {
      color: Color.IC_EDIT,
      fontSize: "27@ms0.3",
    }

  });
};
export default style;
