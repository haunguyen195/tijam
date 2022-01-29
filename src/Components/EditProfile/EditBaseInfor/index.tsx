import React, { memo, useCallback } from "react";
import { Pressable, Text, View } from "react-native";
import styleScaled from "./style";
import Icon from "../../BaseComponents/Icon";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { GENDER } from "../../../Utils/Values";

interface EditBaseInforProps {
  color?: any,
  name: string,
  gender?: GENDER,
  dob?: Date,
  navigation: DrawerNavigationProp<any, any>,
  language: object
}

function EditBaseInfor({
                         color,
                         name,
                         gender,
                         dob = new Date(),
                         navigation,
                         language
                       }: EditBaseInforProps) {
  const styles = styleScaled(color);

  const updateInfor = useCallback(() => {
    navigation.navigate("EditInforUser");
  }, []);

  return (
    <Pressable onPress={updateInfor} style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>{language.DETAIL_PERSONAL}</Text>
        <Icon name={"square-edit-outline"} type={"MaterialCommunityIcons"} style={styles.iconEdit} />
      </View>

      <View style={styles.viewContent}>
        <Text style={styles.txtContent}><Icon name={"badge-account"} type={"MaterialCommunityIcons"}
                                              style={styles.icon} />{`   ${name}`}</Text>
        <Text style={styles.txtContent}><Icon name={"gender-male-female"} type={"MaterialCommunityIcons"}
                                              style={styles.icon} />{`   ${gender ? language[gender] : "???"}`}</Text>
        <Text style={styles.txtContent}><Icon name={"calendar"} type={"MaterialCommunityIcons"}
                                              style={styles.icon} />{`   ${dob ? dob.toLocaleDateString() : "--/--/----"}`}
        </Text>
      </View>

    </Pressable>
  );
}

export default memo(EditBaseInfor);
