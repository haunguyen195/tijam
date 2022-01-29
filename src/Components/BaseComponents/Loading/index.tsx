import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import LottieView from "lottie-react-native";
import Modal from "react-native-modal";
import { moderateScale } from "react-native-size-matters";
import { connect } from "react-redux";
import { LOTTIE, SIZES } from "../../../Utils/Values";
import { View } from "react-native";

const Loading = forwardRef((props, ref) => {

  const { color, loginLoading } = props;
  const [visible, setVisible] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      show() {
        setVisible(true);
      },
      hide() {
        setVisible(false);
      }
    })
  );

  useEffect(() => {
    setVisible(loginLoading);
  });

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <Modal
      isVisible={visible}
      animationIn={"fadeIn"}
      animationInTiming={200}
      animationOutTiming={200}
      animationOut={"fadeOut"}
      statusBarTranslucent
      backdropTransitionInTiming={400}
      backdropTransitionOutTiming={400}
      deviceHeight={SIZES.HEIGHT_WINDOW}
      deviceWidth={SIZES.WIDTH_WINDOW}
      hideModalContentWhileAnimating={true}
      hasBackdrop={false}
      style={{
        margin: 0,
        zIndex: 3
      }}>
      <View style={{
        width: SIZES.WIDTH_WINDOW,
        height: SIZES.HEIGHT_SCREEN,
        backgroundColor: color.BACK_DROP,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <LottieView
          source={LOTTIE.LOADING}
          style={{ width: moderateScale(300) }}
          loop
          speed={1.5}
          autoPlay
          colorFilters={[{
            keypath: "Shape Layer 1",
            color: color.IC_LAYER_1
          }, {
            keypath: "Shape Layer 2",
            color: color.IC_LAYER_2
          }, {
            keypath: "Shape Layer 3",
            color: color.IC_LAYER_3
          }]} />
      </View>

    </Modal>
  );
});

function mapStateToProps(state: any) {
  return {
    loginLoading: state.auth.loginLoading,
    color: state.controlApp.settings.color.LOADING
  };
}

export default connect(mapStateToProps, null, null, { forwardRef: true })(Loading);
