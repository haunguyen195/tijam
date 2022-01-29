import React, { FC, memo, useCallback, useRef, useState } from "react";
import { FlatList, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Icon from "../../BaseComponents/Icon";
import styleScaled from "./style";
import { DATA_TYPE_POST, TYPE } from "../../../Utils/Values";
import { moderateScale } from "react-native-size-matters";

interface PropsItem {
  title: string,
  icon: string,
  typeIcon: string,
  color: string,
  sizeIcon: number
}


const ListType: FC<any> = (props) => {
  const { color, filterDataPosts,language } = props;
  const styles = styleScaled(color);
  const refTypesSelected = useRef([]);
  const [typesSelected, setTypesSelected] = useState([]);

  const updateTypeSelected = (type: TYPE) => {
    if (refTypesSelected.current.includes(type)) {
      const index = refTypesSelected.current.indexOf(type);
      if (index > -1) {
        refTypesSelected.current.splice(index, 1);
      }
    } else {
      refTypesSelected.current.push(type);
    }

    setTypesSelected([...refTypesSelected.current]);
    filterDataPosts(refTypesSelected.current);
  }

  const renderItem = ({ item }) => {
    const { title, icon, typeIcon, color, sizeIcon, type } = item;

    return (
      <TouchableOpacity onPress={() => updateTypeSelected(type)}
                        style={[styles.touchItem, { backgroundColor: refTypesSelected.current.includes(type) ? color : props.color.LIST_TYPE_BG_ITEM }]}>
        <Icon type={"MaterialCommunityIcons"} name={icon} color={refTypesSelected.current.includes(type) ? props.color.LIST_TYPE_IC_ITEM : color}
              size={moderateScale(17,0.3)} />
        <Text
          style={[styles.textItem, { color: refTypesSelected.current.includes(type) ? props.color.LIST_TYPE_TXT_ITEM : color }]}>{language[type]}</Text>
      </TouchableOpacity>
    );
  }

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
