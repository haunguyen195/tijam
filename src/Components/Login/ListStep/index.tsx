import React, { FC, forwardRef, memo, useCallback, useImperativeHandle, useRef, useState } from "react";
import { FlatList } from "react-native";
import styleScaled , { SIZE_ITEM } from "./style";
import Animated from "react-native-reanimated";
import PhoneNumber from "../PhoneNumber";
import { LIGHT } from "../../../Utils/Themes";
import Password from "../Password";
import Nickname from "../Nickname";
import RegisterInformation from "../RegisterInformation";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);


const ListStep: FC<any> = forwardRef((props, ref) => {
  const { color, language, scrollHandler, setCurrentStep } = props;
  const styles = styleScaled(color);
  const flatList = useRef(null);
  const itemRefs = useRef([]);

  const scrollStepTo = useCallback((index: number) => {
    flatList.current.scrollToIndex({ index });
  }, []);

  const [router, setRouter] = useState([
    <PhoneNumber color={color} language={language} ref={(element) => itemRefs.current[0] = element} scrollTo={scrollStepTo} />,
    <Nickname color={color} language={language} ref={(element) => itemRefs.current[1] = element} scrollTo={scrollStepTo}/>,
    <RegisterInformation color={color} language={language} ref={(element) => itemRefs.current[2] = element} />
  ]);

  useImperativeHandle(
    ref,
    () => ({
      scrollTo(index: number) {
        flatList.current.scrollToIndex({ index });
      },
      setRouterList(router: any) {
        setRouter(router);
      },
      onPressNext(index: number) {
        itemRefs.current[index].onPressNext(index);
      },
      onPressPre(index: number) {
        flatList.current.scrollToIndex({ index: index - 1 });
      }
    })
  );

  const keyExtractor = useCallback((item, index) => index.toString(), []);

  const getItemLayout = useCallback((data, index) => ({
    length: SIZE_ITEM,
    offset: SIZE_ITEM * index,
    index
  }), []);

  const Item = useCallback(({ item, index }) => item, []);

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    setCurrentStep(viewableItems[0].index);
  }, []);

  return (
    <AnimatedFlatList
      scrollEnabled={false}
      ref={flatList}
      showsHorizontalScrollIndicator={false}
      data={router}
      renderItem={Item}
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

export default memo(ListStep);
