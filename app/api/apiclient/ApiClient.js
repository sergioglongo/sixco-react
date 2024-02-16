import axiosClient from './AxiosClient';

/*
  LOGIN / REGISTER
*/

export async function login(username, password) {
  const params = JSON.stringify({
    _operation: 'login',
    username,
    password
  });
  return axiosClient
    .post('sixcocrm/modules/Mobile/api.php', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result.login;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}

export async function logout() {
  const params = JSON.stringify({
    _operation: 'logout',
  });
  return axiosClient
    .post('sixcocrm/modules/Mobile/api.php', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result.logout;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}

export async function changePassword(session, record, password) {
  const params = JSON.stringify({
    _operation: 'PortalCustomOperations',
    mode: 'changePassword',
    id: record,
    password,
    _session: session,
  });
  return axiosClient
    .post('', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}

/**
 * CHOFERES
 */

export async function getPickListValues(modulename, field) {
  const params = JSON.stringify({
    _operation: 'PortalCustomOperations',
    mode: 'getPickListValues',
    field,
    module: modulename,
  });
  return axiosClient
    .post('sixcocrm/modules/Mobile/api.php', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}

export async function getProvincias(modulename, field) {
  const params = JSON.stringify({
    _operation: "PortalCustomOperations",
    mode: "getPickListValues",
    module: "ciudades",
    field: "geo_provincia"
  });
  return axiosClient
    .post('sixcocrm/modules/Mobile/api.php', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}
export async function getCiudades(ciudad, field) {
  const params = JSON.stringify({
    "_operation": "PortalCustomOperations",
    "mode": "getCiudades",
    // "filter": `geo_provincia='${ciudad}'`,
    "order": "geo_provincia ASC, denominacion ASC"
  });
  return axiosClient
    .post('sixcocrm/modules/Mobile/api.php', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}


export async function register(data) {
  const params = JSON.stringify({
    "_operation":"saveRecord",
    "module":"Contacts",
    "record":"0",
    "values":data
  });
  return axiosClient
    .post('sixcocrm/modules/Mobile/api.php', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}

export async function forgotPassword(email) {

  const params = JSON.stringify({
    "_operation":"PortalCustomOperations",
    "module":"sendMailForPassword",
    "email":email,
  });
  {
  }
  return axiosClient
    .post('sixcocrm/modules/Mobile/api.php', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}

export async function listContacts(data) {
  const params = JSON.stringify({
    "_operation":"PortalCustomOperations",
    "mode":"ListContacts",
    "id":data.userid,
    "_session":data.sessionid
  });
  console.log("data en listContacts", data, params);
  return axiosClient
    .post('sixcocrm/modules/Mobile/api.php', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}

export async function getProfileDetail(data) {
  const params = JSON.stringify({
    "_operation":"PortalCustomOperations",
    "mode":"DetailProfile",
    "id":data.userid,
    "_session":data.sessionid
  });
  return axiosClient
    .post('sixcocrm/modules/Mobile/api.php', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result.records;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}