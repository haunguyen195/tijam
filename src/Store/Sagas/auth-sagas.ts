import { USER } from "../types";

import { takeLatest } from "redux-saga/effects";
import auth from "@react-native-firebase/auth";

function* updateUser(action: any) {
  try {
    if (action.userInfor.name)
      auth().currentUser?.updateProfile({ displayName: action.userInfor.name });
  } catch (e) {

  }
}

export function* watchUpdateUser() {
  yield takeLatest(USER.UPDATE_USERINFOR, updateUser);
  yield takeLatest(USER.SET_USERINFOR, updateUser);
}
