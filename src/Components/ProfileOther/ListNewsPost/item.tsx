import React, { FC, memo } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { COLOR_TYPE, ICON_TYPE, IMAGE, SHADOW_2, SIZES } from "../../../Utils/Values";
import { Post } from "../../../Models";
import Icon from "../../BaseComponents/Icon";
import moment from "moment";
import FastImage from "react-native-fast-image";
import { numberHelpers } from "../../../Utils/Helpers";
import LinearGradient from "react-native-linear-gradient";
import { IC_COUNT_SIZE, IC_DURA_SIZE } from "./style";

interface ItemProps {
  item: Post,
  styles: object,
  color: any,
  viewPostMap: Function,
  language: object
}

const Item: FC<ItemProps> = ({ item, styles, color, language, viewPostMap }) => {

  return (

    <TouchableOpacity onPress={viewPostMap} style={styles.pressableItem}>
      <View style={styles.containerItem}>

        {/*duration*/}
        <View style={[styles.viewDuration, { backgroundColor: COLOR_TYPE[item.type] }]}>
          <Icon type={"MaterialCommunityIcons"} name={ICON_TYPE[item.type]} color={color.LISTPOST_IC_TYPE}
                size={IC_DURA_SIZE} />
          <Text style={styles.txtDuration}>{language[item.type]}</Text>
        </View>

        {/*header*/}
        <View style={styles.viewHeader}>
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
            </View>}

          {/*nickname and time create*/}
          <View style={styles.viewInfor}>
            <Text style={styles.txtNickname} numberOfLines={1}
                  ellipsizeMode={"tail"}>{item.nickname}</Text>
            <Text style={styles.txtCreateTs}>{moment(item.create_ts).format("HH:mm  DD/MM/yyyy")}</Text>
          </View>

        </View>

        <Text style={styles.txtCount}>
          <Icon type={"FontAwesome5"} solid name={"eye"} size={IC_COUNT_SIZE} color={color.LISTPOST_IC_COUNT} />
          {" " + numberHelpers(Math.floor(Math.random() * 1000000),language) + "    "}
          <Icon type={"FontAwesome5"} solid name={"star"} size={IC_COUNT_SIZE} color={color.LISTPOST_IC_COUNT} />
          {" " + numberHelpers(Math.floor(Math.random() * 300000),language) + "    "}
          <Icon type={"FontAwesome5"} solid name={"share"} size={IC_COUNT_SIZE} color={color.LISTPOST_IC_COUNT} />
          {" " + numberHelpers(Math.floor(Math.random() * 1000),language)}
        </Text>

        <ScrollView scrollEnabled={false} showsVerticalScrollIndicator={false} style={{ width: "100%" }}>
          <Text style={styles.txtLabel}>{item.label}</Text>
          {/*<Text style={styles.txtTag}>#home #vietnam #QuyetThang</Text>*/}
          <Text style={styles.txtContent}>{item.content}</Text>
          {item.image != null && item.image != "" ?
            <FastImage
              style={[styles.image, { height: item.image_height / (item.image_width / (SIZES.WIDTH_WINDOW * 0.9 * 0.84)) }]}
              source={{
                uri: item.image,
                priority: FastImage.priority.normal
              }}
              resizeMode={"contain"}
            /> : null}
        </ScrollView>

        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                        colors={["#00000000", color.LISTPOST_LG]} locations={[0, 0.9]}
                        pointerEvents={"none"}
                        style={styles.viewLinear} />
      </View>
    </TouchableOpacity>

  );
};

export default memo(Item);
