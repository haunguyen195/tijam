import { ScaledSheet } from "react-native-size-matters";
import { SIZES } from "../../../Utils/Values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      alignItems:'center',
    },
    containerItem:{
      width: SIZES.WIDTH_WINDOW*0.88,
      flexDirection:'row',
      marginVertical:'12@vs'
    },
    avatar: {
      borderRadius: "8@ms",
      width: "46@vs",
      height: "46@vs",
      backgroundColor: Color.BG_AVATAR
    },
    viewName:{
      marginHorizontal:'12@s',
      flex:1,
      justifyContent:'center'
    },
    txtNickname:{
      fontSize:'18@ms0.3',
      fontWeight:'bold',
      color:Color.TXT_RESULT
    },
    txtName:{
      fontSize:'15@ms0.3',
      color:Color.TXT_RESULT
    }
  });
};
export default styleScaled;
