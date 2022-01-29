import React, { FC } from "react";
import { Image, View } from "react-native";
import { connect } from "react-redux";
import { moderateScale } from "react-native-size-matters";

import { SIZES } from "../../Utils/Values";


const BackgroundScreen: FC<any> = ({ backgroundScreenDrawer, color }) => {

  return (
    <View style={{
      width: SIZES.WIDTH_WINDOW,
      height: SIZES.HEIGHT_SCREEN,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#00000000"
    }}>
      {backgroundScreenDrawer ?
        <Image
          style={{
            width: SIZES.WIDTH_WINDOW,
            height: SIZES.HEIGHT_SCREEN,
            borderRadius: moderateScale(30)
          }}
          resizeMode={"cover"}
          source={{ uri: "data:image/png;base64," + backgroundScreenDrawer }} />
        :
        <View
          style={{
            width: SIZES.WIDTH_WINDOW,
            height: SIZES.HEIGHT_SCREEN,
            borderRadius: moderateScale(30),
            backgroundColor: color.BG
          }} />}
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    backgroundScreenDrawer: state.controlApp.backgroundScreenDrawer,
    color: state.controlApp.settings.color.BACKGROUND_SCREEN
  };
}

export default connect(mapStateToProps)(BackgroundScreen);
