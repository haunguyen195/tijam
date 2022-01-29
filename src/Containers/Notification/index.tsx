import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { connect } from "react-redux";
import ViewShot from "react-native-view-shot";
import Header from "../../Components/BaseComponents/Header";
import { bindActionCreators } from "redux";
import * as ControllAppActions from "../../Store/Actions/control-app-actions";
import styleScaled, { SIZE_ITEM } from "./style";
import Icon from "../../Components/BaseComponents/Icon";
import { getAllNotifications } from "../../Store/Services/db-service";
import Item from "../../Components/Notification/Item";
import { compareTime } from "../../Utils/Helpers";

const Notification: FC<any> = (props) => {
  const { setBackgroundScreenDrawer, color, language } = props;
  const [notifications, setNotifications] = useState([]);
  const styles = styleScaled(color);
  const refViewShot = useRef();

  useEffect(() => {
    getAllNotifications().then((resolve) => {
      resolve.sort(compareTime);
      setNotifications(resolve);
    });
    refViewShot.current.capture().then(image => {
      setBackgroundScreenDrawer(image);
    });
  }, []);

  const renderItem = useCallback(({ item }) => <Item color={color} item={item} styles={styles} />, []);
  const keyExtractor = useCallback((item) => item.id, []);
  const getItemLayout = useCallback((data, index) => ({
    length: SIZE_ITEM,
    offset: SIZE_ITEM * index,
    index
  }), []);

  return (
    <ViewShot ref={refViewShot} style={styles.container}
              options={{ result: "base64", quality: 0.5 }}>
      <Header
        title={language.NOTIFICATIONS} />

      {notifications.length > 0 ?
        <FlatList
          data={notifications}
          renderItem={renderItem}
          getItemLayout={getItemLayout}
          removeClippedSubviews={true}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          bounces={false}
        />
        :
        <View style={styles.viewEmpty}>
          <Icon type={"MaterialIcons"} name={"notifications-paused"} style={styles.icPause} />
          <Text style={styles.txtEmpty}>{language.EMPTY_NOTIFICATION}</Text>
        </View>
      }
    </ViewShot>
  );
};

function mapStateToProps(state: any) {
  return {
    color: state.controlApp.settings.color.NOTIFICATION,
    language: state.controlApp.settings.language,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    setBackgroundScreenDrawer: bindActionCreators(ControllAppActions.setBackgroundScreenDrawer, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
