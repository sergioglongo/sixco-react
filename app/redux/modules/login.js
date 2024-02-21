import produce from 'immer';
import { INIT } from '../constants/reduxFormConstants';
import { logout } from '../../api/apiclient/ApiClient';

const initialState = {
  AccessToken: {},
  isAuthenticated: false,
  loginData: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INIT:
      return state;
    case 'SET_CLIENT_DATA':
      return produce(state, draftState => {
        draftState.clientData = action.clientData;
      });
    case 'CHANGE_ACCESS_TOKEN':
      return produce(state, draftState => {
        draftState.AccessToken = action.AccessToken;
      });
    case 'CHANGE_AUTHENTICATED':
      return produce(state, draftState => {
        draftState.isAuthenticated = action.isAuthenticated;
      });
    case 'SET_LOGIN_DATA':
      return produce(state, draftState => {
        draftState.loginData = action.loginData;
      });
    case 'SET_LOGOUT':
      return produce(state, draftState => {
        draftState.loginData = {};
        draftState.isAuthenticated = false;
        logout();
      });
    default:
      return state;
  }
}

