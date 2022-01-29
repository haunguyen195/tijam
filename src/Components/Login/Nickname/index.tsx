import React, { FC, forwardRef, useCallback, useImperativeHandle, useRef, useState } from "react";
import { Text, TextInput, View } from "react-native";
import styleScaled from "./style";
import { bindActionCreators } from "redux";
import * as UserActions from "../../../Store/Actions/user-actions";
import { debounce } from "lodash";
import { checkNickname } from "../../../Store/Services/user-services";
import { removeAccents, ShowToast } from "../../../Utils/Helpers";
import { connect } from "react-redux";

export interface NicknameProps {
  color: object,
  scrollTo: (index: number) => void,
  setUserInfor: (objectUserInfor: object) => void,
  language:object
}

const specialWords = ["tijam", "tiiam", "admin", "admjn", "system"];

const Nickname: FC<any> = forwardRef(({ color, language, scrollTo, setUserInfor }: NicknameProps, ref) => {
  const styles = styleScaled(color);
  const [invalidNickname, setInvalidNickname] = useState<boolean>(true);
  const [errorDetail, setErrorDetail] = useState<string>("");
  const inputNickname = useRef<TextInput>();
  const nickname = useRef<string>("");
  const debouncedSearchNickname = useCallback(debounce(() => checkDuplicateNickname(), 500), []);

  useImperativeHandle(
    ref,
    () => ({
      onPressNext(index: number) {
        if (!invalidNickname) {
          ShowToast(
            "error",
            language.ERROR,
            errorDetail
          );
        } else {
          setUserInfor({ nickname: nickname.current.toLowerCase() });
          scrollTo(index + 1);
        }
      }
    })
  );

  const checkDuplicateNickname = async () => {
    await checkNickname(nickname.current.toLowerCase()).then((resultCheck: boolean) => {
      setInvalidNickname(!resultCheck);
      setErrorDetail(language.ERROR_DUPLICATE_NICKNAME);
    });
  };

  const onChangeNickname = useCallback((text: string) => {
    text = removeAccents(text);
    text = text.replace(/[^a-zA-Z0-9._]+$/g, "");
    // @ts-ignore
    inputNickname.current.setNativeProps({ text });
    nickname.current = text;
    if (nickname.current === "") {
      debouncedSearchNickname.cancel();
      setInvalidNickname(false);
      setErrorDetail(language.CHOOSE_A_NICKNAME);
    } else {
      if (new RegExp(specialWords.join("|")).test(nickname.current)) {
        debouncedSearchNickname.cancel();
        setInvalidNickname(false);
        setErrorDetail(language.NICKNAME_DONT_INCLUDE + specialWords.join(", "));
      } else {
        setInvalidNickname(true);
        debouncedSearchNickname();
      }
    }

  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.bigTxt}>{language.WELCOME}</Text>
      <Text style={styles.smallTxt}>{language.WE_CAN_CALL_YOU}</Text>

      <TextInput
        ref={inputNickname}
        placeholder={"Nickname"}
        placeholderTextColor={color.TXT_PLACE_HOLDER}
        style={styles.input}
        underlineColorAndroid={"transparent"}
        returnKeyType={"done"}
        onChangeText={onChangeNickname}
        maxLength={25} />

      {!invalidNickname ?
        <Text style={styles.alertTxt}>{"* " + errorDetail}</Text> : null}
    </View>
  );
});



function mapDispatchToProps(dispatch: any) {
  return {
    setUserInfor: bindActionCreators(UserActions.setUserInfor, dispatch),
  };
}

export default connect(null, mapDispatchToProps, null, { forwardRef: true })(Nickname);
