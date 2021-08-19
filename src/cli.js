// Llamar a la api y pasar los parámetros.
//Realizar promesas para llaamr al argv.2;

const {api} = require("./mdlinks.js");
/*-------Mandar al cli-----*/
api(route)
  .then(result=> {
    console.log(result)
  })
  .catch(error=> console.log(error));
