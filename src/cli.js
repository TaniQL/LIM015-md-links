// Llamar a la api y pasar los parámetros.
//Realizar promesas para llaamr al argv.2;

const {api} = require("./mdlinks.js");
const {statistics, brokenLinks} = require("./stats.js");
let route = process.argv[2];
let validate = process.argv.includes('--validate');
let stats = process.argv.includes('--stats');
/*-------Mandar al cli-----*/

if (process.argv.length === 3) {
  api(route,{validate:false})
  .then(result=> {
    console.log(result)
  })
  .catch(error=> console.log(error));
} else{
  if (validate){
    api(route,{validate:true})
    .then(result=> {
    console.log(result)
    })
    .catch(error=> console.log(error));
  } else if (stats){
    api(route,{validate:true})
    .then(result=> {
    console.log(statistics(result) + brokenLinks(result))
    })
    .catch(error=> console.log(error));
//   } else if (validate,stats){
//     api(route,{validate:true})
//     .then(result=> {
//     console.log(statitstics(result) + brokenLinks(result))
//     })
//     .catch(error=> console.log(error));
}
}

// api(route,option)
//   .then(result=> {
//     console.log(result)
//   })
//   .catch(error=> console.log(error));
