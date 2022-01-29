import React, { FC, memo, useCallback, useState } from "react";
import { FlatList, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Icon from "../../BaseComponents/Icon";
import styleScaled from "./style";
import { DATA_TYPE_POST, TYPE } from "../../../Utils/Values";
import { moderateScale } from "react-native-size-matters";


const ListType: FC<any> = (props) => {
  const { changeType, language} = props;
  const [selectedItem, setSelectedItem] = useState<TYPE>(TYPE.I_NEED);
  const styles = styleScaled(props.color);

  const changeItem = useCallback((type: TYPE) => {
    setSelectedItem(type);
    changeType(type);
  }, []);

  const renderItem = ({ item }) => {
    const { icon, type, color } = item;

    return (
      <TouchableOpacity onPress={() => changeItem(type)}
                        style={[styles.touchItem, { backgroundColor: selectedItem === type ? color : props.color.BG_BTN_TYPE_INACTIVE }]}>
        <Icon type={"MaterialCommunityIcons"} name={icon} color={selectedItem === type ? props.color.IC_BTN_TYPE_ACTIVE : color} size={moderateScale(17,0.3)} />
        <Text style={[styles.textItem, { color: selectedItem === type ? props.color.TXT_BTN_TYPE_ACTIVE : color }]}>{language[type]}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.type}
      data={DATA_TYPE_POST}
      renderItem={renderItem}
      horizontal
      style={{ flexGrow: 0 }}
      contentContainerStyle={{ paddingLeft: "5%" }}
    />
  );
};

export default memo(ListType);
