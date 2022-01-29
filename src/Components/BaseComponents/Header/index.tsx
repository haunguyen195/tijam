import React from "react";
import { Pressable, Text, View } from "react-native";
import Icon from "../Icon";
import { moderateScale, scale } from "react-native-size-matters";
import styleScaled from "./style";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

interface HeaderProps {
  color?: any,
  title: string,
  iconLeft?: string,
  iconLeftType?: string,
  iconRight?: string,
  iconRightType?: string,
  onPressLeft?: () => void,
  onPressRight?: () => void,
}

function Header({
                  color,
                  title = "",
                  iconLeft = "arrow-left",
                  iconLeftType = "Feather",
                  iconRight,
                  iconRightType,
                  onPressLeft,
                  onPressRight = () => {
                  }
                }: HeaderProps) {
  const navigation = useNavigation();
  const styles = styleScaled(color);

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Pressable style={[styles.button, { marginLeft: scale(8) }]}
                   onPress={onPressLeft || (() => navigation.goBack())}>
          <Icon type={iconLeftType} name={iconLeft} size={moderateScale(28, 0.3)}
                color={color.IC} />
        </Pressable>

        <Text numberOfLines={1} ellipsizeMode={"tail"} allowFontScaling={false} style={styles.txtHeader}>{title}</Text>

        {iconRight ? <Pressable style={[styles.button, { marginRight: scale(8) }]} onPress={onPressRight}>
            <Icon type={iconRightType || ""} name={iconRight} size={moderateScale(28, 0.3)}
                  color={color.IC} />
          </Pressable>
          :
          <View style={[styles.button, { marginRight: scale(8) }]} />}
      </View>

    </View>
  );
}

function mapStateToProps(state: any) {
  return {
    color: state.controlApp.settings.color.HEADER
  };
}

export default connect(mapStateToProps)(Header);
