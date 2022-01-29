import { USER } from "../types";
import { Post } from "../../Models";

export function setUserInforServer(userInfor: any) {
  return {
    type: USER.SET_USERINFOR_SERVER,
    userInfor
  };
}

export function updateUserInfor(userInfor: object) {
  return {
    type: USER.UPDATE_USERINFOR,
    userInfor
  };
}

export function setUserInfor(userInfor: any) {
  return {
    type: USER.SET_USERINFOR,
    userInfor
  };
}

export function resetUploadAvatarStatus() {
  return {
    type: USER.RESET_UPLOAD_AVATAR_STATUS
  };
}

export function uploadAvatar(path: string, name:string, needUpdateServer:boolean=true) {
  return {
    type: USER.UPLOAD_AVATAR,
    path,
    name,
    needUpdateServer
  };
}

export function uploadThumbnail(path: string, name:string, posts:Array<Post>=[], needUpdateServer:boolean=true) {
  return {
    type: USER.UPLOAD_THUMBNAIL,
    path,
    name,
    needUpdateServer,
    posts
  };
}

export function syncUserInfor(id:String) {
  return {
    type: USER.SYNC_USERINFOR,
    id
  };
}
