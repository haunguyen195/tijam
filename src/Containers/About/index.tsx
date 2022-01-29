import React, { FC, useRef } from "react";
import { BackHandler, Image, Linking, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import ViewShot from "react-native-view-shot";
import { useFocusEffect } from "@react-navigation/native";
import { bindActionCreators } from "redux";

import Header from "../../Components/BaseComponents/Header";
import * as ControlAppActions from "../../Store/Actions/control-app-actions";
import styleScaled from "./style";
import { IMAGE, STRING } from "../../Utils/Values";

const About: FC<any> = ({ navigation, setBackgroundScreenDrawer, color, language }) => {
  const styles = styleScaled(color);
  const refViewShot = useRef();

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        refViewShot.current.capture().then(image => {
          setBackgroundScreenDrawer(image);
        });
      }, 1000);
    }, [])
  );

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", () => true);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", () => true);
    }, [])
  );

  return (
    <ViewShot ref={refViewShot} style={styles.container}
              options={{ result: "base64", quality: 0.5 }}>
      <Header onPressLeft={() => navigation.openDrawer()} iconLeftType={"MaterialIcons"} iconLeft={"notes"}
              title={language.ABOUT_TIJAM} />
      <ScrollView contentContainerStyle={styles.scrollView} style={{flex:1}}>
        <View style={styles.imageView}>
          <Image source={IMAGE.LOGO}
                 style={styles.image} />
        </View>

        <Text style={styles.txtContent}>{language.CONTENT_ABOUT_1}</Text>

        <Text style={styles.txtContent}>{language.CONTENT_ABOUT_2}</Text>

        <Text style={styles.txtContent}>
          <Pressable onPress={() => Linking.openURL(STRING.MAIL_TO)}>
            <Text style={styles.txtEmail}>
              {STRING.EMAIL}
            </Text>
          </Pressable>
          {language.CONTENT_ABOUT_3}
        </Text>
        <Text style={[styles.txtContent, { color: color.TXT_GREAT_DAY }]}>{language.HAVE_A_GREAT_DAY}</Text>
        <Text style={styles.txtName}>{STRING.NAME}</Text>
      </ScrollView>


      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Ads")}>
        <Text style={styles.txtBtn}>{language.SEE_ADS}</Text>
      </TouchableOpacity>
    </ViewShot>
  );
};

function mapStateToProps(state: any) {
  return {
    color: state.controlApp.settings.color.ABOUT,
    language: state.controlApp.settings.language,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    setBackgroundScreenDrawer: bindActionCreators(ControlAppActions.setBackgroundScreenDrawer, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
