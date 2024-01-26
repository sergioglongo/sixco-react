import axios from 'axios';

const baseURL = (process.env.NODE_ENV === 'development' ? 'https://gestionsixco.net.ar/' : 'https://gestionsixco.net.ar/') + '';

const axiosClient = axios.create({
  baseURL,
  auth: {
    username: 'b95ad989ccd44827b7f7e6a31112344d',
    password: '6f8c47035191479a8ace6648fff24cb5'
  },
  headers: { 
    'Content-Type': 'application/json', 
  },
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
