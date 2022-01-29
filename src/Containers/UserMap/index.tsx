import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { Alert, Pressable, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { LIGHT } from "../../Utils/Themes";
import MarkerPost from "../../Components/UserMap/MarkerPost";
import ListNewsPost from "../../Components/UserMap/ListNewsPost";
import styleScaled from "./style";
import { connect } from "react-redux";
import Geolocation from "react-native-geolocation-service";
import { hasLocationPermission, ShowToast } from "../../Utils/Helpers";
import Header from "../../Components/BaseComponents/Header";
import Icon from "../../Components/BaseComponents/Icon";
import { bindActionCreators } from "redux";
import * as UserActions from "../../Store/Actions/user-actions";


const UserMap: FC<any> = (props) => {
  const {
    color,
    updateUserInfor,
    language,
    MAP_STYLE
  } = props;
  const { nickname, posts, own = false } = props.route.params;
  const styles = styleScaled(color);
  const [dataPosts, setDataPosts] = useState(posts);
  const [mapReady, setMapReady] = useState(false);
  const [location, setLocation] = useState(null);

  const refListPost = useRef();
  const refMap = useRef<MapView>();

  const setStateMapReady = useCallback(() => setTimeout(() => setMapReady(true), 1000), []);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      (position) => {
        setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
      },
      (error) => {
        Alert.alert(`Code ${error.code}`, error.message);
        setLocation(null);
        console.log(error);
      },
      {
        accuracy: {
          android: "high",
          ios: "best"
        },
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: true,
        forceLocationManager: false,
        showLocationDialog: true
      }
    );
  };

  const animatedToRegion = useCallback((latitude, longitude) => {
    refMap.current?.animateToRegion({
      latitude,
      longitude,
      latitudeDelta: 0.01704594286680461,
      longitudeDelta: 0.008427165448665619
    }, 500);
  }, []);

  const scrollPost = useCallback((index) => {
    refListPost.current.scrollToIndex(index);
  }, []);

  const updatePosts = useCallback((data) => setDataPosts(data), []);

  const animatedToCurrentLocation = useCallback(() => {
    refMap.current?.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.01704594286680461,
      longitudeDelta: 0.008427165448665619
    }, 500);
  }, [location]);

  const showTutorial = useCallback(() => {
    ShowToast(
      "info",
      language.GUIDE,
      language.GUIDE_MANIPULATE_WITH_POST,
      {
        visibilityTime: 6000
      }
    );
  }, []);

  return (
    <View style={styles.container}>
      <Header title={`${language.POST_OF} ${nickname}`}
              iconRightType={"MaterialCommunityIcons"}
              iconRight={"comment-question"}
              onPressRight={showTutorial} />
      <Pressable style={styles.btnCurrentLocation} onPress={animatedToCurrentLocation}>
        <Icon type={"MaterialIcons"} name={"my-location"} style={styles.iconLocation} />
      </Pressable>
      <MapView
        ref={refMap}
        maxZoomLevel={19}
        minZoomLevel={16}
        onMapReady={setStateMapReady}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={MAP_STYLE}>
        {dataPosts.map((marker, index) => (
          <Marker
            tracksViewChanges={!mapReady}
            key={marker.id}
            onPress={() => scrollPost(index)}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}>
            <MarkerPost color={color} item={marker} />
          </Marker>
        ))}
        {location ? <Marker
          tracksViewChanges={!mapReady}
          key={"my-location"}
          onPress={animatedToCurrentLocation}
          coordinate={{ latitude: location.latitude, longitude: location.longitude }}>
          <Icon type={"MaterialIcons"} name={"my-location"} style={styles.iconLocation} />
        </Marker> : null}
      </MapView>


      <ListNewsPost ref={refListPost} animatedToRegion={animatedToRegion} color={color} posts={dataPosts}
                    updateUserInfor={updateUserInfor} updatePosts={updatePosts} language={language}/>
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    color: state.controlApp.settings.color.USER_MAP,
    MAP_STYLE: state.controlApp.settings.color.MAP_STYLE,
    language: state.controlApp.settings.language,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    updateUserInfor: bindActionCreators(UserActions.updateUserInfor, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMap);
