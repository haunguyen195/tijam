import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { Alert, BackHandler, Pressable, StatusBar } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import SearchBar from "../../Components/Home/SearchBar";
import { LIGHT } from "../../Utils/Themes";
import ListType from "../../Components/Home/ListType";
import MarkerPost from "../../Components/Home/MarkerPost";
import ListNewsPost from "../../Components/Home/ListNewsPost";
import styleScaled from "./style";
import { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import { connect } from "react-redux";
import ViewShot from "react-native-view-shot";
import { bindActionCreators } from "redux";
import * as ControllAppActions from "../../Store/Actions/control-app-actions";
import * as PostActions from "../../Store/Actions/post-actions";
import { useFocusEffect } from "@react-navigation/native";
import { STATUS } from "../../Utils/Values";
import Geolocation from "react-native-geolocation-service";
import { hasLocationPermission, ShowToast } from "../../Utils/Helpers";
import { distanceBetween } from "geofire-common";
import { PostServices } from "../../Store/Services/post-services";
import Icon from "../../Components/BaseComponents/Icon";
import { MAP_STYLE } from "../../Utils/Themes/dark";


const Home: FC<any> = (props) => {
  const {
    navigation,
    userInfor,
    setBackgroundScreenDrawer,
    color,
    language,
    statusUpload,
    PostDispatchs,
    posts,
    MAP_STYLE,
    colorSet
  } = props;
  const styles = styleScaled(color);
  const [dataPosts, setDataPosts] = useState([]);
  const [mapReady, setMapReady] = useState(false);
  const [location, setLocation] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [minZoomLevel, setMinZoomLevel] = useState(0);
  const translationX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });
  const refListPost = useRef();
  const refViewShot = useRef();
  const refMap = useRef<MapView>();

  const setStateMapReady = useCallback(() => setTimeout(() => setMapReady(true), 1000), []);

  useEffect(() => {
    setDataPosts(posts);
  }, [posts]);

  useEffect(() => {
    getLocation();
    PostServices.deleteOldPost();
  }, []);

  useEffect(() => {
    if (location && mapReady) {
      refMap.current?.animateToRegion({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01704594286680461,
        longitudeDelta: 0.008427165448665619
      }, 2000);
    }
  }, [location, mapReady]);

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      (position) => {
        setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
        setCurrentLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
        PostDispatchs.getPostsByLocation([position.coords.latitude, position.coords.longitude]);
        setTimeout(() => {
          setMinZoomLevel(16);
        }, 3000);
      },
      (error) => {
        Alert.alert(`Code ${error.code}`, error.message);
        setLocation(null);
        setTimeout(() => {
          setMinZoomLevel(16);
        }, 3000);
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

  const animatedToCurrentLocation = useCallback(() => {
    refMap.current?.animateToRegion({
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude,
      latitudeDelta: 0.01704594286680461,
      longitudeDelta: 0.008427165448665619
    }, 500);
  }, [currentLocation]);

  useEffect(() => {
    if (statusUpload == STATUS.SUCCESS || statusUpload.FAILED) {
      if (statusUpload == STATUS.SUCCESS)
        ShowToast(
          "success",
          language.SUCCESS,
          language.SHARED_YOUR_POST
        );
      else {
        ShowToast(
          "error",
          language.FAILED,
          language.FAILED_SHARED_YOUR_POST
        );
      }

      PostDispatchs.resetUploadPostStatus();
    } else {
      if (statusUpload == STATUS.LOADING)
        ShowToast(
          "info",
          language.UPLOADING,
          language.UPLOADING_YOUR_POST
        );
    }
  }, [statusUpload]);

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        refViewShot.current.capture().then(image => {
          setBackgroundScreenDrawer(image);
        });
      }, 1000);
    }, [])
  );

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", () => true);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", () => true);
    }, [])
  );

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

  const filterDataPosts = useCallback((types: []) => {
    if (types.length === 0) {
      setDataPosts(posts);
    } else {
      let filterPost = posts.filter((item) => types.includes(item.type));
      setDataPosts(filterPost);
    }
  }, [posts]);

  const onRegionChangeComplete = useCallback(({ latitude, longitude }) => {
    const distanceInM = distanceBetween([latitude, longitude], [location.latitude, location.longitude]) * 1000;
    if (distanceInM > 1200) {
      setLocation({ latitude: latitude, longitude: longitude });
      PostDispatchs.getPostsByLocation([latitude, longitude]);
    }
  }, [location]);

  return (
    <ViewShot ref={refViewShot} style={styles.container} options={{ result: "base64", quality: 0.5 }}>
      <StatusBar translucent backgroundColor="transparent" barStyle={colorSet===LIGHT?"dark-content":"light-content"} />

      <SearchBar navigation={navigation} avatar={userInfor.thumbnail} posts={userInfor.posts}
                 nickname={userInfor.nickname} color={color} statusUpload={statusUpload} language={language}/>
      <ListType filterDataPosts={filterDataPosts} color={color} language={language}/>
      <Pressable style={styles.btnCurrentLocation} onPress={animatedToCurrentLocation}>
        <Icon type={"MaterialIcons"} name={"my-location"} style={styles.iconLocation} />
      </Pressable>
      {/*<ListTag color={color} />*/}

      <MapView
        ref={refMap}
        maxZoomLevel={19}
        minZoomLevel={minZoomLevel}
        onMapReady={setStateMapReady}
        provider={PROVIDER_GOOGLE}
        onRegionChangeComplete={onRegionChangeComplete}
        style={styles.map}
        customMapStyle={MAP_STYLE}>
        {dataPosts.map((marker, index) => (
          <Marker
            tracksViewChanges={!mapReady}
            key={marker.id+(color.BG_MARKER)}
            onPress={() => scrollPost(index)}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}>
            <MarkerPost color={color} item={marker}/>
          </Marker>
        ))}
        {currentLocation ? <Marker
            tracksViewChanges={!mapReady}
            key={"my-location"}
            onPress={animatedToCurrentLocation}
            coordinate={{ latitude: currentLocation.latitude, longitude: currentLocation.longitude }}>
            <Icon type={"MaterialIcons"} name={"my-location"} style={styles.iconLocation} />
          </Marker>
          :
          null}
      </MapView>

      <ListNewsPost ref={refListPost} animatedToRegion={animatedToRegion} color={color} posts={dataPosts} language={language} />
    </ViewShot>
  );
};

function mapStateToProps(state: any) {
  return {
    userInfor: state.user.userInfor,
    color: state.controlApp.settings.color.HOME,
    colorSet: state.controlApp.settings.color,
    MAP_STYLE: state.controlApp.settings.color.MAP_STYLE,
    language: state.controlApp.settings.language,
    statusUpload: state.post.statusUpload,
    posts: state.post.posts
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    setBackgroundScreenDrawer: bindActionCreators(ControllAppActions.setBackgroundScreenDrawer, dispatch),
    PostDispatchs: bindActionCreators(PostActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
