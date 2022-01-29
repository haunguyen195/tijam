import { ScaledSheet } from "react-native-size-matters";
import { SHADOW_2, SHADOW_3 } from "../../Utils/Values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.BG
    },
    viewContent: {
      width: "100%",
    },
    viewInfor: {
      width: "100%",
      height:'55@vs',
      paddingHorizontal: '3%',
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems:'center',
      backgroundColor: Color.BG_INFOR,
      marginBottom:'0.5@vs',
      ...SHADOW_2
    },
    title: {
      color: Color.TXT_TITLE,
      fontSize: "15@ms0.3",
    },
    inforName: {
      padding:0,
      textAlign:'right',
      flex:1,
      marginLeft:"15@s",
      color: Color.TXT_INFO_NAME,
      fontSize: "16@ms0.3",
      // fontWeight: "bold"
    },
    inputName: {
      paddingVertical:"3@vs",
      paddingHorizontal:"5@s",
      textAlign:'right',
      marginLeft:"15@s",
      color: Color.TXT_INFO_NAME,
      fontSize: "16@ms0.3",
      // fontWeight: "bold"
    },
    iconTail:{
      fontSize: "20@ms0.3",
      color: Color.IC_TAIL,
      paddingLeft: "10@s"
    },


    pickerStyle: {
      zIndex: 2,
      borderRadius: "8@ms",
      borderWidth:0,
      height: "40@ms",
      backgroundColor:Color.BG_DROPDOWN,
    },
    dropdownContainerStyles: {
      zIndex: 2,
      borderRadius: "8@ms",
      borderWidth:0,
      backgroundColor:Color.BG_DROPDOWN,
      ...SHADOW_3
    },
    dropdownContainer: {
      width: "45%",
    },
    txtLabel: {
      fontSize: "16@ms0.3",
      color: Color.TXT_LABEL_PICKER,
      textAlign:'right'
    },
    txtDropdownStyle: {
      fontSize: "16@ms0.3",
      color: Color.TXT_DROPDOWN,
    }
  });
};
export default styleScaled;
