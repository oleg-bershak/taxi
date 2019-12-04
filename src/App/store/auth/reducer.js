import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  sendAuthRequest,
  sendAuthSuccess,
  sendAuthFailure,
  fetchLogout,
  sendRegisterRequest,
  sendRegisterSuccess,
  sendRegisterFailure,
} from './actions';

const isLoggedIn = handleActions(
  {
    [sendAuthRequest]: () => false,
    [sendAuthFailure]: () => false,
    [sendAuthSuccess]: () => true,
    [sendRegisterRequest]: () => false,
    [sendRegisterFailure]: () => false,
    [sendRegisterSuccess]: () => true,
    [fetchLogout]: () => false,
  },
  window.localStorage.getItem('token') ? true : false,
);

const error = handleActions(
  {
    [sendAuthRequest]: () => null,
    [sendAuthFailure]: (_state, action) => action.payload,
    [sendAuthSuccess]: () => null,
    [sendRegisterRequest]: () => null,
    [sendRegisterFailure]: (_state, action) => action.payload,
    [sendRegisterSuccess]: () => null,
  },
  null,
);

export default combineReducers({
  isLoggedIn,
  error,
});
