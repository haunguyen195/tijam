import React, { FC, memo, useCallback, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styleScaled from "./style";
import Svg, { ClipPath, Defs, Image, LinearGradient, Path, Stop } from "react-native-svg";
import Icon from "../../BaseComponents/Icon";
import { moderateScale, scale } from "react-native-size-matters";
import { getColorGender, getIconGender, ShowToast } from "../../../Utils/Helpers";
import moment from "moment";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import ModalImage from "../../BaseComponents/ModalImage";
import { UserInfor } from "../../../Models";
import { GENDER, IMAGE } from "../../../Utils/Values";

interface Props {
  color: any,
  navigation: DrawerNavigationProp<any, any>,
  userInfor: UserInfor | undefined,
  language:object
}

const Infor: FC<Props> = (props) => {
  const { color, language, navigation, userInfor = null } = props;
  const styles = styleScaled(color);
  const refModalImage = useRef();

  const showAvatar = useCallback(() => {
    refModalImage.current.show();
  }, []);

  const onAlertPress = useCallback(() => ShowToast(
    "info",
    language.LET_ME_TELL_YOU,
    language.REPORT_NOT_AVAILABLE
  ), []);

  return (
    <View>
      <TouchableOpacity onPress={showAvatar} style={styles.container}>
        <Svg viewBox="0 0 100 115" style={{ position: "absolute" }}>
          <Defs>
            <ClipPath id="clip">
              <Path
                d="M 0 0 l 0 85 Q 0 100 15 100 L 85 100 Q 100 100 100 115 L 100 0 Z"
                fill="#000"
              />
            </ClipPath>
          </Defs>

          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor="#fff" stopOpacity="0" />
              <Stop offset="0.8695" stopColor="#000" stopOpacity="1" />
            </LinearGradient>
          </Defs>

          <Image
            x="0"
            y="0"
            height={"100"}
            width={"100"}
            preserveAspectRatio="xY slice"
            href={userInfor && userInfor.avatar ? userInfor.avatar : IMAGE.EMPTY_AVATAR}
            clipPath="url(#clip)"
          />

          <Path
            d="M 0 0 l 0 85 Q 0 100 15 100 L 85 100 Q 100 100 100 115 L 100 0 Z"
            fill="url(#grad)"
          />
        </Svg>

        <TouchableOpacity onPress={() => navigation.goBack()}
                          style={[styles.routerButton, { left: scale(20) }]}>
          <Icon type={"Feather"} name={"arrow-left"} size={moderateScale(23, 0.3)} color={color.INFOR_IC_MENU} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onAlertPress}
                          style={[styles.routerButton, { right: scale(20) }]}>
          <Icon type={"MaterialCommunityIcons"} name={"account-alert"}
                size={moderateScale(23, 0.3)} color={color.INFOR_IC_REPORT} />
        </TouchableOpacity>

        <View style={styles.containerInfor}>
          <Text style={styles.textNickname} numberOfLines={2}
                ellipsizeMode={"tail"}>{userInfor && userInfor.nickname ? userInfor.nickname : "..........."}
            <Icon type={"MaterialCommunityIcons"}
                  name={getIconGender(userInfor && userInfor.gender ? userInfor.gender : GENDER.CUSTOM)}
                  size={moderateScale(30, 0.3)}
                  color={getColorGender(userInfor && userInfor.gender ? userInfor.gender : GENDER.CUSTOM)} />
          </Text>

          <Text style={styles.textName} numberOfLines={2}
                ellipsizeMode={"tail"}>{userInfor && userInfor.name ? userInfor.name : "..................."}</Text>
          {userInfor && userInfor.dob ?
            <Text style={styles.textDob}>{(moment(userInfor.dob)).format("DD/MM/YYYY")}</Text>
            :
            <Text style={styles.textDob}>{"../../...."}</Text>}

          <Text
            style={styles.textDescription}>{userInfor && userInfor.description ? userInfor.description : "..."}</Text>

        </View>
      </TouchableOpacity>


      <ModalImage
        url={[{
          url: userInfor && userInfor.avatar ? userInfor.avatar : "",
          props: userInfor && userInfor.avatar ? null : { source: IMAGE.EMPTY_AVATAR }
        }]} ref={refModalImage} />
    </View>

  );
};
export default memo(Infor);
