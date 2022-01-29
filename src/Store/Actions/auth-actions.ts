import { AUTH } from "../types";

export function setUserReady(isUserReady: boolean) {
  return {
    type: AUTH.IS_READY,
    isUserReady
  };
}

export function setUser(user: any) {
  return {
    type: AUTH.SET_USER,
    user
  };
}

export function setLoading(value: boolean) {
  return {
    type: AUTH.SET_LOADING,
    value
  };
}

