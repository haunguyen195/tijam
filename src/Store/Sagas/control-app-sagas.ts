import { CONTROL_APP } from "../types";

import { takeLatest, put } from "redux-saga/effects";
import * as RootNavigation from "../../Navigation/RootNavigation";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDB, getAllSetting } from "../Services/db-service";
import { SETTING_DEFAULT } from "../../Utils/Values/const";
import * as RNLocalize from 'react-native-localize';

function* initApp() {
  const checkFirstTime = yield AsyncStorage.getItem('@first_open');
  if (checkFirstTime !== null) {
    let settings = {};
    yield getAllSetting().then((resolve) => {
      settings = resolve;
    });
    yield put({type: CONTROL_APP.UPDATE_SETTING, settings: settings});

  } else {
    let bestLanguage = RNLocalize.findBestAvailableLanguage(["en", "vi"]);

    yield createDB([...SETTING_DEFAULT,  { key: 'language', value: bestLanguage.languageTag }]);
    yield AsyncStorage.setItem('@first_open', "1");
  }
}

export function* watchInitApp() {
  yield takeLatest(CONTROL_APP.INIT_APP, initApp);
}

function* changeConnected(action) {
  if (!action.isConnected)
    RootNavigation.navigate("Error", {
      iconType: "MaterialCommunityIcons",
      iconName: "access-point-network-off",
      action: false,
      actionType: "ERROR_INTERNET"
    });
}

export function* watchChangeConnected() {
  yield takeLatest(CONTROL_APP.CHANGE_CONNECTED, changeConnected);
}
