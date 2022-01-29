import { scale, ScaledSheet } from "react-native-size-matters";
import { SHADOW_2, SIZES } from "../../../Utils/Values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      top: SIZES.WIDTH_WINDOW - scale(37),
      position: "absolute",
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center"
    },
    containerCount: {
      backgroundColor: Color.COUNT_BG_CONTAINER,
      alignSelf: "center",
      borderRadius: "15@ms",
      width: SIZES.WIDTH_WINDOW * 0.75,
      height: "74@ms",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      paddingHorizontal: "15@ms",
      ...SHADOW_2
    },
    viewCount: {
      alignItems: "center"
    },
    textCount: {
      fontWeight: "bold",
      fontSize: "18@ms0.3",
      marginBottom: "5@ms",
      color:Color.TXT_COUNT
    },
    textTitle: {
      fontSize: "13@ms0.3",
      color:Color.TXT_COUNT
    },
    viewStroke: {
      backgroundColor: Color.COUNT_BG_STROKE,
      width: "1@ms0.5",
      height: "45%"
    }

  });
};
export default styleScaled;
