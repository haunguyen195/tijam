import React, { FC, memo, useCallback, useEffect, useRef } from "react";
import { TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { moderateScale } from "react-native-size-matters";
import Icon from "../../BaseComponents/Icon";
import styleScaled from "./style";

interface Props {
  color: any,
  navigation: DrawerNavigationProp<any>,
  filterUser: Function,
  language:object
}

const SearchBar: FC<Props> = ({ color, navigation, filterUser, language }) => {
  const refInput = useRef();
  const styles = styleScaled(color);

  useEffect(() => refInput.current.focus(), []);

  const onChangeValue = useCallback((value: string) => {
    filterUser(value.toLowerCase().trim());
  }, []);

  const clearText = useCallback(() => {
    refInput.current.setNativeProps({ text: "" });
    onChangeValue("");
  }, []);

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.touchClear} onPress={() => navigation.goBack()}>
        <Icon type={"Feather"} name={"arrow-left"} size={moderateScale(26)}
              color={color.SEARCHBAR_IC_ADD} />
      </TouchableOpacity>

      {/*search*/}
      <TextInput style={styles.inputSearch} ref={refInput}
                 placeholder={language.SEARCH_VALUE}
                 onChangeText={onChangeValue} placeholderTextColor={color.SEARCHBAR_TXT_SEARCH}/>

      {/*clear*/}
      <TouchableOpacity style={styles.touchClear}
                        onPress={clearText}>
        <Icon type={"MaterialIcons"} name="clear" style={styles.iconClear} />
      </TouchableOpacity>

    </View>
  );
};

export default memo(SearchBar);
