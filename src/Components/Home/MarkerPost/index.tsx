import React, { FC, memo } from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Svg, { Defs, Path, RadialGradient, Rect, Stop } from "react-native-svg";
import styleScaled from "./style";
import FastImage from "react-native-fast-image";
import { COLOR_TYPE, ICON_TYPE, IMAGE, TYPE } from "../../../Utils/Values";
import Icon from "../../BaseComponents/Icon";
import { moderateScale } from "react-native-size-matters";
import { Post } from "../../../Models";

interface PropsItem {
  item: Post,
  color: any,
  style?:any
}

const MarkerPost: FC<PropsItem> = (props) => {
  const { color } = props;
  const { avatar, label, type } = props.item;
  const styles = styleScaled(color);

  return (
    <TouchableOpacity
      style={[{ height: moderateScale(64) },{...props.style}]}>

      {/*background marker*/}
      <Svg width="100%" height="75%" style={{ position: "absolute" }}>

        {/*rect content*/}
        <Svg width="100%" height="100%" style={{ position: "absolute" }}>
          <Defs>
            <RadialGradient id="grad" cx="50%" cy={`${moderateScale(38)}`} rx="50%" ry={`${moderateScale(19)}`}
                            gradientUnits="userSpaceOnUse">
              <Stop offset="0.7" stopColor="#000" stopOpacity="0.7" />
              <Stop offset="1" stopColor="#000" stopOpacity="0.1" />
            </RadialGradient>
          </Defs>
          <Rect x="0" y={`${moderateScale(2)}`} width="100%" height={`${moderateScale(38)}`} fill="url(#grad)"
                rx={moderateScale(20)} />
        </Svg>

        <Svg width="100%" height="100%" style={{ position: "absolute" }}>
          <Rect x="1%" y="0" width="98%" height={`${moderateScale(38)}`} fill={color.BG_MARKER} rx={moderateScale(20)} />
        </Svg>

        {/*arrow*/}
        <Svg width="100%" height="100%" viewBox="0 0 100 100" style={{ position: "absolute" }}>
          <Defs>
            <RadialGradient id="grad" cx="50%" cy={`${moderateScale(38)}`} rx="50%" ry={`${moderateScale(19)}`}
                            gradientUnits="userSpaceOnUse">
              <Stop offset="0.7" stopColor="#000" stopOpacity="0.7" />
              <Stop offset="1" stopColor="#000" stopOpacity="0.1" />
            </RadialGradient>
          </Defs>

          <Path d="M 33 80 L 67 80 L 50 100 z" fill="url(#grad)" />
          <Path d="M 33 75 L 67 75 L 50 95 z" fill={color.BG_MARKER} />
        </Svg>

      </Svg>

      {/*Icon type*/}
      <View style={[styles.viewIconBottom, { backgroundColor: COLOR_TYPE[type] }]}>
        <Icon type={"MaterialCommunityIcons"} name={ICON_TYPE[type]} style={styles.iconType} />
      </View>


      {/*Content*/}
      <View style={styles.viewContent}>
        {avatar ?
          <FastImage
            style={styles.avatar}
            source={{
              uri: avatar,
              priority: FastImage.priority.high
            }}
            resizeMode={"cover"}
          /> :
          <Image
            style={styles.avatar}
            source={IMAGE.EMPTY_AVATAR}
            resizeMode={"cover"}
          />}

        <Text numberOfLines={2}
              style={[styles.labelMarker, { color: COLOR_TYPE[type] }]}>{label.replace(" ", "\n")}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(MarkerPost);
