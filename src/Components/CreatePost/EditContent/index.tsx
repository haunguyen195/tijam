import React, { FC, memo, useCallback, useEffect, useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styleScaled from "./style";
import Icon from "../../BaseComponents/Icon";
import { SIZES } from "../../../Utils/Values";
import { launchImageLibrary } from "react-native-image-picker";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

interface EditContentProps {
  changeContent: (text: string) => void,
  changeLabel: (text: string) => void,
  changeImage: (text: string) => void,
  color:object,
  language:object
}

const EditContent: FC<any> = ({ changeContent, changeLabel, changeImage, color, language }: EditContentProps) => {
  const styles = styleScaled(color);
  const [responseImage, setResponseImage] = useState<any>(null);

  const addImage = useCallback(() => {
    launchImageLibrary(
      { mediaType: "photo", maxWidth: 1024, maxHeight: 2048, quality: 1 },
      setResponseImage
    );
  }, []);

  const removeImage = useCallback(() => setResponseImage(null), []);

  useEffect(() => {
    changeImage(responseImage);
  }, [responseImage]);

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>{language.POST}</Text>
      <View
        style={styles.viewInput}>

        <View style={styles.viewLabel}>
          <TextInput
            onChangeText={changeLabel}
            maxLength={15}
            returnKeyType={"done"}
            placeholder={language.LABEL}
            placeholderTextColor={color.TXT_PLACE_HOLDER}
            style={styles.inputLabel}
          />
          <TouchableOpacity onPress={addImage} hitSlop={{ top: 8, left: 8, right: 8, bottom: 8 }}
                            disabled={responseImage != null}
                            style={styles.btnImage}>
            <Icon type={"MaterialCommunityIcons"} name={"image-plus"} size={moderateScale(25, 0.3)}
                  color={responseImage != null ? color.IC_ADD_IMAGE_INACTIVE : color.IC_ADD_IMAGE_ACTIVE} />
          </TouchableOpacity>
        </View>

        <TextInput
          placeholderTextColor={color.TXT_PLACE_HOLDER}
          returnKeyType={"done"}
          onChangeText={changeContent}
          placeholder={language.CONTENT+"..."}
          multiline={true}
          style={[styles.inputContent,{minHeight: responseImage ? 0 : verticalScale(300),}]}
        />

        {responseImage?.assets &&
          responseImage?.assets.map(({ uri, width, height }) => (
            <View key={uri}>
              <Image
                resizeMode="contain"
                resizeMethod="scale"
                style={[styles.imagePreview,{height: height * (SIZES.WIDTH_WINDOW * 0.9 - scale(30)) / width}]}
                source={{ uri: uri }}
              />

              <Pressable style={styles.btnDeleteImage}
                         onPress={removeImage}>
                <Icon name="close" style={styles.icClose} type={"FontAwesome"} />
              </Pressable>
            </View>
          ))}

      </View>
    </View>
  );
};

export default memo(EditContent);
