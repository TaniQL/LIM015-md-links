const {
  pathAbs,
  pathExists,
  pathDir,
  allMD,
  readMD } = require('./mdlinks.js');
let route = process.argv[2];

const api = (pathFile) => {
  let promise = new Promise ((resolve,reject) => {
    const abs = pathAbs(pathFile);
    if (pathExists(abs)){
      const arrayFiles = pathDir(abs);
      if(arrayFiles === 0){
        return reject("ERROR!!!");
      } else {
        const arrayMD = allMD(arrayFiles);
        if (arrayMD.length === 0){
          return reject("ERROR!!!");
        } else if (arrayMD !== 0){
          const arrayObjects =readMD(arrayMD);
          return resolve(arrayObjects);
        }
      }
    } else {
      return reject("ERROR!!!");
    }
  })
  return promise;
}

api(route)
  .then(result=> {
    console.log(result)
  })
  .catch(error=> console.log(error));


/*-------Exportar módulos a mdlinks.js------*/
module.exports = {
  api
};