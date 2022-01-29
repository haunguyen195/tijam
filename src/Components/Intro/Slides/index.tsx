import React, { FC, forwardRef, memo, useCallback, useImperativeHandle, useRef } from "react";
import { FlatList, Text, View } from "react-native";
import styleScaled, { SIZE_ITEM } from "./style";
import { SLIDE_INTRO } from "../../../Utils/Values";
import LottieView from "lottie-react-native";
import Animated from "react-native-reanimated";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

interface PropsItem {
  image: string,
  title: string,
  description: string,
  step: number
}


const Slides: FC<any> = forwardRef((props, ref) => {
  const { color, language, scrollHandler, setCurrentIndex } = props;
  const styles = styleScaled(color);
  const flatList = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      scrollTo(index: number) {
        flatList.current.scrollToIndex({ index });
      }
    })
  );

  const renderItem = useCallback(({item}) => {
    const { image, key } = item;

    return (
      <View style={styles.containerSlide}>
        <LottieView source={image} autoPlay style={styles.lottieView} />
        <View style={styles.viewTxt}>
          <Text style={styles.titleTxt}>{language[key+"_TITLE"]}</Text>
          <Text style={styles.descriptionTxt}>{language[key+"_DES"]}</Text>
        </View>
      </View>
    );
  },[color, language]);

  const keyExtractor = useCallback((item) => item.step, []);

  const getItemLayout = useCallback((data, index) => ({
    length: SIZE_ITEM,
    offset: SIZE_ITEM * index,
    index
  }), []);

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }, []);

  return (
    <AnimatedFlatList
      ref={flatList}
      showsHorizontalScrollIndicator={false}
      data={SLIDE_INTRO}
      renderItem={renderItem}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout}
      pagingEnabled
      snapToInterval={SIZE_ITEM}
      bounces={false}
      decelerationRate={0.8}
      onScroll={scrollHandler}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 40
      }}
    />
  );
});

export default memo(Slides);
