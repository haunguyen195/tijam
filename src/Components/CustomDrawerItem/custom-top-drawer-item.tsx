import React, { FC, memo } from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styleScaled from "./style";
import FastImage from "react-native-fast-image";
import Icon from "../BaseComponents/Icon";
import { IMAGE } from "../../Utils/Values";


const CustomTopDrawerItem: FC<any> = (props) => {
  const { color, userInfor, navigation } = props;
  const styles = styleScaled(color);

  return (
    <View style={styles.containerHeader}>
        {/*avatar*/}
        {userInfor.thumbnail ?
          <FastImage style={styles.avatar}
                     source={{
                       uri: userInfor.thumbnail,
                       priority: FastImage.priority.normal
                     }}
                     resizeMode={"cover"} />
          :
          <Image
            style={styles.avatar}
            source={IMAGE.EMPTY_AVATAR}
            resizeMode={"cover"}
          />}

        <View style={styles.viewName}>
          <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.txtNickname}>
            {userInfor.nickname}
          </Text>
          <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.txtName}>{userInfor.name}</Text>
        </View>


      <TouchableOpacity containerStyle={styles.pressBell} onPress={() => navigation.navigate("Notification")}>
        <Icon type={"MaterialCommunityIcons"} name="bell" style={styles.iconBell} />
      </TouchableOpacity>
    </View>

  );
};

export default memo(CustomTopDrawerItem);
