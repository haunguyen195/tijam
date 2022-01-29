import { ScaledSheet } from "react-native-size-matters";
import { StyleSheet } from "react-native";
import { SHADOW_3 } from "../../Utils/Values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: "100%",
      width: "100%",
      backgroundColor: "transparent"
    },
    map: {
      zIndex: -1,
      ...StyleSheet.absoluteFillObject
    },
    btnCurrentLocation:{
      backgroundColor:Color.BG_BTN_CURRENT_LOCATION,
      alignSelf:'flex-end',
      margin:"5%",
      padding:"8@ms",
      borderRadius:"50@ms",
      ...SHADOW_3
    },
    iconLocation: {
      fontSize: "25@ms0.3",
      color: Color.IC_LOCATION
    }
  });
};
export default styleScaled;
