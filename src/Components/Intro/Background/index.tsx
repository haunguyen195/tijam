import React, { FC, memo } from "react";
import { View } from "react-native";
import styleScaled from "./style";
import { SIZES } from "../../../Utils/Values";
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from "react-native-reanimated";


const Background: FC<any> = (props) => {
  const { color, translationX } = props;
  const styles = styleScaled(color);

  const animatedTranslateX = useAnimatedStyle(() => {

    const translateX = interpolate(
      translationX.value,
      [0, SIZES.WIDTH_WINDOW * 2],
      [0, -SIZES.WIDTH_WINDOW],
      Extrapolate.CLAMP
    );

    return { transform: [{ translateX }] };
  });

  return (
    <Animated.View style={[styles.container, animatedTranslateX]}>
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <View style={styles.circle3} />
    </Animated.View>
  );
};

export default memo(Background);
