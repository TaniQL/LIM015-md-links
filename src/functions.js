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
//console.log(pathDir(route).length);
//que lea la extensión y que lo coloque en el array.
const allMD = (filePathArray) => {
  let filesmd = [];
  filesmd = filePathArray.filter((files)=> (findmd(files)))
  return filesmd;
}

/*----------------Leer archivo------------*/

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

/*-------Extraer links para verificar su status------*/



// const validateLinks = (data) => 
//     data.map((obj) => {
//     if (obj.href == '-') {
//         return {
//             file: obj.file,
//             href: obj.href,
//             text: obj.text,
//             status: '-',
//             message: '-'
//         }
//     } else {
//         return fetch(obj.href)
//             .then((res) => {
//                 return {
//                     file: obj.file,
//                     href: obj.href,
//                     text: obj.text,
//                     status: res.status,
//                     message: res.statusText
//                 }
//             })
//             .catch((error) => {
//                 return {
//                     file: obj.file,
//                     href: obj.href,
//                     text: obj.text,
//                     status: 500,
//                     message: 'FAIL',
//                 }
//             });
//     }

// });





















module.exports = {
    pathAbs,
    pathExists,
    pathDir,
    allMD,
    readMD
  };