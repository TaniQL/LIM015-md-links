//console.log(process.argv);
const path = require('path');
const resolve = require('path').resolve;
const fs = require('fs');
let route = process.argv[2];
const markdownLinkExtractor = require('markdown-link-extractor');

/*---------------Function Absolute or Relative Path--------------*/
const pathAbs = (filePath) => {
  if (path.isAbsolute(filePath)== true){
  return filePath;
} else{
  return filePath = resolve(filePath);
}
}
//Change route
route = pathAbs(route);

/*---------------Function Path exists or not--------------*/

const pathExists = (filePath) => {
  try{
    fs.accessSync(filePath);
    return true;
  } catch (err) {
    return false;
  }
}

/*---------------Function Path File--------------*/
const isFilePath = (filePath) => {
  const stats = fs.lstatSync(filePath);
  return stats.isFile();
}

/*---------------Extension .md--------------*/

const findmd =  (filePath) => {
  const ext = path.extname(filePath) === '.md';
  return ext;
}
/*---------------Recoursive Function Path Directory--------------*/
const pathDir = (filePath) => {
  let routeComplete = [];

  if (isFilePath(filePath)) {
    routeComplete.push(filePath);
  }
  else {
    const readDir = fs.readdirSync(filePath);
    readDir.forEach(file =>{
      const pathEachFile = path.join(filePath,file);
      routeComplete = routeComplete.concat(pathDir(pathEachFile));
    })
  }
  return routeComplete;
}

//que lea la extensión y que lo coloque en el array.
const allMD = (filePathArray) => {
  let filesmd = [];
  filesmd = filePathArray.filter((files)=> (findmd(files)))
  return filesmd;
}

/*-------Leer archivo------*/

const readMD = (filePathArray) => {
  let newArray = [];
  filePathArray.forEach(rutaMD => {
    const markdown = fs.readFileSync(rutaMD, {encoding: 'utf8'});
    const links = markdownLinkExtractor(markdown, true);
    const newProperties =links.map(propiedades => {
      return {href:propiedades.href, text:propiedades.text , path: rutaMD}
    })
    newArray = newArray.concat(newProperties);
  })
  return newArray;
}
//console.log(readMD(allMD(pathDir(route))));


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
          return console.log(arrayObjects[0].href);
        }
      }
    } else {
      return reject("ERROR!!!");
    }
  })
  return promise;
}

const link = api(route);

fetch(link)
  .then (response => response.status() )
  .then(data => {
    console.log(data)
  })
  .catch (err => console.log(err))
  /*-------Exportar módulos a mdlinks.js------*/
module.exports = {
  pathAbs,
  pathExists,
  isFilePath,
  pathDir,
  findmd,
  readMD
};
