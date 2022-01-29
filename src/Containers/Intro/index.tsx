import React, { FC, useCallback, useRef, useState } from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { LIGHT } from "../../Utils/Themes";
import styleScaled from "./style";
import { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import Slides from "../../Components/Intro/Slides";
import Pagination from "../../Components/Intro/Pagination";
import { IMAGE, SLIDE_INTRO } from "../../Utils/Values";
import { moderateScale } from "react-native-size-matters";
import Icon from "../../Components/BaseComponents/Icon";
import Background from "../../Components/Intro/Background";
import { connect } from "react-redux";
import { VI } from "../../Utils/Languages";
import { bindActionCreators } from "redux";
import * as ControlAppActions from "../../Store/Actions/control-app-actions";


const Intro: FC<any> = ({ color, colorSet, language, navigation, updateSetting }) => {
  const styles = styleScaled(color);

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideList = useRef(null);
  const translationX = useSharedValue(0);
  const [languageValue, setLanguageValue] = useState<boolean>(language === VI);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });


  const pressRouter = (next: boolean) => {
    if (next) {
      if (currentIndex != SLIDE_INTRO.length - 1) {
        slideList.current.scrollTo(currentIndex + 1);
      } else
        goToLogin();
    } else if (currentIndex > 0)
      slideList.current.scrollTo(currentIndex - 1);
  };

  const goToLogin = useCallback(() => {
    navigation.navigate("Login");
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle={colorSet===LIGHT?"dark-content":"light-content"} />

      {/*nút bỏ qua*/}
      <TouchableOpacity
        onPress={() => {
          updateSetting("language", languageValue ? "en" : "vi");
          setLanguageValue(!languageValue);
        }}
        disabled={currentIndex == (SLIDE_INTRO.length - 1)}
        style={styles.btnChangeLanguage}>
        <Image
          source={languageValue ? IMAGE.US_FLAG : IMAGE.VI_FLAG}
          style={styles.imageFlag} />
      </TouchableOpacity>

      {/*Nội dung*/}
      <Slides language={language} ref={slideList} color={color} scrollHandler={scrollHandler} setCurrentIndex={setCurrentIndex} />

      {/*router bên dưới*/}
      <View style={styles.viewRouter}>

        <TouchableOpacity
          onPress={() => pressRouter(false)}
          disabled={currentIndex == 0}
          style={[styles.routerTouch, {
            backgroundColor: color.BG_BTN_PRE,
            opacity: currentIndex == 0 ? 0 : 1
          }]}>
          <Icon type={"MaterialIcons"} name={"keyboard-arrow-left"} size={moderateScale(33, 0.3)}
                color={color.IC_BTN_PRE} />
        </TouchableOpacity>


        {/*3 chấm*/}
        <Pagination color={color} translationX={translationX} />

        <TouchableOpacity style={[styles.routerTouch, { backgroundColor:color.BG_BTN_NEXT }]}
                          onPress={() => pressRouter(true)}>
          <Icon type={"MaterialIcons"} name={"keyboard-arrow-right"} size={moderateScale(33, 0.3)}
                color={color.IC_BTN_NEXT} />
        </TouchableOpacity>
      </View>

      <Background color={color} translationX={translationX} />

    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    color: state.controlApp.settings.color.INTRO,
    colorSet: state.controlApp.settings.color,
    language: state.controlApp.settings.language,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    updateSetting: bindActionCreators(ControlAppActions.updateSetting, dispatch)
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(Intro);
