import React, { FC, forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import styleScaled from "./style";
import { COUNTRY_CODE } from "../../../Utils/Values";
import DropDownPicker from "react-native-dropdown-picker";
import { compareCountryCode, ShowToast } from "../../../Utils/Helpers";
import Icon from "../../BaseComponents/Icon";
import { moderateScale } from "react-native-size-matters";
import ModalConfirm from "../ModalConfirm";
import auth from "@react-native-firebase/auth";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Auths from "../../../Store/Actions/auth-actions";

const PhoneNumber: FC<any> = forwardRef((props, ref) => {
  const { color, language, scrollTo, user, isUserReady, setUser, setLoading } = props;
  const styles = styleScaled(color);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("+84");
  const [checkPolicy, setCheckPolicy] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [items, setItems] = useState(COUNTRY_CODE.sort(compareCountryCode));
  const [confirm, setConfirm] = useState(false);
  const modalConfirm = useRef(null);
  const inputPhoneNumber = useRef(null);

  useEffect(() => {
    if (user && !isUserReady && phoneNumber != "") {
      modalConfirm.current.hide();
      scrollTo(1);
    }
  }, [user]);

  async function signInWithPhoneNumber() {
    const confirmation = await auth().signInWithPhoneNumber(value + phoneNumber, true).finally(() => {
      setLoading(false);
      modalConfirm.current.setPhone(value, phoneNumber);
      modalConfirm.current.show();
    });
    setConfirm(confirmation);
  }

  async function confirmCode(code: string) {
    try {
      await confirm.confirm(code);
    } catch (error) {
      ShowToast(
        "error",
        language.ERROR_AUTH_CODE,
        language.DETAIL_ERROR_AUTH_CODE
      );
      console.log("Invalid code.");
    }
  }

  const onPressSignin = () => {
    if (user) {
      if (user.phoneNumber == (value + phoneNumber)) {
        scrollTo(1);
      } else {
        setUser(null);
      }
    } else {
      setLoading(true);
      signInWithPhoneNumber();
    }
  };

  useImperativeHandle(
    ref,
    () => ({
      onPressNext(index: number) {
        if(!checkPolicy){
          ShowToast(
            "error",
            language.ACCEPT_TERMS,
            language.ACCEPT_TERMS_TO_CONTINUE
          );
        }else {
          if (phoneNumber.length < 5) {
            ShowToast(
              "error",
              language.ERROR,
              language.INVALID_PHONE_NUMBER
            );
          } else {
            onPressSignin();
          }
        }
      }
    })
  );


  const changePhoneNumber = useCallback((valueNumber) => {
    valueNumber = valueNumber.replace(/[^0-9]/g, "");
    inputPhoneNumber.current.setNativeProps({ text: valueNumber });
    setPhoneNumber(valueNumber);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.bigTxt}>{language.HI}</Text>
      <Text style={styles.smallTxt}>{language.LOGIN_WITH_PHONE_NUMBER}</Text>

      <View style={{ width: "100%" }}>

        <View
          style={[styles.viewInput, {
            borderBottomRightRadius: open ? 0 : moderateScale(8),
            borderBottomLeftRadius: open ? 0 : moderateScale(8),
            borderBottomColor: open ? "#00000000" : color.BD_INPUT_PHONE_NUMBER
          }]}>

          <Pressable onPress={() => setOpen(true)} style={styles.pressCountryCode}>
            <Text style={styles.txtCountryValue}>{value}</Text>
            <Icon type={"MaterialIcons"} name={"arrow-drop-down"} style={styles.iconArrow} />
          </Pressable>

          <TextInput
            ref={inputPhoneNumber}
            maxLength={15}
            placeholder={language.PHONE_NUMBER}
            placeholderTextColor={color.TXT_PLACE_HOLDER}
            keyboardType={"numeric"}
            style={styles.input}
            underlineColorAndroid={"transparent"}
            returnKeyType={"done"}
            onChangeText={changePhoneNumber}
          />

        </View>

        <DropDownPicker
          zIndex={-1}
          zIndexInverse={-1}
          showArrowIcon={false}
          showTickIcon={false}
          style={styles.pickerStyle}
          dropDownContainerStyle={styles.dropdownContainerStyles}
          containerStyle={styles.dropdownContainer}
          flatListProps={{
            showsVerticalScrollIndicator: false
          }}
          labelStyle={styles.txtLabel}
          textStyle={styles.txtDropdownStyle}
          itemKey={"code"}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />

      </View>

      <Text style={styles.txtTerms}>{language.TERMS}</Text>
      <Pressable style={styles.btnCheckBox} onPress={()=>setCheckPolicy(!checkPolicy)} hitSlop={{top:20, left:20, bottom:20, right:20}}>
        <Icon type={"MaterialCommunityIcons"} name={checkPolicy?"checkbox-marked-outline":"checkbox-blank-outline"} style={styles.iconCheckBox} />
        <Text style={styles.txtUnderstand}>{language.UNDERSTAND}</Text>
      </Pressable>

      <ModalConfirm language={language} color={color} ref={modalConfirm} confirmCode={confirmCode} />
    </View>
  );
});

function mapStateToProps(state: any) {
  return {
    user: state.auth.user,
    isUserReady: state.auth.isUserReady
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    setUser: bindActionCreators(Auths.setUser, dispatch),
    setLoading: bindActionCreators(Auths.setLoading, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(PhoneNumber);
