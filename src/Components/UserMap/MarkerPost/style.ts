import { ScaledSheet } from "react-native-size-matters";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    viewIconBottom: {
      height: "16@ms",
      width: "16@ms",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "20@ms",
      position: "absolute",
      bottom: 0,
      alignSelf: "center"
    },
    viewContent: {
      height: "38@ms",
      flexDirection: "row",
      alignItems: "center"
    },
    avatar: {
      width: "27@ms",
      height: "27@ms",
      borderRadius: "20@ms",
      marginHorizontal: "6@ms",

    },
    labelMarker: {
      marginRight: "8@ms",
      marginLeft: "2@ms",
      fontSize: "10@ms0.3",
      textAlign: "center"
    },
    iconType:{
      fontSize: '10@ms0.3',
      color:Color.IC_MARKER
    }

  });
};
export default styleScaled;
