const {
  pathAbs,
  pathExists,
  pathDir,
  allMD,
  readMD,
  statusLinks } = require('./functions.js');

const mdlinks = (pathFile, option = {validate:false}) => {
  let promise = new Promise ((resolve,reject) => {
    const abs = pathAbs(pathFile);
    if (pathExists(abs)){
      const arrayFiles = pathDir(abs);
      if(arrayFiles == 0){
        return reject("No files");
      } else {
        const arrayMD = allMD(arrayFiles);
        if (arrayMD.length === 0){
          return reject("Sin archivos md");
        } else {
          const arrayObjects =readMD(arrayMD);
          if (arrayObjects.length !== 0){
            if (option.validate == true){
              const newPromise =arrayObjects.map(ele => statusLinks(ele));
              return resolve(Promise.all(newPromise))    
            } else if (option.validate == false){
              return resolve(arrayObjects);
            } 
          } else {
            return reject("No links");
          }
        }
      }
    } else {
      return reject("False path");
    }
  })
  return promise;
}

/*-------Exportar módulos a mdlinks.js------*/
module.exports = {
  mdlinks
};