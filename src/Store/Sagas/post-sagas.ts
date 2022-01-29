import { POST } from "../types";

import { put, takeLatest } from "redux-saga/effects";
import { PostServices } from "../Services/post-services";

function* uploadPost({ newPost }) {
  try {
    if (newPost.image) {
      const responseImage = yield PostServices.uploadImage(newPost.image, newPost.id);

      if (responseImage.error == null && responseImage.downloadUrl != null) {
        newPost.image = responseImage.downloadUrl;
      } else {
        yield put({ type: POST.UPLOAD_POST_FAILED });
      }
    }

    yield PostServices.uploadPost(newPost);
    yield put({ type: POST.UPLOAD_POST_SUCCESS, post: newPost });

  } catch (e) {
    console.log(e)
    yield put({ type: POST.UPLOAD_POST_FAILED });
  }
}

export function* watchUploadPost() {
  yield takeLatest(POST.UPLOAD_POST, uploadPost);
}

function* getPostByLocation({ location }) {
  try {
    const responsePosts = yield PostServices.getPostsByLocation(location);

    yield put({ type: POST.GET_POST_BY_LOCATION_VALUE, results: responsePosts });

  } catch (e) {
    yield put({ type: POST.GET_POST_BY_LOCATION_VALUE, results: [] });
  }
}

export function* watchGetPostByLocation() {
  yield takeLatest(POST.GET_POST_BY_LOCATION, getPostByLocation);
}
