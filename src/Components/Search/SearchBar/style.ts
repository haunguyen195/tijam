import { moderateScale, ScaledSheet } from "react-native-size-matters";
import { SHADOW_3, SHADOW_5, SIZES } from "../../../Utils/Values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      paddingBottom: "8@ms",
      paddingHorizontal: SIZES.WIDTH_WINDOW*0.05 + moderateScale(12),
      // borderRadius: "40@ms",
      ...SHADOW_3,
      backgroundColor: Color.SEARCHBAR_BG_CONTAINER,
      alignSelf: "center",
      zIndex: 1,
      paddingTop: SIZES.HEIGHT_PADDINGTOP + moderateScale(8)
    },
    touchAvatar: {
      borderRadius: "20@ms",
      overflow: "hidden",
      ...SHADOW_5
    },
    inputSearch: {
      marginHorizontal: "16@s",
      flex: 1,
      color: Color.SEARCHBAR_TXT_SEARCH,
      fontSize: "15@ms0.3",
      textAlign: "left",
      padding: 0
    },
    touchClear: {
      width: "35@ms",
      height: "35@ms",
      justifyContent: "center",
      alignItems: "center"
    },
    iconClear:{
      fontSize:'26@ms0.3',
      color:Color.IC_CLEAR
    }
  });
};
export default styleScaled;
