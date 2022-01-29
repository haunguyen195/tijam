import React, { FC, useCallback, useEffect } from "react";
import { BackHandler, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import styleScaled from "./style";
import Icon from "../../Components/BaseComponents/Icon";
import { useFocusEffect } from "@react-navigation/native";

const Error: FC<any> = (props) => {
  const { navigation, route, color, language, isConnected } = props;
  const styles = styleScaled(color);
  const { iconType, iconName, actionType, action = true, params } = route.params;

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", () => true);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", () => true);
    }, [])
  );

  useEffect(() => {
    if (actionType === "ERROR_INTERNET" && isConnected) {
      navigation.goBack();
    }
  }, [isConnected]);

  const onPress = useCallback(() => {
    // switch (actionType) {
    //     case 'categories': {
    //         getCategories(params);
    //         navigation.goBack();
    //     }
    // }
  }, []);

  return (
    <View style={styles.container}>

      <Icon type={iconType} name={iconName}
            style={styles.icon} />
      <Text style={styles.txtDescription}>{language[actionType]}</Text>
      {action ?
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}
                          style={styles.btnTry}>
          <Text style={styles.txtTry}>{language.TRY_AGAIN}</Text>
        </TouchableOpacity>
        : null}
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    color: state.controlApp.settings.color.ERROR,
    language: state.controlApp.settings.language,
    isConnected: state.controlApp.isConnected
  };
}

function mapDispatchToProps(dispatch: any) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Error);

