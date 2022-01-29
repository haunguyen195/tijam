import { SHADOW_3, SIZES } from "../../../Utils/Values";
import { ScaledSheet } from "react-native-size-matters";

const style = (Color: any) => {
  return ScaledSheet.create({
    container: {
      width: "100%",
      paddingTop: SIZES.HEIGHT_STATUSBAR,
      backgroundColor: Color.BG,
      ...SHADOW_3
    },
    headerView: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-around",
      alignItems: "center",
      paddingVertical: "6@vs"
    },
    txtHeader: {
      flex: 1,
      fontWeight: "bold",
      textAlign: "center",
      fontSize: "18@ms0.3",
      color: Color.TXT,
    },
    button: {
      width: "38@ms1",
      height: "38@ms1",
      borderRadius: "25@ms1",
      justifyContent: "center",
      alignItems: "center"
    }

  });
};
export default style;
