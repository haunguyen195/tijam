import { POST } from "../types";
import { Post } from "../../Models";

export function uploadPost(newPost:Post) {
  return {
    type: POST.UPLOAD_POST,
    newPost
  };
}

export function resetUploadPostStatus() {
  return {
    type: POST.RESET_UPLOAD_POST_STATUS,
  };
}

export function getPostsByLocation(location:any) {
  return {
    type: POST.GET_POST_BY_LOCATION,
    location
  };
}
