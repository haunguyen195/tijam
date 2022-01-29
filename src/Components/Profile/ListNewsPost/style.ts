import { moderateScale, ScaledSheet, verticalScale } from "react-native-size-matters";
import { SHADOW_2, SIZES } from "../../../Utils/Values";

export const SIZE_ITEM = SIZES.WIDTH_WINDOW * 0.89;
export const HEIGHT_ITEM_MEDIUM = verticalScale(80);
export const IC_COUNT_SIZE = moderateScale(12, 0.3);
export const IC_DURA_SIZE = moderateScale(14, 0.3);

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    contentContainer: {
      height: "100%",
      paddingLeft: SIZES.WIDTH_WINDOW * 0.08,
      paddingRight: SIZES.WIDTH_WINDOW * 0.03,
      alignItems: "center"
    },
    iconEmpty:{
      fontSize:'70@ms0.3',
      color:Color.IC_EMPTY
    },
    pressableItem: {
      height: "97%",
      paddingRight: SIZES.WIDTH_WINDOW * 0.05
    },
    containerItem: {
      width: SIZES.WIDTH_WINDOW * 0.84,
      height: "100%",
      overflow: "hidden",
      borderRadius: "15@ms",
      backgroundColor: Color.LISTPOST_BG_CONTAINER_ITEM,
      paddingHorizontal: "5%",
      alignItems: "center",
      alignSelf: "center",
      paddingBottom: "15@vs",
      ...SHADOW_2
    },
    viewDuration: {
      position: "absolute",
      top: 0,
      right: 0,
      borderTopRightRadius: "15@ms",
      borderBottomLeftRadius: "15@ms",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: "5@vs",
      paddingHorizontal: "10@s"
    },
    txtDuration: {
      color: Color.LISTPOST_TXT_DURATION,
      marginLeft: "6@s",
      fontSize: "13@ms0.3"
    },
    viewHeader: {
      flexDirection: "row",
      width: "100%",
      height: "42@vs",
      marginTop: "30@vs",
      alignItems: "center"
    },
    avatar: {
      borderRadius: "8@ms",
      width: "40@s",
      height: "40@s",
      backgroundColor: Color.INFOR_BG_AVATAR
    },
    viewInfor: {
      marginLeft: "10@s",
      flex: 1
    },
    txtNickname: {
      color: Color.LISTPOST_TXT_NICK,
      fontSize: "16@ms0.3",
      fontWeight: "bold",
      marginBottom: "2@vs"
    },
    txtCreateTs: {
      color: Color.LISTPOST_TXT_CREATETS,
      fontSize: "13@ms0.3"
    },
    txtCount: {
      color: Color.LISTPOST_TXT_COUNT_INFOR,
      fontSize: "12@ms0.3",
      width: "100%",
      textAlign: "right"
    },
    txtLabel: {
      fontSize: "16@ms0.3",
      fontWeight: "bold",
      color: Color.LISTPOST_TXT_LABEL
    },
    txtTag: {
      fontSize: "14@ms0.3",
      color: Color.LISTPOST_TXT_TAG,
      marginBottom: "5@vs"
    },
    txtContent: {
      fontSize: "14@ms0.3",
      color: Color.LISTPOST_TXT_CONTENT,
      lineHeight: "22@vs"
    },
    image: {
      borderRadius: "5@ms",
      width: "100%",
      marginTop: "15@vs"
    },
    viewLinear: {
      height: "100@vs",
      width: "100%",
      position: "absolute",
      bottom: 0
    },
    viewEmpty: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1
    },
    txtEmpty: {
      fontSize: "18@ms0.3",
      marginVertical: "16@vs",
      color: Color.TXT_EMPTY
    }
  });
};
export default styleScaled;
