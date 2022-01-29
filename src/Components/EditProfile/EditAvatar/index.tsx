import React, { memo, useCallback, useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import styleScaled from "./style";
import { LIGHT } from "../../../Utils/Themes";
import FastImage from "react-native-fast-image";
import Icon from "../../BaseComponents/Icon";
import ImagePicker from "react-native-image-crop-picker";
import ImageResizer from "react-native-image-resizer";
import { IMAGE, STATUS } from "../../../Utils/Values";
import { Post } from "../../../Models";
import { ShowToast } from "../../../Utils/Helpers";

interface EditAvatarProps {
  color?: any,
  image: string,
  userId: string,
  uploadAvatar: (image: string, uid: string) => void,
  uploadThumbnail: (image: string, uid: string, post: Post[]) => void,
  resetUploadAvatarStatus: () => void,
  statusUploadAvatar: STATUS,
  posts: Array<Post>,
  language: object
}

function EditAvatar({
                      color,
                      image,
                      userId,
                      uploadAvatar,
                      uploadThumbnail,
                      statusUploadAvatar,
                      resetUploadAvatarStatus,
                      posts,
                      language
                    }: EditAvatarProps) {
  const [avatar, setAvatar] = useState<string>();
  const [avatarMime, setAvatarMime] = useState<string>();
  const styles = styleScaled(color);

  const pickAvatar = useCallback(() => {
    ImagePicker.openPicker({
      width: 700,
      height: 700,
      cropperToolbarTitle: "Cắt",
      includeBase64: true,
      mediaType: "photo",
      cropping: true,
      cropperCircleOverlay: true,
      enableRotationGesture: true,
      writeTempFile: true
    }).then(({ path, data, mime }) => {
      uploadAvatar(path, userId);

      ImageResizer.createResizedImage(path, 70, 70, "JPEG", 70, 0)
        .then(async (responseResize) => {
          uploadThumbnail(responseResize.path, userId, posts);
        })
        .catch(err => {
          console.log(err);
        });

      setAvatar(data);
      setAvatarMime(mime);
    }).catch(() => {
    });
  }, []);

  useEffect(() => {
    if (statusUploadAvatar == STATUS.FAILED || statusUploadAvatar == STATUS.SUCCESS) {
      if (statusUploadAvatar == STATUS.FAILED)
        ShowToast(
          "error",
          language.ERROR_UPLOAD,
          language.UPLOAD_IMAGE_FAILED_TRY_LATER
        );

      resetUploadAvatarStatus();
    }
  }, [statusUploadAvatar]);

  return (
    <Pressable onPress={pickAvatar} style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>{language.AVATAR}</Text>
        <Icon name={"square-edit-outline"} type={"MaterialCommunityIcons"} style={styles.iconEdit} />
      </View>

      <View style={styles.viewContent}>
        {avatar ?
          <Image
            style={styles.image}
            source={{ uri: `data:${avatarMime};base64,${avatar}` }}
            resizeMode={"cover"}
          /> : (image ?
            <FastImage
              style={styles.image}
              source={{
                uri: image,
                priority: FastImage.priority.normal
              }}
              resizeMode={"cover"}
            /> :
            <Image
              style={styles.image}
              source={IMAGE.EMPTY_AVATAR}
              resizeMode={"cover"}
            />)
        }
      </View>

    </Pressable>
  );
}

export default memo(EditAvatar);
