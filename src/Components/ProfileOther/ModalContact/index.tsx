import React, { forwardRef, memo, useCallback, useEffect, useImperativeHandle, useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import styleScaled from "./style";
import Icon from "../../BaseComponents/Icon";
import { UserInfor } from "../../../Models";
import { ARRAY_SOCIAL_NETWORKS, COLOR_SOCIAL_NETWORKS, ICON_SOCIAL_NETWORKS } from "../../../Utils/Values";
import Modal from "react-native-modal";
import Clipboard from "@react-native-clipboard/clipboard";
import { ShowToast } from "../../../Utils/Helpers";

interface ModalContactProps {
  color?: any,
  userInfor: UserInfor,
  language: object
}

const ModalContact = forwardRef(({ color, userInfor, language }: ModalContactProps, ref) => {
  const styles = styleScaled(color);
  const [visible, setVisible] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  useImperativeHandle(
    ref,
    () => ({
      show() {
        setVisible(true);
      },
      hide() {
        setVisible(false);
      }
    })
  );

  useEffect(() => {
    let count = 0;
    if (userInfor)
      ARRAY_SOCIAL_NETWORKS.map((item) => {
        if (userInfor[item]) count++;
      });

    if (count === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [userInfor]);

  const copyContact = useCallback((contactInfor: string) => {
    if (contactInfor || contactInfor != "") {
      Clipboard.setString(contactInfor);
      ShowToast(
        "info",
        language.COPIED,
        contactInfor
      );
    }
  }, []);

  const renderSocialNetworks = (item: string) => {
    if (userInfor && userInfor[item])
      return (
        <Pressable onPress={() => copyContact(userInfor[item])} key={item}>
          <Text style={styles.txtContent} numberOfLines={1}>
            <Icon name={ICON_SOCIAL_NETWORKS[item]} type={"FontAwesome"} style={styles.icon}
                  color={COLOR_SOCIAL_NETWORKS[item]} />
            {`   ${userInfor[item]}`}
          </Text>
        </Pressable>
      );
    else return null;
  };

  const close = useCallback(() => setVisible(false), []);


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
      // onSwipeComplete={() => setVisible(false)}
      // swipeDirection={"down"}
      statusBarTranslucent
      style={{ marginVertical: 0, marginHorizontal: 0 }}>
      <View style={styles.containerModal}>
        <View style={styles.container}>
          <Text style={styles.title}>{language.CONTACT_INFO}</Text>

          {isEmpty ?
            <Text style={{ color: color.TXT_EMPTY }}>{language.NOTHING_FOR_YOU}</Text>
            :
            <View style={styles.viewContent}>
              {ARRAY_SOCIAL_NETWORKS.map(renderSocialNetworks)}
            </View>
          }
        </View>

        <TouchableOpacity style={styles.btnClose} onPress={close}>
          <Icon name="close" style={styles.iconClose} type={"FontAwesome"} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
});

export default memo(ModalContact);
