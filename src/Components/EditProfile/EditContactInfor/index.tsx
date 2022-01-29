import React, { memo, useCallback, useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import styleScaled from "./style";
import { LIGHT } from "../../../Utils/Themes";
import Icon from "../../BaseComponents/Icon";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { UserInfor } from "../../../Models";
import { ARRAY_SOCIAL_NETWORKS, COLOR_SOCIAL_NETWORKS, ICON_SOCIAL_NETWORKS } from "../../../Utils/Values";

interface EditContactInforProps {
  color?: any,
  userInfor: UserInfor,
  navigation: DrawerNavigationProp<any, any>,
  language:object
}

function EditContactInfor({
                            color,
                            userInfor,
                            navigation,
                            language
                          }: EditContactInforProps) {
  const styles = styleScaled(color);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  useEffect(() => {
    let count = 0;
    ARRAY_SOCIAL_NETWORKS.map((item) => {
      if (userInfor[item]) count++;
    });

    if (count === 0) {
      setIsEmpty(true);
    }else {
      setIsEmpty(false)
    }
  }, [userInfor]);

  const updateContacts = useCallback(() => {
    navigation.navigate("EditContactUser");
  }, []);

  const renderSocialNetworks = (item: string) => {
    if (userInfor[item])
      return (
        <Text style={styles.txtContent} key={item} numberOfLines={1}>
          <Icon name={ICON_SOCIAL_NETWORKS[item]} type={"FontAwesome"} style={styles.icon}
                color={COLOR_SOCIAL_NETWORKS[item]} />
          {`   ${userInfor[item]}`}
        </Text>
      );
    else
      return null;
  };

  return (
    <Pressable onPress={updateContacts} style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>{language.CONTACT_INFO}</Text>
        <Icon name={"square-edit-outline"} type={"MaterialCommunityIcons"} style={styles.iconEdit} />
      </View>

      {isEmpty?
        <Text style={styles.txtContent}>{language.WRITE_CONTACT_INFO}</Text>
        :
        <View style={styles.viewContent}>
        {ARRAY_SOCIAL_NETWORKS.map(renderSocialNetworks)}
      </View>}

    </Pressable>
  );
}

export default memo(EditContactInfor);
