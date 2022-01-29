import React, { FC, forwardRef, memo, useImperativeHandle } from "react";
import { Text, TextInput, View } from "react-native";
import styleScaled from "./style";

const Password: FC<any> = forwardRef((props, ref) => {
  const { color, scrollTo, isLogin = true } = props;
  const styles = styleScaled(color);

  useImperativeHandle(
    ref,
    () => ({
      onPressNext(index: number) {
        isLogin ? console.log("login") : scrollTo(index + 1);
      }
    })
  );

  return (
    <View style={styles.container}>
      <Text style={styles.bigTxt} numberOfLines={2} ellipsizeMode={'tail'}>{isLogin ? "Chào jimmi !" : "Đặt mật khẩu"}</Text>
      <Text
        style={styles.smallTxt}>{isLogin ? "Mật khẩu của bạn là gì nào ?" : "Đặt mật khẩu cho tài khoản của bạn !"}</Text>

      <TextInput
        placeholder={"Mật khẩu"}
        style={styles.input}
        underlineColorAndroid={"transparent"}
        returnKeyType={"send"}
      />

      {
        !isLogin ?
          <TextInput
            placeholder={"Nhập lại mật khẩu"}
            style={styles.input}
            underlineColorAndroid={"transparent"}
            returnKeyType={"send"}
          />
          : null
      }

    </View>
  );
});

export default memo(Password);
