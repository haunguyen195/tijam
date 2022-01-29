import { POST } from "../types";
import { compareCreate_ts, reducerHelpers } from "../../Utils/Helpers";
import { STATUS } from "../../Utils/Values";

const initialState = {
  statusUpload: STATUS.WAIT,
  posts: []
};

const actionHander = {
  [POST.RESET_UPLOAD_POST_STATUS]: (state = initialState, action: any) => {
    return {
      ...state,
      statusUpload: STATUS.WAIT
    };
  },
  [POST.UPLOAD_POST]: (state = initialState, action: any) => {
    return {
      ...state,
      uploadingPost: true,
      statusUpload: STATUS.LOADING
    };
  },
  [POST.UPLOAD_POST_SUCCESS]: (state = initialState, action: any) => {
    return {
      ...state,
      posts: [...state.posts, action.post],
      uploadingPost: true,
      statusUpload: STATUS.SUCCESS
    };
  },
  [POST.UPLOAD_POST_FAILED]: (state = initialState, action: any) => {
    return {
      ...state,
      uploadingPost: true,
      statusUpload: STATUS.FAILED
    };
  },
  [POST.GET_POST_BY_LOCATION_VALUE]: (state = initialState, action: any) => {
    return {
      ...state,
      posts: action.results.sort(compareCreate_ts)
    };
  }
};

export default reducerHelpers(initialState, actionHander);
