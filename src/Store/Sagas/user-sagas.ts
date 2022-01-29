import { USER } from "../types";

import { put, takeLatest } from "redux-saga/effects";
import { UserServices } from "../Services/user-services";
import auth from "@react-native-firebase/auth";
import { Post } from "../../Models";
import { PostServices } from "../Services/post-services";
import moment from "moment";

function* uploadAvatar(action: any) {
  try {
    const response = yield UserServices.uploadAvatar(action);

    if (response.error == null && response.downloadUrl != null) {
      auth().currentUser?.updateProfile({ photoURL: response.downloadUrl });

      if (action.needUpdateServer)
        yield put({ type: USER.UPDATE_USERINFOR, userInfor: { avatar: response.downloadUrl } });
      else
        yield put({ type: USER.UPLOAD_AVATAR_SUCCESS, downloadUrl: response.downloadUrl });

    } else {
      yield put({ type: USER.UPLOAD_AVATAR_FAILED });
    }
  } catch (e) {
    yield put({ type: USER.UPLOAD_AVATAR_FAILED });
  }
}

export function* watchUploadAvatar() {
  yield takeLatest(USER.UPLOAD_AVATAR, uploadAvatar);
}

function* uploadThumbnail(action: any) {
  try {
    const response = yield UserServices.uploadThumbnail(action);

    if (response.error == null && response.downloadUrl != null) {

      if (action.needUpdateServer) {

        let posts = action.posts.map((item: Post) => {
          return { ...item, avatar: response.downloadUrl };
        });

        yield PostServices.updateThumbnailInPosts(response.downloadUrl);

        yield put({ type: USER.UPDATE_USERINFOR, userInfor: { thumbnail: response.downloadUrl, posts: posts } });
      } else
        yield put({ type: USER.UPLOAD_THUMBNAIL_SUCCESS, downloadUrl: response.downloadUrl });

    } else {
      yield put({ type: USER.UPLOAD_THUMBNAIL_FAILED });
    }
  } catch (e) {
    yield put({ type: USER.UPLOAD_THUMBNAIL_FAILED });
  }
}

export function* watchUploadThumbnail() {
  yield takeLatest(USER.UPLOAD_THUMBNAIL, uploadThumbnail);
}

function* setInfor(action: any) {
  try {
    yield UserServices.setInfor(action);
  } catch (e) {

  }
}

export function* watchSetInfor() {
  yield takeLatest(USER.SET_USERINFOR_SERVER, setInfor);
}

function* updateInfor(action: any) {
  try {
    yield UserServices.updateInfor(action);
  } catch (e) {

  }
}

export function* watchUpdateInfor() {
  yield takeLatest(USER.UPDATE_USERINFOR, updateInfor);
}

function* syncUserInfor(action: any) {
  try {
    const userData = yield UserServices.getUserInfor(action.id);

    let postAvailable = userData.posts.filter((item) => {
      return moment(new Date()).isBefore(moment(item.duration.toDate()),'millisecond');
    });

    if (postAvailable.length !== userData.posts.length) {
      userData.posts = postAvailable;
      yield updateInfor({ userInfor: { posts: postAvailable } });
    }

    yield put({ type: USER.SYNC_USERINFOR_SUCCESS, userInfor: userData });

  } catch (e) {
    yield put({ type: USER.SYNC_USERINFOR_FAILED });
  }
}

export function* watchSyncUserInfor() {
  yield takeLatest(USER.SYNC_USERINFOR, syncUserInfor);
}
