import React, { memo, useCallback } from "react";
import { Pressable, Text, View } from "react-native";
import styleScaled from "./style";
import { LIGHT } from "../../../Utils/Themes";
import Icon from "../../BaseComponents/Icon";
import { DrawerNavigationProp } from "@react-navigation/drawer";

interface EditDescriptionProps {
  color?: any,
  description: string,
  navigation: DrawerNavigationProp<any, any>,
  language:object
}

function EditDescriptionInfor({
                                color,
                                description,
                                navigation,
                                language
                              }: EditDescriptionProps) {
  const styles = styleScaled(color);

  const clickEdit = useCallback(() => {
    navigation.navigate("EditDescriptionUser");
  }, []);

  return (
    <Pressable onPress={clickEdit} style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>{language.SELF_DESCRIPTION}</Text>
        <Icon name={"square-edit-outline"} type={"MaterialCommunityIcons"} style={styles.iconEdit} />
      </View>

      <View style={styles.viewContent}>
        <Text style={styles.txtContent}>{description||language.WRITE_SELF_DESCRIPTION}</Text>
      </View>

    </Pressable>
  );
}

export default memo(EditDescriptionInfor);
