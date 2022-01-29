import React, { FC, useRef } from "react";
import { BackHandler, Image, Linking, Pressable, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";

import Header from "../../Components/BaseComponents/Header";
import styleScaled from "./style";
import { IMAGE, STRING } from "../../Utils/Values";

const Ads: FC<any> = ({ navigation, color, language }) => {
  const refViewShot = useRef();
  const styles = styleScaled(color);

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", () => true);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", () => true);
    }, [])
  );

  return (
    <View ref={refViewShot} style={styles.container}
          options={{ result: "base64", quality: 0.5 }}>
      <Header title={language.THANK_YOU} />

      <View style={styles.scrollView}>
        <View style={styles.imageView}>
          <Image source={IMAGE.LOGO}
                 style={styles.image} />
        </View>

        <Text style={styles.txtContent}>{language.CONTENT_ADS_1}</Text>

        <Text style={styles.txtContent}>
          <Pressable style={{}} onPress={() => Linking.openURL(STRING.GITHUB_LINK)}>
            <Text style={styles.txtGithub}>{language.CONTENT_ADS_2}</Text>
          </Pressable>
          {language.CONTENT_ADS_3}
        </Text>
        <Text style={[styles.txtContent, { color: color.TXT_GREAT_DAY }]}>{language.HAVE_A_GREAT_DAY}</Text>
        <Text style={styles.txtName}>{STRING.NAME}</Text>
      </View>


      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.goBack()}>
        <Text style={styles.txtBtn}>{language.BACK}</Text>
      </TouchableOpacity>
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    color: state.controlApp.settings.color.ADS,
    language: state.controlApp.settings.language,
  };
}


export default connect(mapStateToProps)(Ads);
