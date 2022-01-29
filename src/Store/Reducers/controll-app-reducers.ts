import { CONTROL_APP } from "../types";
import { reducerHelpers } from "../../Utils/Helpers";
import Animated from "react-native-reanimated";
import { LIGHT } from "../../Utils/Themes";
import { VI } from "../../Utils/Languages";

const initialState = {
  isConnected:true,
  progressDrawer: new Animated.Value(0),
  backgroundScreenDrawer: null,
  imageCurrentScreen: null,
  settings: {
    color: LIGHT,
    language:VI
  },
};

const actionHander = {
  [CONTROL_APP.CHANGE_CONNECTED]: (state = initialState, action: any) => {
    return {
      ...state,
      isConnected: action.isConnected
    };
  },
  [CONTROL_APP.UPDATE_DRAWER]: (state = initialState, action: any) => {
    return {
      ...state,
      progressDrawer: action.progress
    };
  },
  [CONTROL_APP.SET_BACKGROUND_SCREEN]: (state = initialState, action: any) => {
    let imageCurrentScreen = state.imageCurrentScreen;
    return {
      ...state,
      imageCurrentScreen: action.imageCurrentScreen,
      backgroundScreenDrawer: imageCurrentScreen || action.imageCurrentScreen
    };
  },
  [CONTROL_APP.UPDATE_SETTING]: (state = initialState, action: any) => {
    return {
      ...state,
      settings: {...state.settings, ...action.settings}
    };
  }
};

export default reducerHelpers(initialState, actionHander);
