import React, { FC, useEffect, useRef, useState } from "react";
import styleScaled from "./style";
import { connect } from "react-redux";
import ViewShot from "react-native-view-shot";
import { bindActionCreators } from "redux";
import * as ControlAppActions from "../../Store/Actions/control-app-actions";
import Header from "../../Components/BaseComponents/Header";
import { Image, Pressable, Switch, Text, View } from "react-native";
import { verticalScale } from "react-native-size-matters";
import { LIGHT } from "../../Utils/Themes";
import { VI } from "../../Utils/Languages";
import { IMAGE } from "../../Utils/Values";

const Setting: FC<any> = (props) => {
  const {
    setBackgroundScreenDrawer,
    updateSetting,
    color,
    language
  } = props;
  const styles = styleScaled(color.SETTING);
  const refViewShot = useRef();
  const [languageValue, setLanguageValue] = useState<boolean>(language === VI);
  const [colorValue, setColorValue] = useState<boolean>(color !== LIGHT);

  useEffect(() => {
    refViewShot.current.capture().then(image => {
      setBackgroundScreenDrawer(image);
    });
  }, []);

  return (
    <ViewShot ref={refViewShot} style={styles.container} options={{ result: "base64", quality: 0.5 }}>
      <Header
        title={language.SETTING} />

      <View style={styles.viewOption}>
        <Text style={styles.title}>{language.DARK_MODE}</Text>
        <Switch
          trackColor={{ true: color.BG_SWITCH_ACTIVE, false: color.BG_SWITCH_INACTIVE }}
          thumbColor={color.BG_SWITCH_THUMB}
          onValueChange={(value) => {
            updateSetting("color", value ? "DARK" : "LIGHT");
            setColorValue(value);
          }}
          value={colorValue}
        />
      </View>

      <View style={styles.viewOption} hitSlop={{ bottom: verticalScale(100) }}>
        <Text style={styles.title}>{language.LANGUAGE}</Text>
        <Pressable onPress={() => {
          updateSetting("language", languageValue ? "en" : "vi");
          setLanguageValue(!languageValue);
        }}>
          <Image
            source={languageValue ? IMAGE.US_FLAG : IMAGE.VI_FLAG}
            style={styles.imageFlag} />
        </Pressable>

      </View>

    </ViewShot>
  );
};

function mapStateToProps(state: any) {
  return {
    color: state.controlApp.settings.color,
    language: state.controlApp.settings.language
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    setBackgroundScreenDrawer: bindActionCreators(ControlAppActions.setBackgroundScreenDrawer, dispatch),
    updateSetting: bindActionCreators(ControlAppActions.updateSetting, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
