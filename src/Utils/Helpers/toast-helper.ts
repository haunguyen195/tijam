import Toast from "react-native-toast-message";

import {store} from '../../Navigation'

export const ShowToast = (type: string, title: string, content: string, params?:object) => {
  const state = store.getState();

  Toast.show({
    type: type,
    text1: title,
    text2: content,
    props:{
      BG:state.controlApp.settings.color.TOAST.BG,
      TXT1:state.controlApp.settings.color.TOAST.TXT_TITLE,
      TXT2:state.controlApp.settings.color.TOAST.TXT_CONTENT
    },
    ...params
  });
};
