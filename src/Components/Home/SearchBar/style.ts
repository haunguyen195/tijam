import { ScaledSheet } from "react-native-size-matters";
import { SHADOW_3, SHADOW_5, SIZES } from "../../../Utils/Values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "90%",
      paddingVertical: "8@ms",
      paddingHorizontal: "12@ms",
      borderRadius: "40@ms",
      ...SHADOW_3,
      backgroundColor: Color.SEARCHBAR_BG_CONTAINER,
      alignSelf: "center",
      zIndex: 1,
      marginTop: SIZES.HEIGHT_PADDINGTOP
    },
    touchAvatar: {
      borderRadius: "20@ms",
      overflow: "hidden",
      ...SHADOW_5
    },
    avatar: {
      backgroundColor: Color.SEARCHBAR_BG_AVATAR,
      width: "35@ms",
      height: "35@ms"
    },
    touchSearch: {
      marginHorizontal: "16@s",
      flex: 1
    },
    textSearch: {
      color: Color.SEARCHBAR_TXT_SEARCH,
      fontSize: "15@ms0.3",
      textAlign: "left"
    },
    touchAdd: {
      width: "35@ms",
      height: "35@ms",
      justifyContent: "center",
      alignItems: "center"
    }
  });
};
export default styleScaled;
