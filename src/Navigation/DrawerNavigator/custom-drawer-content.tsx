import { DrawerContentScrollView } from "@react-navigation/drawer";
import React, { FC, useCallback, useEffect, useState } from "react";
import CustomDrawerItem from "../../Components/CustomDrawerItem/custom-drawer-item";
import Icon from "../../Components/BaseComponents/Icon";
import { MENU } from "../../Utils/Values";
import styleScaled from "./style";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ControlApp from "../../Store/Actions/control-app-actions";

const CustomDrawerContent: FC<any> = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { progress, navigation, color, language, updateDrawerAction } = props;

  const styles = styleScaled(color);

  useEffect(() => {
    progress && updateDrawerAction(progress);
  }, [progress]);

  const renderItem = useCallback((item, index) => (
    <CustomDrawerItem
      color={color}
      key={item.name}
      title={language[item.name.toUpperCase()]}
      icon={<Icon type={item.icon_type} name={item.icon} color={color.IC} size={item.icon_size} />}
      onPress={() => {
        navigation.navigate(item.name);
        setCurrentIndex(index);
      }}
      titleStyle={{
        color: color.TXT_TITLE,
        fontSize: index == currentIndex ? 21 : 17,
        fontWeight: index == currentIndex ? "bold" : "normal"
      }}
    />
  ), [currentIndex, language]);

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={styles.container}
    >
      {MENU.map(renderItem)}
    </DrawerContentScrollView>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    updateDrawerAction: bindActionCreators(ControlApp.updateDrawer, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(CustomDrawerContent);
