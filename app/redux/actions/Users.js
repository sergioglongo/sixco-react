/**
 * setea autenticacion de usuario
 * @param {*} isAuthenticated 
 * @returns 
 */
export const changeUserAuthenticatedAction = isAuthenticated => ({
    type: 'CHANGE_AUTHENTICATED',
    isAuthenticated
  });
  export const setAccessTokenAction = AccessToken => ({
    type: 'CHANGE_ACCESS_TOKEN',
    AccessToken
  });
  export const setLoginDataAction = loginData => ({
    type: 'SET_LOGIN_DATA',
    loginData
  });
  export const setLogoutDataAction = logoutData => ({
    type: 'SET_LOGOUT',
    logoutData
  });
  export const setClientDataAction = clientData => ({
    type: 'SET_CLIENT_DATA',
    clientData
  });