import React, { FC, memo, useCallback, useRef } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { COLOR_TYPE, ICON_TYPE, IMAGE, SHADOW_2, SIZES } from "../../../Utils/Values";
import { Post } from "../../../Models";
import Icon from "../../BaseComponents/Icon";
import moment from "moment";
import FastImage from "react-native-fast-image";
import { numberHelpers } from "../../../Utils/Helpers";
import LinearGradient from "react-native-linear-gradient";
import { LongPressGestureHandler, ScrollView, State, TapGestureHandler } from "react-native-gesture-handler";
import { HEIGHT_ITEM_BIG, HEIGHT_ITEM_SMALL } from "./style";
import { useNavigation } from "@react-navigation/native";

interface ItemProps {
  item: Post,
  expand: boolean,
  expandAnimated: Function,
  showStarAnimated: Function,
  styles: any,
  color: any,
  showImage: (urlImage: String) => void,
  language: object
}

const Item: FC<ItemProps> = ({
                               item,
                               expand,
                               language,
                               expandAnimated,
                               showStarAnimated,
                               styles,
                               color,
                               showImage
                             }) => {
  const navigation = useNavigation();
  const doubleTapRef = useRef(null);

  const onSingleTap = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      expandView();
    }
  };

  const onDoubleTap = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      showStarAnimated(event.nativeEvent.absoluteX, event.nativeEvent.y);
    }
  };

  const onLongPress = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      console.log("Long press");
    }
  };

  const totalMinutes = moment(item.duration).diff(new Date(), "minutes");

  const expandView = useCallback(() => expandAnimated(), []);

  const openProfile = useCallback(() => {
    navigation.navigate("ProfileOther", { userId: item.userId });
  }, []);

  return (
    <TapGestureHandler
      enabled={!expand}
      onHandlerStateChange={onSingleTap}
      waitFor={doubleTapRef}>
      <TapGestureHandler
        enabled={expand} waitFor={doubleTapRef}>
        <TapGestureHandler enabled={expand} ref={doubleTapRef} onHandlerStateChange={onDoubleTap} numberOfTaps={2}>
          <LongPressGestureHandler
            onHandlerStateChange={onLongPress}
            minDurationMs={600}>

            {/*container*/}
            <View
              style={[styles.containerItem, {
                height: expand ? HEIGHT_ITEM_BIG : HEIGHT_ITEM_SMALL,
                // height: expand ? HEIGHT_ITEM_BIG : "auto",
                // maxHeight: expand ? HEIGHT_ITEM_BIG : HEIGHT_ITEM_SMALL,
                transform: [{ scale: expand ? 0.95 : 0.85 }]
              }]}>

              {/*duration*/}
              <View style={[styles.viewType, { backgroundColor: COLOR_TYPE[item.type] }]}>
                <Icon type={"MaterialCommunityIcons"} name={ICON_TYPE[item.type]} style={styles.iconType} />
                {/*<Text style={styles.txtDuration}>{Math.floor(totalMinutes / 60)}:{totalMinutes % 60}</Text>*/}
                <Text style={styles.txtType}>{language[item.type]}</Text>
              </View>

              {/*header*/}
              <Pressable disabled={!expand} onPress={openProfile} style={styles.viewHeaderItem}>
                {item.avatar ? <FastImage
                    style={[styles.avatar, { ...SHADOW_2 }]}
                    source={{
                      uri: item.avatar,
                      priority: FastImage.priority.normal
                    }}
                    resizeMode={"cover"}
                  /> :
                  <View style={[styles.avatar, { ...SHADOW_2 }]}>
                    <Image
                      style={styles.avatar}
                      source={IMAGE.EMPTY_AVATAR}
                      resizeMode={"cover"}
                    />
                  </View>
                }


                {/*nickname and time create*/}
                <View style={styles.txtHeader}>
                  <Text style={styles.txtNickname} numberOfLines={1}
                        ellipsizeMode={"tail"}>{item.nickname}</Text>
                  <Text style={styles.txtCreateTs}>{moment(item.create_ts).format("HH:mm  DD/MM/yyyy")}</Text>
                </View>

                {/*close btn*/}
                <Pressable disabled={!expand} onPress={expandView} hitSlop={styles.hitSlop}
                           style={[styles.viewCloseBtn, { opacity: expand ? 1 : 0 }]}>
                  <Icon type={"MaterialIcons"} name={"keyboard-arrow-down"} style={styles.iconArrowClose} />
                </Pressable>
              </Pressable>

              {/*count post's infor*/}
              <Text style={styles.txtCountInfor}>
                <Icon type={"FontAwesome5"} solid name={"eye"} style={styles.iconCount} />
                {" " + numberHelpers(Math.floor(Math.random() * 1000000),language) + "    "}
                <Icon type={"FontAwesome5"} solid name={"star"} style={styles.iconCount} />
                {" " + numberHelpers(Math.floor(Math.random() * 300000),language) + "    "}
                <Icon type={"FontAwesome5"} solid name={"share"} style={styles.iconCount} />
                {" " + numberHelpers(Math.floor(Math.random() * 1000),language)}
              </Text>

              {/*scrollview content and image*/}
              <ScrollView
                showsVerticalScrollIndicator={false}
                scrollEnabled={expand}
                style={{ width: "100%" }}>
                <Text style={styles.txtLabel}>{item.label}</Text>
                {/*<Text style={styles.txtTag}>#home #vietnam #QuyetThang</Text>*/}
                <Text style={styles.txtContent}>{item.content}</Text>
                {item.image != null && item.image != "" ?
                  <Pressable disabled={!expand} style={{ width: "100%" }} onPress={showImage}>
                    <FastImage
                      style={[styles.image, { height: item.image_height / (item.image_width / (SIZES.WIDTH_WINDOW * 0.9)) }]}
                      source={{
                        uri: item.image,
                        priority: FastImage.priority.normal
                      }}
                      resizeMode={"contain"}
                    />
                  </Pressable>
                  : null}
              </ScrollView>

              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                              colors={["#00000000", color.LIST_POST_LG]} locations={[0.3, 1]}
                              pointerEvents={"none"}
                              style={[styles.viewLinearGD, { opacity: expand ? 0 : 1 }]} />
            </View>
          </LongPressGestureHandler>
        </TapGestureHandler>
      </TapGestureHandler>
    </TapGestureHandler>
  );
};

export default memo(Item);
