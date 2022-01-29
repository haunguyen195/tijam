import React, { FC, useCallback, useEffect, useRef } from "react";
import { TextInput, View } from "react-native";
import styleScaled from "./style";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Header from "../../Components/BaseComponents/Header";
import * as UserActions from "../../Store/Actions/user-actions";

const EditDescriptionUser: FC<any> = (props) => {
  const { navigation, color, language, description, updateUserInfor } = props;
  const styles = styleScaled(color);

  const refInputDescription = useRef<TextInput>();
  const refDescription = useRef<string>(description || "");


  const saveInfor = () => {
    updateUserInfor({
      description: refDescription.current
    });
    navigation.goBack();
  };

  useEffect(() => {
    refInputDescription.current.setNativeProps({ text: refDescription.current });
    refInputDescription.current.focus();
  }, []);

  const changeText = useCallback((text) => {
    text = text.replace(/(\r\n|\n|\r)/gm, "");
    refDescription.current = text;
    refInputDescription.current.setNativeProps({ text: text });
  }, []);

  return (
    <View style={styles.container}>

      <Header title={language.EDIT_DESCRIPTION} iconRight={"check"} iconRightType={"Feather"}
              onPressRight={saveInfor} />

      <TextInput onChangeText={changeText} style={styles.inputDescription}
                 multiline ref={refInputDescription} maxLength={200} placeholderTextColor={color.TXT_PLACE_HOLDER}
                 placeholder={language.SELF_DESCRIPTION + "..."} />
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    color: state.controlApp.settings.color.EDIT_DESCRIPTION_USER,
    language: state.controlApp.settings.language,
    description: state.user.userInfor.description
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    updateUserInfor: bindActionCreators(UserActions.updateUserInfor, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDescriptionUser);
