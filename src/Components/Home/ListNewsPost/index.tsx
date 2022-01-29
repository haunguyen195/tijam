import React, { FC, forwardRef, memo, useCallback, useImperativeHandle, useRef, useState } from "react";
import { FlatList, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  Transition,
  Transitioning,
  useAnimatedGestureHandler,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  State,
  TapGestureHandler,
  TapGestureHandlerStateChangeEvent
} from "react-native-gesture-handler";
import Item from "./item";
import LottieView from "lottie-react-native";
import styleScaled, {
  HEIGHT_ITEM_MEDIUM,
  HEIGHT_ITEM_SMALL,
  HEIGHT_SPRING_BOTTOM,
  HEIGHT_SPRING_TOP,
  SIZE_ITEM
} from "./style";
import { scale, verticalScale } from "react-native-size-matters";
import ModalImage from "../../BaseComponents/ModalImage";
import { LOTTIE } from "../../../Utils/Values";


const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const AnimatedTransitioning = Animated.createAnimatedComponent(Transitioning.View);
const xTransformStar = scale(150);
const yTransformStar = scale(-150) + verticalScale(47.5);

type AnimatedGHContext = {
  startY: number;
};

const Star = forwardRef((props, ref) => {
  const [showStar, setShowStar] = useState<boolean>(false);
  const [starX, setStarX] = useState<number>(0);
  const [starY, setStarY] = useState<number>(0);

  useImperativeHandle(
    ref,
    () => ({
      showStarAnimated(x: number, y: number) {
        setStarX(x - xTransformStar);
        setStarY(y * 0.95 + yTransformStar);
        setShowStar(true);
        setTimeout(() => setShowStar(false), 1000);
      }
    })
  );

  return (showStar ?
      <Animated.View pointerEvents={"none"} style={[props.styles.viewStar, { left: starX, top: starY }]}>
        <LottieView source={LOTTIE.STAR} autoPlay />
      </Animated.View>
      : null
  );
});

const transition = (
  <Transition.Together>
    <Transition.In type={"fade"} durationMs={500} />
    <Transition.Change />
    <Transition.Out type={"fade"} durationMs={500} />
  </Transition.Together>
);


const ListNewsPost: FC<any> = forwardRef((props, ref) => {
  const { color, posts, animatedToRegion, language } = props;
  const styles = styleScaled(color);
  const scrollX = useSharedValue(0);
  const translationY = useSharedValue(0);
  const [expand, setExpand] = useState(false);
  const [imageToView, setImageToView] = useState("");
  const refListPost = useRef();
  const refTransition = useRef();
  const refStar = useRef();
  const refModalImage = useRef();
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });
  const onViewRef = React.useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      animatedToRegion(viewableItems[0].item.latitude, viewableItems[0].item.longitude);
      setImageToView(viewableItems[0].item.image);
    }
  });

  useImperativeHandle(
    ref,
    () => ({
      scrollToIndex(index: number) {
        refListPost.current.scrollToIndex({ index, animated: false });
      }
    })
  );

  const expandAnimated = useCallback(() => {
    refTransition.current.animateNextTransition();
    setExpand(expand => !expand);
  }, []);

  const showStarAnimated = useCallback((x: number, y: number) => {
    refStar.current.showStarAnimated(x, y);
  }, []);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  const gestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, AnimatedGHContext>({
    onStart: (_, ctx) => {
      ctx.startY = translationY.value;
    },
    onActive: (event, ctx) => {
      translationY.value = ctx.startY + event.translationY;
    },
    onEnd: (_) => {
      translationY.value = withSpring(translationY.value < HEIGHT_ITEM_MEDIUM ? 0 : HEIGHT_ITEM_SMALL);
    }
  });

  const onSingleTap = (event: TapGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      translationY.value = withSpring(translationY.value > HEIGHT_ITEM_MEDIUM ? 0 : HEIGHT_ITEM_SMALL);
    }
  };

  const styleAnimatedY = useAnimatedStyle(() => {
    const translateY = interpolate(
      translationY.value,
      [HEIGHT_SPRING_BOTTOM, 0, HEIGHT_ITEM_SMALL, HEIGHT_SPRING_TOP],
      [HEIGHT_SPRING_BOTTOM, 0, HEIGHT_ITEM_SMALL, HEIGHT_SPRING_TOP],
      Extrapolate.CLAMP
    );
    return { transform: [{ translateY }] };
  });

  const opacity = useAnimatedStyle(() => {
    const opacity = interpolate(
      translationY.value,
      [HEIGHT_SPRING_BOTTOM, 0, HEIGHT_ITEM_SMALL, HEIGHT_SPRING_TOP],
      [0, 0, 1, 1],
      Extrapolate.CLAMP
    );
    return { opacity };
  });

  const showImage = useCallback(() => {
    refModalImage.current.show();
  }, []);

  const renderItem = useCallback(({ item }) => <Item expandAnimated={expandAnimated} color={color}
                                                     item={item} showStarAnimated={showStarAnimated}
                                                     showImage={showImage} language={language}
                                                     expand={expand} styles={styles} />, [expand, language, color]);
  const keyExtractor = useCallback((item) => item.id, []);
  const getItemLayout = useCallback((data, index) => ({
    length: SIZE_ITEM,
    offset: SIZE_ITEM * index,
    index
  }), []);

  return (
    <AnimatedTransitioning transition={transition} ref={refTransition}
                           style={[styles.containerTransitioning, styleAnimatedY]}>

      <PanGestureHandler
        onGestureEvent={gestureHandler}
        onHandlerStateChange={gestureHandler}>
        <Animated.View>
          <TapGestureHandler onHandlerStateChange={onSingleTap}>
            <Animated.View style={[styles.containerDrag, opacity]}>
              <View style={styles.viewDrag} />
            </Animated.View>
          </TapGestureHandler>
        </Animated.View>
      </PanGestureHandler>

      <PanGestureHandler
        enabled={!expand}
        onGestureEvent={gestureHandler}
        activeOffsetY={[verticalScale(-20), verticalScale(20)]}
        onHandlerStateChange={gestureHandler}>
        <AnimatedFlatList horizontal
                          ref={refListPost}
                          data={posts}
                          viewabilityConfig={viewConfigRef.current}
                          onViewableItemsChanged={onViewRef.current}
                          contentContainerStyle={{ alignItems: "flex-start" }}
                          renderItem={renderItem}
                          getItemLayout={getItemLayout}
                          maxToRenderPerBatch={3}
                          removeClippedSubviews={true}
                          initialNumToRender={2}
                          keyExtractor={keyExtractor}
                          windowSize={3}
                          pagingEnabled
                          showsHorizontalScrollIndicator={false}
                          snapToInterval={SIZE_ITEM}
                          decelerationRate={0.8}
                          bounces={false}
                          onScroll={scrollHandler}
                          scrollEventThrottle={16} />
      </PanGestureHandler>

      <Star ref={refStar} styles={styles} />
      <ModalImage
        url={[{
          url: imageToView
        }]} ref={refModalImage} />

    </AnimatedTransitioning>
  );
});

export default memo(ListNewsPost);
