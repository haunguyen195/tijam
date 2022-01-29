import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";
import DropDownPicker from "react-native-dropdown-picker";
import { moderateScale, verticalScale } from "react-native-size-matters";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { bindActionCreators } from "redux";

import Header from "../../Components/BaseComponents/Header";
import { GENDER } from "../../Utils/Values";
import Icon from "../../Components/BaseComponents/Icon";
import * as UserActions from "../../Store/Actions/user-actions";
import styleScaled from "./style";


const EditInforUser: FC<any> = (props) => {
  const { navigation, color, language, userInfor, updateUserInfor } = props;
  const styles = styleScaled(color);

  const GenderOptions = [
    {
      label: language[GENDER.MAN],
      value: GENDER.MAN
    },
    {
      label: language[GENDER.WOMEN],
      value: GENDER.WOMEN
    },
    {
      label: language[GENDER.CUSTOM],
      value: GENDER.CUSTOM
    }
  ];

  const [reverseName, setReverseName] = useState<boolean>(userInfor.reverseName);
  const [dob, setDob] = useState<Date>(userInfor.dob || new Date());
  const [open, setOpen] = useState<boolean>(false);
  const [gender, setGender] = useState<GENDER>(userInfor.gender || GENDER.CUSTOM);
  const [items, setItems] = useState<object>(GenderOptions);
  const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);
  const refTextName = useRef<TextInput>();
  const refFirstName = useRef<string>(userInfor.firstName);
  const refInputFirstName = useRef<TextInput>();
  const refLastName = useRef<string>(userInfor.lastName);
  const refInputLastName = useRef<TextInput>();


  const saveInfor = () => {
    updateUserInfor({
      reverseName: reverseName,
      name: reverseName ? refFirstName.current + " " + refLastName.current : refLastName.current + " " + refFirstName.current,
      firstName: refFirstName.current,
      lastName: refLastName.current,
      gender: gender,
      dob: dob
    });

    navigation.goBack();
  };

  useEffect(() => {
    refInputFirstName.current?.setNativeProps({ text: refFirstName.current });
    refInputLastName.current?.setNativeProps({ text: refLastName.current });
  }, []);

  const changeFirstname = useCallback((text) => {
    refFirstName.current = text;
    refTextName.current?.setNativeProps({ text: reverseName ? refFirstName.current + " " + refLastName.current : refLastName.current + " " + refFirstName.current });
  }, []);

  const changeLastname = useCallback((text) => {
    refLastName.current = text;
    refTextName.current?.setNativeProps({ text: reverseName ? refFirstName.current + " " + refLastName.current : refLastName.current + " " + refFirstName.current });
  }, []);

  const changeReverse = () => {
    setReverseName(preReverse => !preReverse);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setDob(date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>

      <Header title={language.EDIT_DETAIL} iconRight={"check"} iconRightType={"Feather"}
              onPressRight={saveInfor} />

      <View style={styles.viewContent}>
        <Pressable onPress={changeReverse} hitSlop={{ right: 50 }} style={styles.viewInfor}>
          <Text style={styles.title}>{language.DISPLAY_NAME+":"}</Text>
          <TextInput ref={refTextName} editable={false} style={styles.inforName} numberOfLines={1}
                     value={reverseName ? refFirstName.current + " " + refLastName.current : refLastName.current + " " + refFirstName.current} />
          <Icon type={"FontAwesome"} name={"refresh"}
                style={styles.iconTail} />
        </Pressable>

        <View style={styles.viewInfor}>
          <Text style={styles.title}>{language.LAST_NAME+":"}</Text>
          <TextInput onChangeText={changeLastname} style={styles.inputName}
                     numberOfLines={1} ref={refInputLastName} placeholder={language.LAST_NAME} placeholderTextColor={color.TXT_PLACE_HOLDER}/>
        </View>

        <View style={styles.viewInfor}>
          <Text style={styles.title}>{language.FIRST_NAME+":"}</Text>
          <TextInput onChangeText={changeFirstname} style={styles.inputName}
                     numberOfLines={1} ref={refInputFirstName} placeholder={language.FIRST_NAME} placeholderTextColor={color.TXT_PLACE_HOLDER}/>
        </View>

        <Pressable onPress={showDatePicker} hitSlop={{ right: 20, left: 20 }} style={styles.viewInfor}>
          <Text style={styles.title}>{language.BIRTHDAY+":"}</Text>
          <Text style={styles.inforName}>{dob.toLocaleDateString()}</Text>
          <Icon type={"FontAwesome"} name={"calendar"}
                style={styles.iconTail} />
        </Pressable>
      </View>

      <View style={styles.viewInfor} hitSlop={{bottom: verticalScale(150)}}>
        <Text style={styles.title}>{language.GENDER}</Text>
        <DropDownPicker
          zIndex={2}
          style={styles.pickerStyle}
          dropDownContainerStyle={styles.dropdownContainerStyles}
          ArrowDownIconComponent={({ style }) => <Icon style={style} type={"Entypo"} name={"chevron-down"}
                                                       color={color.IC_DROPDOWN} size={moderateScale(20, 0.3)} />}
          ArrowUpIconComponent={({ style }) => <Icon style={style} type={"Entypo"} name={"chevron-up"}
                                                     color={color.IC_DROPDOWN} size={moderateScale(20, 0.3)} />}
          TickIconComponent={({ style }) => <Icon style={style} type={"Entypo"} name={"check"}
                                                  color={color.IC_DROPDOWN} size={moderateScale(18, 0.3)} />}
          containerStyle={styles.dropdownContainer}
          flatListProps={{ showsVerticalScrollIndicator: false }}
          labelStyle={styles.txtLabel}
          textStyle={styles.txtDropdownStyle}
          itemKey={"value"}
          open={open}
          value={gender}
          items={items}
          setOpen={setOpen}
          setValue={setGender}
          setItems={setItems}
        />
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    color: state.controlApp.settings.color.EDIT_INFO_USER,
    language: state.controlApp.settings.language,
    userInfor: state.user.userInfor
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    updateUserInfor: bindActionCreators(UserActions.updateUserInfor, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditInforUser);
