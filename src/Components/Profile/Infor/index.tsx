import React, { FC, memo, useCallback, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styleScaled from "./style";
import Svg, { ClipPath, Defs, Image, LinearGradient, Path, Stop } from "react-native-svg";
import Icon from "../../BaseComponents/Icon";
import { moderateScale, scale } from "react-native-size-matters";
import { getColorGender, getIconGender } from "../../../Utils/Helpers";
import moment from "moment";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { UserInfor } from "../../../Models";
import ModalImage from "../../BaseComponents/ModalImage";
import { IMAGE } from "../../../Utils/Values";


interface Props {
  color: any,
  navigation: DrawerNavigationProp<any, any>,
  userInfor: UserInfor
}

const Infor: FC<Props> = (props) => {
  const { color, navigation, userInfor } = props;
  const styles = styleScaled(color);
  const refModalImage = useRef();

  const showAvatar = useCallback(() => {
    refModalImage.current.show();
  }, []);

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
            href={userInfor.avatar || IMAGE.EMPTY_AVATAR}
            clipPath="url(#clip)"
          />

          <Path
            d="M 0 0 l 0 85 Q 0 100 15 100 L 85 100 Q 100 100 100 115 L 100 0 Z"
            fill="url(#grad)"
          />
        </Svg>

        <TouchableOpacity onPress={() => navigation.openDrawer()}
                          style={[styles.routerButton, { left: scale(20) }]}>
          <Icon type={"MaterialIcons"} name={"notes"} size={moderateScale(23, 0.3)} color={color.INFOR_IC_MENU} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}
                          style={[styles.routerButton, { right: scale(20) }]}>
          <Icon type={"MaterialCommunityIcons"} name={"account-edit"}
                size={moderateScale(23, 0.3)} color={ color.INFOR_IC_EDIT} />
        </TouchableOpacity>

        <View style={styles.containerInfor}>
          <Text style={styles.textNickname} numberOfLines={2} ellipsizeMode={'tail'}>{userInfor.nickname}
            <Icon type={"MaterialCommunityIcons"}
                  name={getIconGender(userInfor.gender)}
                  size={moderateScale(30, 0.3)}
                  color={getColorGender(userInfor.gender)} />
          </Text>

          <Text style={styles.textName} numberOfLines={2} ellipsizeMode={'tail'}>{userInfor.name}</Text>
          {userInfor.dob ?
            <Text style={styles.textDob}>{(moment(userInfor.dob)).format("DD/MM/YYYY")}</Text>
            :
            null}

          <Text style={styles.textDescription}>{userInfor.description || "..."}</Text>

        </View>
      </TouchableOpacity>

      <ModalImage
        url={[{
          url: userInfor.avatar || "",
          props: userInfor.avatar ? null : { source: IMAGE.EMPTY_AVATAR }
        }]} ref={refModalImage} />
    </View>

  );
};
export default memo(Infor);
