import axios from 'axios';

const baseURL = (process.env.NODE_ENV === 'development' ? 'http://local.grifocrm.ar/modules/Mobile/api.php' : 'https://api.grifocreativo.com/api.php') + '';

const axiosClient = axios.create({
  baseURL,
  headers: {
    Authorization: 'Basic Yjk1YWQ5ODljY2Q0NDgyN2I3ZjdlNmEzMTExMjM0NGQ6NmY4YzQ3MDM1MTkxNDc5YThhY2U2NjQ4ZmZmMjRjYjU=',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://demooclientes.grifocreativo.com'
  }
});

axiosClient.interceptors.request.use(config =>
  config
);

axiosClient.interceptors.response.use((next) => Promise.resolve(next), (error) => {
  // Errors handling
  const { response, message } = error;

  // debugger
  if (!response && message) {
    console.error('(' + message + ') Hubo un error! Intente nuevamente');
    return Promise.reject(error);
  }
  const { data } = response;
  if (response.status == 401) {
    console.error('Ha expirado la sesión. Debe acceder nuevamente.');
    return Promise.reject(error);
  } if (response.status == 404) {
    console.error('Ha expirado la sesión. Debe acceder nuevamente.');
    return Promise.reject(error);
  } if (response.status == 500) {
    console.error('500----');
    return Promise.reject(error);
  }
  if (!data) {
    console.error('Hubo un error! Intente nuevamente');
    return Promise.reject(error);
  } if (typeof data.exceptionMessage !== 'undefined' && data.exceptionMessage.match(/102:/g)) {
    return Promise.reject(error);
  } if (data.error) {
    console.error(data.error);
    return Promise.reject(error);
  }
});


export default axiosClient;
