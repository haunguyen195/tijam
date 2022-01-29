import React, { FC, forwardRef, memo, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styleScaled from "./style";
import Modal from "react-native-modal";
import Icon from "../../BaseComponents/Icon";
import { moderateScale } from "react-native-size-matters";
import { NUMBER_KEY_BOARD } from "../../../Utils/Values";

const data = [
  {
    order: 0
  },
  {
    order: 1
  },
  {
    order: 2
  },
  {
    order: 3
  },
  {
    order: 4
  },
  {
    order: 5
  }
];

const InputCode: FC<any> = memo((props) => {
  const { styles, hideModal, confirmCode, color } = props;
  const [currentInput, setCurrentInput] = useState(0);
  const [check, setCheck] = useState(false);
  const cellRefs = useRef([]);
  const [values, setValues] = useState([]);

  const renderRowKeyBoard = useCallback((items: any, index: number) => {
    return (
      <View key={index.toString()} style={styles.viewRowKeyBoard}>
        {items.map(renderButtonKeyBoard)}
      </View>
    );
  }, [currentInput]);

  const renderButtonKeyBoard = useCallback((item: any) => {

    return (
      <TouchableOpacity key={item.value.toString()}
                        onPress={() => pressButtonKeyBoard(item.value)}
                        disabled={item.value == -1 && !check}
                        style={[styles.touchButtonKeyBoard, {
                          backgroundColor: item.value == -2 ? color.BG_BTN_CLOSE : (item.value == -1 && !check ? color.BG_BTN_INACTIVE : color.BG_BTN_ACTIVE)
                        }]}>
        {item.value >= 0 ?
          <Text style={styles.txtButtonKeyBoard}>{item.value}</Text>
          :
          <Icon type={"MaterialIcons"} name={item.value == -1 ? "keyboard-arrow-right" : "clear"}
                size={moderateScale(item.value == -1 ? 33 : 25, 0.3)} color={"white"} />}
      </TouchableOpacity>
    );
  }, [currentInput]);


  const pressButtonKeyBoard = useCallback((value: number) => {
    if (value == -1) {
      confirmCode(values.join(""));
      hideModal();
    } else if (value == -2) {
      hideModal();
    } else {
      if (currentInput != 6) {
        cellRefs.current[currentInput].setNativeProps({ text: value.toString() });

        if (values.length == 5 && !check)
          setCheck(true);

        values[currentInput] = value;
        setValues(values);
        setCurrentInput(currentInput => currentInput + 1);
      }
    }

  }, [currentInput]);


  return (
    <View>
      <View style={styles.containerInputCode}>
        {
          data.map((item) => <TextInput
            maxLength={1} key={item.order}
            style={[styles.input, { borderColor: currentInput == item.order ? color.BD_INPUT_ACTIVE : color.BD_INPUT_INACTIVE }]}
            keyboardType={"numbers-and-punctuation"}
            underlineColorAndroid={"transparent"}
            blurOnSubmit={false}
            ref={(element) => cellRefs.current[item.order] = element}
            onPressIn={() => setCurrentInput(item.order)}
            showSoftInputOnFocus={false}
            caretHidden={true}
            value={"-"}
          />)
        }
      </View>

      <View style={styles.containerKeyBoard}>
        {
          NUMBER_KEY_BOARD.map(renderRowKeyBoard)
        }
      </View>
    </View>

  );
});

const ModalConfirm: FC<any> = forwardRef((props, ref) => {
  const { color, language, confirmCode } = props;
  const styles = styleScaled(color);

  const [reSend, setResend] = useState(false);
  const [visible, setVisible] = useState(false);
  const [phoneNumber, setpPhoneNumber] = useState("");
  const txtCountDown = useRef(null);
  let intervalRef = useRef();
  let countDown = 60;

  useImperativeHandle(
    ref,
    () => ({
      show() {
        setVisible(true);
      },
      hide() {
        setVisible(false);
      },
      setPhone(countryCode: string, number: string) {
        setpPhoneNumber(`(${countryCode}) ${number}`);
      }
    })
  );

  const hideModal = useCallback(() => {
    setVisible(false);
  }, []);

  const decreaseNum = () => {
    if (countDown > -1)
      txtCountDown.current.setNativeProps({ text: (countDown--).toString() + " s" });
    else {
      clearInterval(intervalRef.current);
      setResend(true);
    }
  };

  useEffect(() => {
    if (!visible)
      setResend(false);

    if (visible && !reSend)
      intervalRef.current = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef.current);
  }, [visible, reSend]);


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
      backdropColor={color.BG_MODAL}
      backdropOpacity={0.6}
      useNativeDriver={true}
      onSwipeComplete={() => setVisible(false)}
      swipeDirection={"down"}
      statusBarTranslucent
      style={styles.modal}>

      <View style={styles.container}>
        {/*thông tin mô tả*/}
        <Text style={styles.txtTitle}>{language.VERIFY}</Text>
        <Text style={styles.txtDetail}>{language.NOTE_VERIFY}</Text>
        <View style={styles.viewDetail}>
          <View>
            <Text style={styles.txtPhoneNumber}>{phoneNumber}</Text>
            <Text style={styles.txtDetail}>{language.TIME_CODE}</Text>
          </View>

          {reSend ?
            // <TouchableOpacity
            //                   onPress={() => setResend(false)}
            //                   style={[styles.touchButtonKeyBoard, { alignSelf: "flex-end", marginRight: scale(20) }]}>
            //   <Text style={[styles.txtButtonKeyBoard, { fontSize: moderateScale(18, 0.3) }]}>Gửi lại</Text>
            // </TouchableOpacity>
            <Text style={styles.txtCountDown}>∞ =))</Text>
            :
            <TextInput
              editable={false}
              ref={txtCountDown}
              style={styles.txtCountDown}
              value={countDown.toString() + " s"}
            />}
        </View>

        <InputCode styles={styles} hideModal={hideModal} confirmCode={confirmCode} color={color} />

      </View>

    </Modal>
  );
});

export default memo(ModalConfirm);
