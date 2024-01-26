import axiosClient from './AxiosClient';

// export async function access_token() {
//     let atdata = `_operation=access_token&grant_type=client_credentials&client_id=censys&client_secret=c25867ddaed4801f6840d81a9b078af47dfeeaa1c18e12cb300022faa7ef5f28`
//     return axiosClient
//             .post('', atdata)
//             .then(response => {
//                 if (response) {
//                     let accessTokenPdT = response.data
//                     if (accessTokenPdT) {
//                         // store.set('accessTokenPdT', accessTokenPdT)
//                     }
//                     return accessTokenPdT
//                 }
//                 return false
//             })
//             .catch(err => console.log(err))
// }

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

export async function consultaCiudadano(sessionid, record) {
  const params = JSON.stringify({
    _operation: 'fetchRecord',
    record: '11x' + record,
    _session: sessionid
  });
  return axiosClient
    .post('', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result.record;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}

export async function registroCiudadano(ciudadano) {
  const params = JSON.stringify({
    _operation: 'saveRecord',
    module: 'Accounts',
    values: ciudadano,
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

export async function editarPerfilCiudadano(session, record, ciudadano) {
  const params = JSON.stringify({
    _operation: 'saveRecord',
    record,
    module: 'Accounts',
    values: ciudadano,
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

export async function getConsultasSinLeer(record) {
  const params = JSON.stringify({
    _operation: 'PortalCustomOperations',
    mode: 'getConsultasSinLeer',
    id: record,
  });
  return axiosClient
    .post('', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}

export async function getListadoConsultas(session, record, filtro) {
  const params = JSON.stringify({
    _operation: 'query',
    query: 'SELECT * FROM HelpDesk where parent_id = 11x' + record + ' ' + filtro + ' ORDERBY createdtime DESC ',
    _session: session,
  });
  return axiosClient
    .post('', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}

export async function getDetalleEntidad(session, record) {
  const params = JSON.stringify({
    _operation: 'fetchRecord',
    record,
    _session: session
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

export async function getListadoComentarios(session, record) {
  const params = JSON.stringify({
    _operation: 'query',
    query: 'SELECT * FROM ModComments where related_to = ' + record + ' ORDERBY createdtime DESC ',
    _session: session,
  });
  return axiosClient
    .post('', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}

export async function AddRecordComment(session, values) {
  const params = JSON.stringify({
    _operation: 'addRecordComment',
    _session: session,
    values,
    module: 'ModComments',
  });
  return axiosClient
    .post('', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}

export async function getListadoDependenciasPorAsignado(session, record) {
  const params = JSON.stringify({
    _operation: 'query',
    query: 'SELECT * FROM Dependencias where assigned_user_id = ' + record + ' and activo = 1',
    _session: session,
  });
  return axiosClient
    .post('', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}

export async function getListadoTramitesPorDependecia(session, record) {
  const params = JSON.stringify({
    _operation: 'query',
    query: 'SELECT * FROM Tramites where dependenciasid = ' + record,
    _session: session,
  });
  return axiosClient
    .post('', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}

export async function getListadoTramitesActivos(session) {
  const params = JSON.stringify({
    _operation: 'query',
    query: 'SELECT * FROM Tramites where activo = 1 Order by tramite',
    _session: session,
  });
  return axiosClient
    .post('', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}

export async function getListadoTiposDeConsulta(session) {
  const params = JSON.stringify({
    _operation: 'query',
    query: 'SELECT * FROM TipoConsultas order by consulta asc',
    _session: session,
  });
  return axiosClient
    .post('', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}

export async function registrarConsulta(session, consulta) {
  const params = JSON.stringify({
    _operation: 'saveRecord',
    module: 'HelpDesk',
    values: consulta,
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
 * FACTURAS ELECTRONICAS
 */


export async function getListadoFacturas(session, id) {
  const params = JSON.stringify({
    _operation: 'PortalCustomOperations',
    mode: 'consultarFacturas',
    id,
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

export async function verificarAdhesion(_session, id, tipo_servicio, codigo_ref, factura_num, factura_num_ant) {
  const params = JSON.stringify({
    _operation: 'PortalCustomOperations',
    mode: 'verificarAdhesion',
    id,
    tipo_servicio,
    codigo_ref,
    factura_num,
    factura_num_ant,
    _session,
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

export async function verificarDesadhesion(session, record, referencia) {
  const params = JSON.stringify({
    _operation: 'PortalCustomOperations',
    mode: 'verificarDesadhesion',
    id: record,
    codigo_ref: referencia,
    _session: session,
  });
  return axiosClient
    .post('', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}

export async function getPickListValues(modulename, field) {
  const params = JSON.stringify({
    _operation: 'PortalCustomOperations',
    mode: 'getPickListValues',
    field,
    module: modulename,
  });
  return axiosClient
    .post('', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}

/**
 * TURNOS
 */

export async function getTurnosDiaTramite(session, fecha, tramite) {
  const params = JSON.stringify({
    _operation: 'PortalCustomOperations',
    mode: 'getTurnosDisponibles',
    fecha,
    tramite,
    _session: session,
  });
  return axiosClient
    .post('', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}

export async function setTurnos(session, turno) {
  const params = JSON.stringify({
    _operation: 'PortalCustomOperations',
    mode: 'setTurnos',
    id: turno.contactid,
    estadoturno: turno.estadoturno,
    fecha: turno.fecha,
    hora: turno.hora,
    tramite: turno.tramite,
    _session: session,
  });
  return axiosClient
    .post('', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}

export async function getListadoTurnos(session, record) {
  const params = JSON.stringify({
    _operation: 'query',
    query: 'SELECT * FROM Turnos where accountid = ' + record + ' ORDER BY createdtime DESC',
    _session: session,
  });
  return axiosClient
    .post('', params)
    .then(response => {
      console.log(response);

      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}

export async function getTurno(session, record) {
  const params = JSON.stringify({
    _operation: 'query',
    query: 'SELECT * FROM Turnos where id = ' + record,
    _session: session,
  });
  return axiosClient
    .post('', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}

export async function editarRegistro(session, record, module, values) {
  const params = JSON.stringify({
    _operation: 'saveRecord',
    record,
    module,
    values,
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

export async function borrarRegistro(session, record) {
  const params = JSON.stringify({
    _operation: 'deleteRecords',
    record,
    _session: session,
  });
  return axiosClient
    .post('', params)
    .then(response => {
      if (typeof response.data !== 'undefined' && response.data.success == true) {
        return response.data.result;
      }
      return response.data;
    })
    .catch(err => console.log(err));
}
