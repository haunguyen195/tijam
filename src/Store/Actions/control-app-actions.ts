import { CONTROL_APP } from "../types";
import {updateSetting as updateSettingDB} from "../Services/db-service";
import { SETTING_OPTIONS } from "../../Utils/Values/const";

export function initApp() {
  return {
    type: CONTROL_APP.INIT_APP,
  };
}

export function updateDrawer(progress: any) {
  return {
    type: CONTROL_APP.UPDATE_DRAWER,
    progress
  };
}

export function setBackgroundScreenDrawer(imageCurrentScreen: string) {
  return {
    type: CONTROL_APP.SET_BACKGROUND_SCREEN,
    imageCurrentScreen
  };
}

export function changeConnected(isConnected:boolean) {
  return {
    type: CONTROL_APP.CHANGE_CONNECTED,
    isConnected
  };
}

export function updateSetting(key, value) {
  updateSettingDB(key, value)
  return {
    type: CONTROL_APP.UPDATE_SETTING,
    settings: {[key]: SETTING_OPTIONS[key][value]}
  };
}
