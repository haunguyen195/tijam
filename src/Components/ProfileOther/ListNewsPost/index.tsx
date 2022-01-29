import React, { FC, memo, useCallback } from "react";
import { FlatList, Text, View } from "react-native";
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
  viewPostMap:Function,
  language:object
}

const ListNewsPost: FC<Props> = (props) => {
  const { color, posts, viewPostMap, language } = props;
  const styles = styleScaled(color);

  const renderItem = useCallback(({ item }) => <Item viewPostMap={viewPostMap} color={color} styles={styles} item={item} language={language}/>, [viewPostMap,language]);
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
                decelerationRate={0.8}
                bounces={false}
                scrollEventThrottle={16}
      />
      :
      <View style={styles.viewEmpty}>
        <Icon type={"Octicons"} name={"inbox"} style={styles.iconEmpty}/>
        <Text style={styles.txtEmpty}>Không có bài viết</Text>
      </View>
  );
};

export default memo(ListNewsPost);
