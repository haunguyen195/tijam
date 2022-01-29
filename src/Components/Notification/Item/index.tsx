import React, { FC, memo } from "react";
import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import moment from "moment";
import styleScaled from "./style";


const Item: FC<any> = (props) => {
  const { item, color } = props;

  const styles = styleScaled(color);

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.txtTitle}>{item.title}</Text>
      <Text style={styles.txtTime}>
        {(moment(item.time)).format("HH:ss DD/MM/YYYY")}
      </Text>
      <FastImage style={styles.image}
                 source={{
                   uri: item.data.image,
                   priority: FastImage.priority.normal
                 }}
                 resizeMode={"center"} />

      <Text style={styles.txtBody}>{item.body}</Text>
    </View>
  );
};

export default memo(Item);
