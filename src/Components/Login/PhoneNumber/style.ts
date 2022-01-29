import { ScaledSheet } from "react-native-size-matters";
import { SHADOW_3, SIZES } from "../../../Utils/Values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      width: SIZES.WIDTH_WINDOW,
      paddingHorizontal: "10%"
    },
    bigTxt: {
      fontWeight: "bold",
      fontSize: "33@ms0.3",
      color: Color.TXT_BIG
    },
    smallTxt: {
      marginVertical: "18@vs",
      fontSize: "17@ms0.3",
      color: Color.TXT_SMALL
    },
    iconArrow:{
      fontSize:'20@ms0.3',
      color:Color.IC_ARROW
    },
    viewInput: {
      zIndex: 1,
      height: "50@ms",
      width: "100%",
      borderTopLeftRadius: "8@ms",
      borderTopRightRadius: "8@ms",
      borderWidth: "1@ms",
      backgroundColor: Color.BG_INPUT_PHONE_NUMBER,
      flexDirection: "row",
      borderTopColor: Color.BD_INPUT_PHONE_NUMBER,
      borderLeftColor: Color.BD_INPUT_PHONE_NUMBER,
      borderRightColor: Color.BD_INPUT_PHONE_NUMBER
    },
    txtCountryValue: {
      fontWeight: "bold",
      fontSize: "18@ms0.3",
      color: Color.TXT_COUNTRY
    },
    pressCountryCode: {
      width: "33%",
      height: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      paddingLeft: "15@s",
      paddingRight: "10@s",
      flexDirection: "row"
    },
    input: {
      width: "67%",
      textAlignVertical: "center",
      fontSize: "18@ms0.3",
      color: Color.TXT_INPUT_PHONE_NUMBER,
      paddingVertical: 0
    },
    pickerStyle: {
      zIndex: -1,
      height: "50@ms",
      width: 0,
      opacity: 0
    },
    dropdownContainerStyles: {
      borderRadius: "8@ms",
      borderColor: Color.BD_DROPDOWN,
      borderLeftWidth: 1,
      borderBottomWidth: 1,
      borderRightWidth: 1,
      borderTopWidth: 0,
      backgroundColor: Color.BG_DROPDOWN,
      ...SHADOW_3
    },
    dropdownContainer: {
      position: "absolute",
      width: "100%"
    },
    txtLabel: {
      fontSize: "18@ms0.3",
      color: Color.TXT_LABEL_DROPDOWN
    },
    txtDropdownStyle: {
      fontSize: "18@ms0.3",
      color: Color.TXT_VALUE_DROPDOWN
    },
    txtTerms:{
      marginTop: '18@vs',
      marginBottom: '6@vs',
      fontSize:'15@ms0.3',
      fontWeight:'bold',
      color:Color.TXT_TERMS
    },
    txtUnderstand:{
      fontSize:'15@ms0.3',
      fontWeight:'bold',
      color:Color.TXT_UNDERSTAND
    },
    iconCheckBox:{
      fontSize:30,
      color:Color.IC_CHECKBOX,
      marginRight:'6@s'
    },
    btnCheckBox:{
      flexDirection: "row",
      alignItems:'center'
    }
  });
};
export default styleScaled;
