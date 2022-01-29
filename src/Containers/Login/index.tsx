import React, { FC, useCallback, useRef } from "react";
import { Image, View } from "react-native";
import styleScaled from "./style";
import { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import Background from "../../Components/Login/Background";
import ListStep from "../../Components/Login/ListStep";
import ButtonRouter from "../../Components/Login/ButtonRouter";
import Loading from "../../Components/BaseComponents/Loading";
import { connect } from "react-redux";
import { IMAGE } from "../../Utils/Values";

const Login: FC<any> = ({ color, language }) => {
  const styles = styleScaled(color);

  const btnRouter = useRef(null);
  const listStepRef = useRef(null);
  const loadingRef = useRef(null);
  const translationX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });

  const setStepButton = useCallback((number) => {
    btnRouter.current.setStep(number);
  }, []);

  const onPressNext = useCallback((index) => {
    listStepRef.current.onPressNext(index);
  }, []);

  const onPressPre = useCallback((index) => {
    listStepRef.current.onPressPre(index);
  }, []);


  return (
    <View style={styles.container}>

      <Image source={IMAGE.LOGO}
             style={styles.logo} />

      <View style={{ height: "60%" }}>
        <ListStep ref={listStepRef} setCurrentStep={setStepButton} scrollHandler={scrollHandler} color={color} language={language}/>
      </View>

      <ButtonRouter ref={btnRouter} color={color} onPressNext={onPressNext} onPressPre={onPressPre} />

      <Background color={color} translationX={translationX} sizeStep={2} />

      <Loading ref={loadingRef} />
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    color: state.controlApp.settings.color.LOGIN,
    language: state.controlApp.settings.language,
  };
}

export default connect(mapStateToProps)(Login);

