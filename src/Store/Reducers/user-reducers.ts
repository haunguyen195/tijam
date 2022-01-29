import { USER } from "../types";
import { reducerHelpers } from "../../Utils/Helpers";
import { UserInfor } from "../../Models";
import { STATUS } from "../../Utils/Values";

const initialState = {
  userInfor: new UserInfor(),
  statusUploadAvatar: STATUS.WAIT
};

const actionHander = {
  [USER.SET_USERINFOR]: (state = initialState, action: any) => {
    return {
      ...state,
      userInfor: { ...state.userInfor, ...action.userInfor }
    };
  },
  [USER.UPDATE_USERINFOR]: (state = initialState, action: any) => {
    return {
      ...state,
      userInfor: { ...state.userInfor, ...action.userInfor }
    };
  },
  [USER.RESET_UPLOAD_AVATAR_STATUS]: (state = initialState, action: any) => {
    return {
      ...state,
      statusUploadAvatar: STATUS.WAIT
    };
  },
  [USER.UPLOAD_AVATAR]: (state = initialState, action: any) => {
    return {
      ...state,
      statusUploadAvatar: STATUS.LOADING
    };
  },
  [USER.UPLOAD_AVATAR_SUCCESS]: (state = initialState, action: any) => {
    return {
      ...state,
      userInfor: { ...state.userInfor, avatar: action.downloadUrl },
      statusUploadAvatar: STATUS.SUCCESS
    };
  },
  [USER.UPLOAD_AVATAR_FAILED]: (state = initialState, action: any) => {
    return {
      ...state,
      userInfor: { ...state.userInfor, avatar: "" },
      statusUploadAvatar: STATUS.FAILED
    };
  },
  [USER.UPLOAD_THUMBNAIL_SUCCESS]: (state = initialState, action: any) => {
    return {
      ...state,
      userInfor: { ...state.userInfor, thumbnail: action.downloadUrl }
    };
  },
  [USER.UPLOAD_THUMBNAIL_FAILED]: (state = initialState, action: any) => {
    return {
      ...state,
      userInfor: { ...state.userInfor, thumbnail: "" }
    };
  },
  [USER.SYNC_USERINFOR_SUCCESS]: (state = initialState, action: any) => {
    return {
      ...state,
      userInfor: { ...state.userInfor, ...action.userInfor }
    };
  },
  [USER.SYNC_USERINFOR_FAILED]: (state = initialState, action: any) => {
    return {
      ...state,
      userInfor: { ...state.userInfor }
    };
  }
};

export default reducerHelpers(initialState, actionHander);
