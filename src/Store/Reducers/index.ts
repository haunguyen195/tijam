import {combineReducers} from 'redux';

import auth from './auth-reducers';
import controlApp from './controll-app-reducers';
import user from './user-reducers';
import post from './post-reducers';

export default combineReducers({
  auth,
  controlApp: controlApp,
  user,
  post
});
