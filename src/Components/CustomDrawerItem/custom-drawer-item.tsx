import React, { FC, memo } from "react";
import { Text, TouchableOpacityProps, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styleScaled from "./style";

interface IProps extends TouchableOpacityProps {
  title: String;
  icon: String;
  titleStyle: object;
  color: any
}

const CustomDrawerItem: FC<any> = (props: IProps) => {
  const { title, icon, titleStyle, color, ...touchableProps } = props;
  const styles = styleScaled(color);
  return (
    <TouchableOpacity style={styles.container} {...touchableProps}>
      <View style={styles.icon}>
        {icon}
      </View>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(CustomDrawerItem);
