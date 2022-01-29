import { AUTH } from "../types";
import { reducerHelpers } from "../../Utils/Helpers";
import auth from "@react-native-firebase/auth";

const initialState = {
  user: auth().currentUser,
  isUserReady: false,
  loginLoading: false
};

const actionHander = {
  [AUTH.IS_READY]: (state = initialState, action: any) => {
    return {
      ...state,
      isUserReady: action.isUserReady
    };
  },
  [AUTH.SET_USER]: (state = initialState, action: any) => {
    return {
      ...state,
      user: action.user
    };
  },
  [AUTH.SET_LOADING]: (state = initialState, action: any) => {
    return {
      ...state,
      loginLoading: action.value
    };
  }
};

export default reducerHelpers(initialState, actionHander);
