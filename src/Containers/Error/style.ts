import {ScaledSheet} from "react-native-size-matters";
import { SHADOW_3 } from "../../Utils/Values";

const styleScaled = (Color: any) => {
    return ScaledSheet.create({
        container: {
            flex: 1,
            backgroundColor: Color.BG,
            alignItems: 'center',
            justifyContent: 'center',
            width:'100%'
        },
        txtDescription:{
            lineHeight:'22@vs',
            fontSize:'16@ms0.3',
            color:Color.TXT_DESCRIPTION,
            textAlign:'center',
            marginVertical: '10@vs',
            marginHorizontal:'30@s'
        },
        icon:{
            fontSize:'100@ms0.3'
        },
        btnTry:{
            marginTop:'12@vs',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: Color.BG_BTN_TRY,
            borderRadius:'10@ms',
            paddingVertical:'12@ms',
            paddingHorizontal:'24@ms',
            ...SHADOW_3
        },
        txtTry:{
            fontSize:'18@ms0.3',
            fontWeight: 'bold',
            color:Color.TXT_TRY,
        }
    });
};
export default styleScaled;
