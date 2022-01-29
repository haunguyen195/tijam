import React, { FC, memo, useCallback } from "react";
import { FlatList, View, Text } from "react-native";
import Item from "./item";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import styleScaled, { SIZE_ITEM } from "./style";
import { Post } from "../../../Models";
import Icon from "../../BaseComponents/Icon";
import { moderateScale } from "react-native-size-matters";

interface Props {
  navigation: DrawerNavigationProp<any>,
  color: object,
  posts: Array<Post>,
  viewPostMap: Function,
  language:object
}

const ListNewsPost: FC<Props> = ({ color, posts, viewPostMap, language }) => {
  const styles = styleScaled(color);

  const renderItem = useCallback(({ item }) => <Item viewPostMap={viewPostMap} color={color} styles={styles}
                                                     item={item} language={language} />, [viewPostMap, language]);
  const keyExtractor = useCallback((item) => item.id, []);
  const getItemLayout = useCallback((data, index) => ({
    length: SIZE_ITEM,
    offset: SIZE_ITEM * index,
    index
  }), []);

  return (posts.length>0?
    <FlatList horizontal
              data={posts}
              style={{ flexGrow: 0 }}
              contentContainerStyle={styles.contentContainer}
              renderItem={renderItem}
              getItemLayout={getItemLayout}
              removeClippedSubviews={true}
              keyExtractor={keyExtractor}
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              snapToInterval={SIZE_ITEM}
              bounces={false}
    />
      :
      <View style={styles.viewEmpty}>
        <Icon type={"Octicons"} name={"inbox"}
              size={moderateScale(70, 0.3)}
              color={color.IC_EMPTY}/>
        <Text style={styles.txtEmpty}>Không có bài viết</Text>
      </View>
  );
};

export default memo(ListNewsPost);
