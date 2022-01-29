import React, { FC, memo, useCallback } from "react";
import { View } from "react-native";
import styleScaled from "./style";
import { SIZES, SLIDE_INTRO } from "../../../Utils/Values";
import Animated, { Extrapolate, interpolate, interpolateColor, useAnimatedStyle } from "react-native-reanimated";


const Pagination: FC<any> = (props) => {
  const { color, translationX } = props;
  const styles = styleScaled(color);

  const Item = useCallback((index: number) => {

    const animatedPagination = useAnimatedStyle(() => {
      const backgroundColor = interpolateColor(
        translationX.value,
        [SIZES.WIDTH_WINDOW * (index - 1), SIZES.WIDTH_WINDOW * index, SIZES.WIDTH_WINDOW * (index + 1)],
        [color.PAGINATION_BG_INACTIVE, color.PAGINATION_BG_ACTIVE, color.PAGINATION_BG_INACTIVE]
      );

      const scale = interpolate(
        translationX.value,
        [SIZES.WIDTH_WINDOW * (index - 1), SIZES.WIDTH_WINDOW * index, SIZES.WIDTH_WINDOW * (index + 1)],
        [0.9, 1.1, 0.9],
        Extrapolate.CLAMP
      );

      return { backgroundColor, transform: [{ scale }] };
    });

    return (
      <Animated.View style={[styles.pagination, animatedPagination]} key={index.toString()} />
    );
  },[]);

  return (
    <View style={{ flexDirection: "row" }}>
      {SLIDE_INTRO.map((item, index) => Item(index))}
    </View>
  );
};

export default memo(Pagination);
