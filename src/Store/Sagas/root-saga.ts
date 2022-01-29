import { all, fork } from "redux-saga/effects";
import * as UserSagas from "./user-sagas";
import * as AuthSagas from "./auth-sagas";
import * as PostSagas from "./post-sagas";
import * as ControlAppSagas from "./control-app-sagas";
import { watchInitApp } from "./control-app-sagas";

export default function* rootSaga() {
  yield all([
    fork(UserSagas.watchUploadAvatar),
    fork(UserSagas.watchUploadThumbnail),
    fork(UserSagas.watchSetInfor),
    fork(UserSagas.watchUpdateInfor),
    fork(UserSagas.watchSyncUserInfor),
    fork(AuthSagas.watchUpdateUser),
    fork(PostSagas.watchUploadPost),
    fork(PostSagas.watchGetPostByLocation),
    fork(ControlAppSagas.watchChangeConnected),
    fork(ControlAppSagas.watchInitApp),
  ]);
}
