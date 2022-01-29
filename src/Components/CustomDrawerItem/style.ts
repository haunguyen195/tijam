import { ScaledSheet } from "react-native-size-matters";
import { SIZES } from "../../Utils/Values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: "10@vs",
      marginVertical: "8@vs"
    },
    containerBottom:{
      flexDirection:'row',
      alignItems:'center',
      width:"100%"
    },
    stroke:{
      width:"2@s",
      height:"20@vs",
      backgroundColor:'white',
      marginHorizontal: "15@s"
    },
    icon: {
      minWidth: "62@s",
      alignItems: "center"
    },
    title: {
      color: Color.TXT_TITLE,
      fontWeight: "600"
    },
    containerHeader: {
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    viewNameHeader: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center"
    },
    viewBottom: {
      flexDirection: "row",
      alignItems: "center"
    },
    txtBottom: {
      color: Color.TXT_TITLE,
      fontSize: "18@ms0.3"
    },
    avatar: {
      height: "58@s",
      width: "58@s",
      borderRadius: "35@s",
      backgroundColor: "white",
      marginLeft: "20@s"
    },
    viewName: {
      flex:1,
      marginHorizontal: "20@s",
    },
    txtNickname: {
      fontSize: "22@ms0.3",
      fontWeight: "bold",
      color: Color.TXT_NAME
    },
    txtName: {
      color: Color.TXT_NAME,
      fontSize: "15@ms0.3"
    },
    pressBell: {
      zIndex: 2,
      marginRight: "20@s"
    },
    iconBell: {
      color: Color.IC,
      fontSize: "28@ms0.3"
    },
  });
};
export default styleScaled;
