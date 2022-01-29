import { ScaledSheet } from "react-native-size-matters";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      flexGrow: 0,
      alignSelf: "flex-end"
    },
    touchItem: {
      marginVertical: "8@vs",
      paddingRight: "8@s",
      alignItems: "flex-end"
    },
    textItem: {
      textAlign: "right",
      width: "70@s",
      color: Color.LIST_TAG_TXT_ITEM,
      fontSize: "14@ms0.3",
      textShadowColor: Color.LIST_TAG_TXT_ITEM_SHADOW,
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: "10@ms"
    },
    textItemSelected: {
      textAlign: "right",
      width: "70@s",
      color: Color.LIST_TAG_TXT_ITEM_SELECTED,
      fontSize: "15@ms0.3",
      textShadowColor: Color.LIST_TAG_TXT_ITEM_SHADOW,
      fontWeight: "bold",
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: "10@ms"
    }
  });
};
export default styleScaled;
