import React, { FC, memo } from "react";
import { Image, View } from "react-native";
import styleScaled from "./style";
import { IMAGE, SIZES } from "../../../Utils/Values";
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from "react-native-reanimated";


const Background: FC<any> = (props) => {
  const { color, translationX, sizeStep } = props;
  const styles = styleScaled(color);

  const animatedTranslateX = useAnimatedStyle(() => {

    const translateX = interpolate(
      translationX.value,
      [0, SIZES.WIDTH_WINDOW * (sizeStep - 1)],
      [-SIZES.WIDTH_WINDOW * 0.1, -SIZES.WIDTH_WINDOW * 1.15],
      Extrapolate.CLAMP
    );

    return { transform: [{ translateX }] };
  });

  return (
    <Animated.View style={[styles.container, animatedTranslateX]}>
      <Image source={IMAGE.WORLD_MAP}
             style={styles.image} />
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <View style={styles.circle3} />
    </Animated.View>
  );
};

export default memo(Background);
