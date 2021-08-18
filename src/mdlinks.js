const path = require('path');
const resolve = require('path').resolve;
const fs = require('fs');
let route = process.argv[2];
const markdownLinkExtractor = require('markdown-link-extractor');
const fetch = require('node-fetch');

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

module.exports = {
    pathAbs,
    pathExists,
    pathDir,
    allMD,
    readMD
  };