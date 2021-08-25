#!/usr/bin/env node
const {api} = require("./mdlinks.js");
const {statistics, brokenLinks} = require("./stats.js");
const chalk = require('chalk');
const route = process.argv[2];
const validate = process.argv[3] === '--validate' || process.argv[4] === '--validate';
const stats = process.argv[3] === '--stats' || process.argv[4] === '--stats'; 
const help = chalk.magenta.bold(
	'--------------------------------- Options --------------------------------') +
	chalk.magenta(`
  mdlinks <path-to-file>
  mdlinks <path-to-file> --validate --stats
  mdlinks <path-to-file> --stats --validate
  mdlinks <path-to-file> --validate
  mdlinks <path-to-file> --stats`) +
	chalk.magenta.bold(`
  ---------------------------------------------------------------------------`);
/*-------Mandar al cli-----*/

if (process.argv.length === 3) {
  api(route,{validate:false})
  .then(result=> console.log(result))
  .catch(error=> console.log(error));
} else if (process.argv.length === 4) {
  if (stats){
    api(route,{validate:true})
    .then(result=> console.log(statistics(result)))
    .catch(error=> console.log(error));
  } else if(validate){
    api(route,{validate:true})
    .then(result=> console.log(result))
    .catch(error=> console.log(error));
  } else {
    console.log(help);
  }
} else if (process.argv.length === 5)  {
  if (validate && stats){
    api(route,{validate:true})
    .then(result=> console.log(statistics(result) + brokenLinks(result)))
    .catch(error=> console.log(error));
  } else {
    console.log(help);
  }
}