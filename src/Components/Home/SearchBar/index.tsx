import React, { FC, memo, useCallback } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { moderateScale } from "react-native-size-matters";
import Icon from "../../BaseComponents/Icon";
import styleScaled from "./style";
import FastImage from "react-native-fast-image";
import { IMAGE, LOTTIE, STATUS } from "../../../Utils/Values";
import LottieView from "lottie-react-native";
import { ShowToast } from "../../../Utils/Helpers";
import { Post } from "../../../Models";
import Toast from "react-native-toast-message";

interface Props {
  color: any,
  avatar?: string | null,
  navigation: DrawerNavigationProp<any>,
  statusUpload: STATUS,
  posts: Array<Post>,
  nickname: string,
  language:any
}

const SearchBar: FC<Props> = (props) => {
  const { color, avatar, navigation, statusUpload, posts, nickname, language } = props;
  const styles = styleScaled(color);
  const {USER_SEARCH} = language;

  const searchPress = useCallback(() => {
    navigation.navigate("Search");
  }, []);

  const createPostPress = useCallback(() => {
    if (posts.length >= 5) {
      ShowToast(
        "info",
        language.MAX_5_POST,
        language.DELETE_TO_CREATE_POST,
        {
          onPress: () => {
            Toast.hide();
            navigation.navigate("UserMap", { posts: posts, nickname: nickname, own:true });
          },
          visibilityTime:6000
        }
      );
    } else {
      navigation.navigate("CreatePost");
    }
  }, [posts]);

  return (
    <View style={styles.container}>

      {/*avatar for drawer*/}
      <TouchableOpacity style={styles.touchAvatar}
                        onPress={() => navigation.openDrawer()}>
        {avatar ? <FastImage
            style={styles.avatar}
            source={{
              uri: avatar,
              priority: FastImage.priority.normal
            }}
            resizeMode={"cover"}
          /> :
          <Image
            style={styles.avatar}
            source={IMAGE.EMPTY_AVATAR}
            resizeMode={"cover"}
          />}
      </TouchableOpacity>

      {/*search*/}
      <Pressable style={styles.touchSearch} onPress={searchPress}>
        <Text style={styles.textSearch}>{USER_SEARCH}</Text>
      </Pressable>

      {/*add post*/}
      {statusUpload == STATUS.LOADING ?
        <LottieView
          source={LOTTIE.LOADING_2}
          style={{ width: moderateScale(35) }}
          loop
          speed={1.5}
          autoPlay />
        :
        <TouchableOpacity style={styles.touchAdd}
                          onPress={createPostPress}>
          <Icon type={"MaterialIcons"} name="add-location-alt" size={moderateScale(26)}
                color={color.SEARCHBAR_IC_ADD} />
        </TouchableOpacity>
      }

    </View>
  );
};

export default memo(SearchBar);
