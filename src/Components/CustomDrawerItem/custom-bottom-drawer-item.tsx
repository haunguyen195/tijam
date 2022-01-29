import React, { FC, memo } from "react";
import { Text, TouchableOpacityProps, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styleScaled from "./style";
import auth from "@react-native-firebase/auth";
import { DrawerNavigationProp } from "@react-navigation/drawer";

interface IProps extends TouchableOpacityProps {
  titleLogout: String;
  titleSettings: String;
  icon: String;
  titleStyle: object;
  color: any,
  navigation: DrawerNavigationProp<any>
}

const CustomBottomDrawerItem: FC<any> = (props: IProps) => {
  const { titleSettings, titleLogout, icon, titleStyle, color, navigation, ...touchableProps } = props;
  const styles = styleScaled(color);
  return (
    <View style={styles.containerBottom}>
      {/*settings*/}
      <TouchableOpacity style={styles.container} {...touchableProps} onPress={() => navigation.navigate("Setting")}>
        <View style={styles.icon}>
          {/* <Icon {...icon} /> */}
          {icon}
        </View>
        <Text style={[styles.title, titleStyle]}>{titleSettings}</Text>
      </TouchableOpacity>

      <View style={styles.stroke} />

      {/*log out*/}
      <TouchableOpacity style={styles.container} {...touchableProps} onPress={() => {
        auth().signOut();
      }}>
        <Text style={[styles.title, titleStyle]}>{titleLogout}</Text>
      </TouchableOpacity>
    </View>

  );
};

export default memo(CustomBottomDrawerItem);
