#!/usr/bin/env node
const {mdlinks} = require("./mdlinks.js");
const {statistics, brokenLinks} = require("./stats.js");
const chalk = require('chalk');
const route = process.argv[2];
const validate = process.argv[3] === '--validate' || process.argv[4] === '--validate';
const stats = process.argv[3] === '--stats' || process.argv[4] === '--stats'; 
const help = chalk.magenta.bold(
	'--------------------------------- Options --------------------------------------------------------------') +
	chalk.magenta(`
  mdlinks <path-to-file>                     : Shows 'href', 'path' & 'title'
  mdlinks <path-to-file> --validate --stats  : Shows statistics 'broken','total' & 'unique'
  mdlinks <path-to-file> --stats --validate  : Shows statistics 'broken','total' & 'unique'
  mdlinks <path-to-file> --validate          : Shows 'href', 'path' & 'title'
  mdlinks <path-to-file> --stats)            : Shows 'href', 'path', 'title', 'status' & 'message status'` +
	chalk.magenta.bold(`
  --------------------------------------------------------------------------------------------------------`));

/*-------Mandar al cli-----*/

if (process.argv.length === 3) {
  mdlinks(route,{validate:false})
  .then(result=> console.log(result))
  .catch(error=> console.log(error));
} else if (process.argv.length === 4) {
  if (stats){
    mdlinks(route,{validate:true})
    .then(result=> console.log(statistics(result)))
    .catch(error=> console.log(error));
  } else if(validate){
    mdlinks(route,{validate:true})
    .then(result=> console.log(result))
    .catch(error=> console.log(error));
  } else {
    console.log(help);
  }
} else if (process.argv.length === 5)  {
  if (validate && stats){
    mdlinks(route,{validate:true})
    .then(result=> console.log(statistics(result) + brokenLinks(result)))
    .catch(error=> console.log(error));
  } else {
    console.log(help);
  }
}else {
  console.log(help);
}