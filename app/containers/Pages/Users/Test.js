
let data = JSON.stringify({
    "_operation": "login",
    "username": "aguazzini@grifocreativo.com",
    "password": "12345678"
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://sixco.dnscode.com.ar/sixcocrm/modules/Mobile/api.php',
    headers: { 
      'Content-Type': 'application/json', 
      Authorization: 'Basic Yjk1YWQ5ODljY2Q0NDgyN2I3ZjdlNmEzMTExMjM0NGQ6NmY4YzQ3MDM1MTkxNDc5YThhY2U2NjQ4ZmZmMjRjYjU=', 
      'Access-Control-Allow-Origin':'*',
    },
    data : data
  };

function Login() {

    const submitForm = values => {
        values.preventDefault();
        console.log("Valores del formulario: ", values.target.password.value);
        let cuit = values.target.cuit.value;
        let pass = values.target.password.value;
        if (typeof cuit != '' && pass != '') {
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
        }
      };
}
