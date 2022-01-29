import React, { FC, useCallback, useRef, useState } from "react";
import { connect } from "react-redux";
import ViewShot from "react-native-view-shot";
import { useFocusEffect } from "@react-navigation/native";
import Header from "../../Components/BaseComponents/Header";
import { bindActionCreators } from "redux";
import * as ControllAppActions from "../../Store/Actions/control-app-actions";
import styleScaled from "./style";
import { BackHandler, Text, TextInput, TouchableOpacity, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { FeedbackServices } from "../../Store/Services/feedback-services";
import { ShowToast } from "../../Utils/Helpers";

const Feedback: FC<any> = (props) => {
  const { navigation, setBackgroundScreenDrawer, color, language } = props;
  const styles = styleScaled(props.color);

  const [valueType, setValueType] = useState<boolean>(true);
  const refViewShot = useRef();
  const refContent = useRef<string>("");

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        refViewShot.current.capture().then(image => {
          setBackgroundScreenDrawer(image);
        });
      }, 1000);
    }, [])
  );

  const changeContent = useCallback((text: string) => {
    refContent.current = text.trim();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", () => true);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", () => true);
    }, [])
  );

  const onSenFeedback = useCallback(() => {
    if (refContent.current === "") {
      ShowToast(
        "error",
        language.LACK,
        language.LACK_CONTENT
      );
    } else {
      FeedbackServices.sendFeedback({ content: refContent.current, type: valueType ? "Feedback" : "Error" });
      ShowToast(
        "success",
        language.SUCCESS,
        language.FEEDBACK_RECEIVED
      );
    }
  }, [valueType]);

  return (
    <ViewShot ref={refViewShot} style={styles.container}
              options={{ result: "base64", quality: 0.5 }}>
      <Header onPressLeft={() => navigation.openDrawer()} iconLeftType={"MaterialIcons"} iconLeft={"notes"}
              title={language.FEEDBACK} />

      <View style={styles.viewSwitch}>
        <TouchableOpacity style={[styles.touchSwitch,
          {
            borderTopLeftRadius: moderateScale(8), borderBottomLeftRadius: moderateScale(8),
            backgroundColor: valueType ? color.BG_BTN_ACTIVE : color.BG_BTN_INACTIVE
          }]}
                          onPress={() => setValueType(true)}>
          <Text
            style={[styles.textSwitch, { color: !valueType ? color.TXT_BTN_INACTIVE : color.TXT_BTN_ACTIVE }]}>{language.COMMENT}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.touchSwitch,
          {
            borderTopRightRadius: moderateScale(8), borderBottomRightRadius: moderateScale(8),
            backgroundColor: !valueType ? color.BG_BTN_ACTIVE : color.BG_BTN_INACTIVE
          }]}
                          onPress={() => setValueType(false)}>
          <Text
            style={[styles.textSwitch, { color: valueType ? color.TXT_BTN_INACTIVE : color.TXT_BTN_ACTIVE }]}>{language.ERROR_REPORT}</Text>
        </TouchableOpacity>
      </View>

      {/*content*/}
      <TextInput
        placeholder={language.CONTENT}
        style={styles.input}
        placeholderTextColor={color.TXT_PLACE_HOLDER}
        underlineColorAndroid={"transparent"}
        returnKeyType={"done"}
        onChangeText={changeContent} />

      <Text style={styles.txtNote}>{language.FEEDBACK_NOTE}</Text>

      <TouchableOpacity
        style={styles.btnSendFeedback}
        onPress={onSenFeedback}>
        <Text style={styles.txtSendFeedback}>{language.SEND_FEEDBACK}</Text>
      </TouchableOpacity>
    </ViewShot>
  );
};

function mapStateToProps(state: any) {
  return {
    color: state.controlApp.settings.color.FEEDBACK,
    language: state.controlApp.settings.language
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    setBackgroundScreenDrawer: bindActionCreators(ControllAppActions.setBackgroundScreenDrawer, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
