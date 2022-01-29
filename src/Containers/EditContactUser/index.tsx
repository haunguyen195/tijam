import React, { FC, useRef } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import styleScaled from "./style";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Header from "../../Components/BaseComponents/Header";
import {
  ARRAY_SOCIAL_NETWORKS,
  COLOR_SOCIAL_NETWORKS,
  ICON_SOCIAL_NETWORKS,
  TYPE_KEYBOARD_SOCIAL_NETWORKS
} from "../../Utils/Values";
import Icon from "../../Components/BaseComponents/Icon";
import * as UserActions from "../../Store/Actions/user-actions";

const EditContactUser: FC<any> = (props) => {
  const { navigation, color, language, userInfor, updateUserInfor } = props;
  const styles = styleScaled(color);

  const refSocialNetwork = useRef([]);

  const saveInfor = () => {
    let objectSocialNetwork = {};
    ARRAY_SOCIAL_NETWORKS.map((item) => {
      if (refSocialNetwork.current[item])
        objectSocialNetwork = { ...objectSocialNetwork, [item]: refSocialNetwork.current[item] };
    });

    updateUserInfor(objectSocialNetwork);
    navigation.goBack();
  };

  const renderSocialNetworks = (item: string) => {
    refSocialNetwork.current[item] = userInfor[item];

    return (
      <View style={styles.viewContact} key={item}>
        <Icon name={ICON_SOCIAL_NETWORKS[item]} type={"FontAwesome"} style={styles.icon}
              color={COLOR_SOCIAL_NETWORKS[item]} />
        <TextInput style={styles.input} numberOfLines={1} placeholderTextColor={color.TXT_PLACE_HOLDER}
                   placeholder={item !== "phoneNumberPublic" ? (item.charAt(0).toUpperCase() + item.slice(1)) : language.PHONE_NUMBER}
                   maxLength={100} keyboardType={TYPE_KEYBOARD_SOCIAL_NETWORKS[item]}
                   onChangeText={(text) => refSocialNetwork.current[item] = text}>{userInfor[item]}</TextInput>
      </View>
    );
  };

  return (
    <View style={styles.container}>

      <Header title={language.EDIT_CONTACT_INFO} iconRight={"check"} iconRightType={"Feather"}
              onPressRight={saveInfor} />

      <Text style={styles.txtNote}>
        <Text style={styles.txtNoteBold}>{language.NOTE + ": "}</Text>{language.EDIT_CONTACT_NOTE}</Text>
      <ScrollView contentContainerStyle={styles.viewContent}>
        {ARRAY_SOCIAL_NETWORKS.map(renderSocialNetworks)}
      </ScrollView>

    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    color: state.controlApp.settings.color.EDIT_CONTACT_USER,
    language: state.controlApp.settings.language,
    userInfor: state.user.userInfor
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    updateUserInfor: bindActionCreators(UserActions.updateUserInfor, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditContactUser);
