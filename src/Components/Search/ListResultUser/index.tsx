import React, { FC, memo, useCallback } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import styleScaled from "./style";
import { GENDER, IMAGE, SHADOW_2 } from "../../../Utils/Values";
import FastImage from "react-native-fast-image";
import { getColorGender, getIconGender } from "../../../Utils/Helpers";
import { moderateScale } from "react-native-size-matters";
import Icon from "../../BaseComponents/Icon";


const ListResultUser: FC<any> = (props) => {
  const { color, data, navigation } = props;
  const styles = styleScaled(color);

  const onPressItem = useCallback((userId: string) => {
    navigation.navigate("ProfileOther", { userId });
  }, []);

  const renderItem = useCallback(({ item }) => {
    return (
      <TouchableOpacity style={styles.containerItem} onPress={() => onPressItem(item.id)}>
        {item.thumbnail ? <FastImage
            style={[styles.avatar, { ...SHADOW_2 }]}
            source={{
              uri: item.thumbnail,
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

        <View style={styles.viewName}>
          <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.txtNickname}>{item.nickname}
            <Icon type={"MaterialCommunityIcons"}
                  name={getIconGender(item.gender || GENDER.CUSTOM)}
                  size={moderateScale(20, 0.3)}
                  color={getColorGender(item.gender || GENDER.CUSTOM)} />
          </Text>
          <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.txtName}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }, []);

  const keyExtractor = useCallback((item) => item.id, []);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      data={data}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

export default memo(ListResultUser);
