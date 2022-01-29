import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { BackHandler, FlatList, Text, View } from "react-native";
import ViewShot from "react-native-view-shot";
import { useFocusEffect } from "@react-navigation/native";
import Header from "../../Components/BaseComponents/Header";
import { bindActionCreators } from "redux";
import * as ControllAppActions from "../../Store/Actions/control-app-actions";
import Icon from "../../Components/BaseComponents/Icon";
import styleScaled from "./style";
import { connect } from "react-redux";
import { COLOR_TYPE, ICON_TYPE } from "../../Utils/Values";
import { StatisticsServices } from "../../Store/Services/statistics-services";
import { compareKey } from "../../Utils/Helpers";


const Statistics: FC<any> = (props) => {
  const { navigation, setBackgroundScreenDrawer, color, language } = props;
  const [data, setData] = useState([]);
  const refViewShot = useRef();
  const styles = styleScaled(color);

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        refViewShot.current.capture().then(image => {
          setBackgroundScreenDrawer(image);
        });
      }, 1000);
    }, [])
  );

  useEffect(() => {
    async function getData() {
      let dataResponse = await StatisticsServices.getStatistics();
      dataResponse = dataResponse.data();
      setData(Object.entries(dataResponse).sort(compareKey));
    }

    getData();
  }, []);

  const renderDescription = useCallback((key: string) => {
    switch (key) {
      case "user":
        return (
          <View style={styles.viewDescription}>
            <Icon type={"MaterialCommunityIcons"} name={"account"} style={styles.icCount} />
            <Text style={styles.txtDescription}>{language.CREATED}</Text>
          </View>
        );
      case "country":
        return (
          <View style={styles.viewDescription}>
            <Text style={styles.txtDescription}>{language.COUNTRY_OVER}</Text>
            <Icon type={"FontAwesome"} name={"globe"} style={styles.icCount} />
          </View>
        );
      case "I_NEED":
      case "CONFIDING":
      case "NEWS":
      case "GOSSIP":
      case "NOW":
      case "SHARE":
      case "OTHER":
      case "ALERT":
        return (
          <Text numberOfLines={2} ellipsizeMode={"tail"}
                style={styles.txtDescription}>{language.POST_ABOUT}<Text
            style={{
              color: COLOR_TYPE[key.toUpperCase()],
              fontWeight: "bold"
            }}>{language[key.toUpperCase()]}</Text></Text>
        );
    }
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", () => true);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", () => true);
    }, [])
  );

  const renderCountView = useCallback(({ item }) => {
    return (
      <View style={styles.viewCount}>
        <Text numberOfLines={2} ellipsizeMode={"tail"}
              style={[styles.txtCount, { color: COLOR_TYPE[item[0].substring(2).toUpperCase()] || color.TXT_COUNT }]}>{item[0] === "c_country" ? item[1].length : item[1]}</Text>
        {renderDescription(item[0].substring(2))}
        <View style={[styles.viewBackground, { backgroundColor: COLOR_TYPE[item[0].substring(2).toUpperCase()] }]} />
        {ICON_TYPE[item[0].substring(2).toUpperCase()] ?
          <Icon type={"MaterialCommunityIcons"} name={ICON_TYPE[item[0].substring(2).toUpperCase()]}
                style={styles.icBackground} />
          :
          null}
      </View>
    );
  }, [data]);

  const keyExtractor = useCallback((item) => item[0], []);

  return (
    <ViewShot ref={refViewShot} style={styles.container}
              options={{ result: "base64", quality: 0.5 }}>
      <Header onPressLeft={() => navigation.openDrawer()} iconLeftType={"MaterialIcons"} iconLeft={"notes"}
              title={language.STATISTICS} />

      <View style={styles.viewPost}>
        <Text style={styles.txtPost}>{data[0] ? data[0][1] : 0}</Text>
        <View style={styles.viewDescription}>
          <Text style={styles.txtDescriptionShare}>{language.POST_HAVE_BEEN}</Text>
          <Icon type={"FontAwesome"} name={"share-alt"} style={styles.icShare} />
        </View>
      </View>

      <FlatList numColumns={2}
                data={data.filter((item) => item[0].substring(2) !== "post")}
                style={{ width: "94%", flex: 1 }}
                columnWrapperStyle={styles.columnWrapperStyle}
                renderItem={renderCountView}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
                bounces={false} />

    </ViewShot>
  );
};

function mapStateToProps(state: any) {
  return {
    color: state.controlApp.settings.color.STATISTICS,
    language: state.controlApp.settings.language
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    setBackgroundScreenDrawer: bindActionCreators(ControllAppActions.setBackgroundScreenDrawer, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
