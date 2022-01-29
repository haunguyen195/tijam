import React, { forwardRef, memo, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styleScaled from "./style";
import { LIGHT } from "../../../Utils/Themes";
import Icon from "../../BaseComponents/Icon";
import Modal from "react-native-modal";
import { moderateScale } from "react-native-size-matters";
import MapView, { Circle, PROVIDER_GOOGLE } from "react-native-maps";
import MarkerPost from "../../Home/MarkerPost";
import { Post } from "../../../Models";
import { SHADOW_3 } from "../../../Utils/Values";
import { isPointWithinRadius } from "geolib";
import { hasLocationPermission } from "../../../Utils/Helpers";
import Geolocation from "react-native-geolocation-service";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { MAP_STYLE } from "../../../Utils/Themes/dark";

interface ModalPickLocationProps {
  color?: any,
  createPost: (coordinate: object) => void,
  navigation: DrawerNavigationProp<any, any>,
  language:object,
  MAP_STYLE:object
}

const ModalPickLocation = forwardRef(({
                                        color,
                                        createPost,
                                        navigation,
                                        language,
                                        MAP_STYLE
                                      }: ModalPickLocationProps, ref) => {
  const styles = styleScaled(color);
  const [visible, setVisible] = useState<boolean>(false);
  const [allowed, setAllowed] = useState<boolean>(true);
  const [location, setLocation] = useState(null);
  const [marker, setMarker] = useState<Post>();
  const refCoordinates = useRef<object>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121
  });
  const refCenterCircle = useRef<object>({
    latitude: 0,
    longitude: 0
  });

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      navigation.goBack();
      return;
    }

    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position);
        refCenterCircle.current = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
      },
      (error) => {
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

  useImperativeHandle(
    ref,
    () => ({
      show(postInfor: Post) {
        setMarker(postInfor);
        refCoordinates.current = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121
        };
        setVisible(true);
      },
      hide() {
        setVisible(false);
      }
    })
  );

  const close = useCallback(() => setVisible(false), []);

  const changeCoordinates = (region) => {
    const { latitude, longitude } = region;
    if (isPointWithinRadius(
      { latitude, longitude },
      { latitude: refCenterCircle.current.latitude, longitude: refCenterCircle.current.longitude },
      700
    ) !== allowed) {
      setAllowed(oldValue => !oldValue);
    }
    refCoordinates.current = region;
  };

  const pickLocation = useCallback(() => {
    createPost(refCoordinates.current);
  }, []);

  return (
    <Modal
      isVisible={visible}
      animationIn={"fadeInUp"}
      animationInTiming={400}
      animationOutTiming={400}
      animationOut={"fadeOutDown"}
      backdropTransitionInTiming={400}
      backdropTransitionOutTiming={400}
      hideModalContentWhileAnimating={true}
      backdropColor={"black"}
      backdropOpacity={1}
      hasBackdrop={false}
      useNativeDriver={true}
      statusBarTranslucent
      style={styles.containerModal}>
      <View style={styles.container}>

        <MapView
          onRegionChangeComplete={changeCoordinates}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={refCoordinates.current}
          maxZoomLevel={19}
          minZoomLevel={16}
          customMapStyle={MAP_STYLE}>
          <Circle fillColor={"rgba(36, 168, 175, 0.1)"}
                  strokeWidth={0} center={refCenterCircle.current}
                  radius={700} style={{ backgroundColor: "red" }} />
        </MapView>

        {marker ? <MarkerPost style={{ bottom: "50%" }} color={color} item={marker} /> : null}

        <TouchableOpacity style={styles.btnClose} onPress={close}>
          <Icon name="close" style={styles.icClose} type={"FontAwesome"} />
        </TouchableOpacity>

        <TouchableOpacity
          disabled={!allowed}
          style={[styles.btnShare,{backgroundColor: allowed ? color.BG_BTN_PICK_ACTIVE : color.BG_BTN_PICK_INACTIVE}]}
          onPress={pickLocation}>
          <Text style={styles.txtShare}>{language.SHARE_NOW}</Text>
        </TouchableOpacity>

      </View>
    </Modal>
  );
});

export default memo(ModalPickLocation);
