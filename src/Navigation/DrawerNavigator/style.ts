import { ScaledSheet } from "react-native-size-matters";
import { SIZES } from "../../Utils/Values";

const styleScaled = (Color: any) => {

  return ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: "transparent",
      paddingBottom: "25@vs",
      overflow: "visible",
      justifyContent: "center"
    },
    containerHeader: {
      position: "absolute",
      width: SIZES.WIDTH_WINDOW,
      zIndex: 3,
      top: SIZES.HEIGHT_PADDINGTOP,
      left: -SIZES.WIDTH_WINDOW
    },
    containerBottom: {
      position: "absolute",
      zIndex: 1,
      bottom: "16@vs",
      left: -SIZES.WIDTH_WINDOW
    },
    viewHeader: {
      flex: 1,
      zIndex:3,
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
    containerDrawer: {
      backgroundColor: Color.BG,
      flex: 1
    },
    drawerStyle: {
      width: "65%",
      backgroundColor: "transparent",
      marginRight: "-30@s"
    },
    sceneContainerStyle: {
      backgroundColor: "transparent",
      overflow: "visible",
      // paddingVertical: '20%',
      alignSelf: "center",
      zIndex: 1
    }
  });
};
export default styleScaled;
