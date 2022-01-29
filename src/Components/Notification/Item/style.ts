import { ScaledSheet } from "react-native-size-matters";
import { SHADOW_2, SIZES } from "../../../Utils/Values";

export const SIZE_ITEM = SIZES.WIDTH_WINDOW;

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    itemContainer: {
      width: "96%",
      paddingHorizontal: "3%",
      margin: "2%",
      paddingVertical: "12@vs",
      borderRadius: "12@ms",
      backgroundColor: Color.BG_ITEM,
      ...SHADOW_2
    },
    image: {
      width: SIZES.WIDTH_WINDOW * 0.8,
      height: SIZES.WIDTH_WINDOW * 0.5,
      marginVertical: "6@vs",
      alignSelf: "center"
    },
    viewContent: {
      flex: 1,
      paddingLeft: "2%"
    },
    txtTitle: {
      fontWeight: "bold",
      fontSize: "16@ms0.3",
      color: Color.TXT_TITLE
    },
    txtBody: {
      fontSize: "14@ms0.3",
      color: Color.TXT_BODY
    },
    txtTime: {
      marginTop: "2@vs",
      fontWeight: "bold",
      fontSize: "14@ms0.3",
      color: Color.TXT_TIME
    }
  });
};
export default styleScaled;
