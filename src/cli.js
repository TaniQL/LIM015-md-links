// Llamar a la api y pasar los parámetros.
//Realizar promesas para llaamr al argv.2;

const {api} = require("../src/api.js");
let route = process.argv[2];

const validateLinks = (data) => data.map((obj) => {
    if (obj.href == '-') {
        return {
            file: obj.file,
            href: obj.href,
            text: obj.text,
            status: '-',
            message: '-'
        }
    } else {
        return fetch(obj.href)
            .then((res) => {
                return {
                    file: obj.file,
                    href: obj.href,
                    text: obj.text,
                    status: res.status,
                    message: res.statusText
                }
            })
            .catch((error) => {
                return {
                    file: obj.file,
                    href: obj.href,
                    text: obj.text,
                    status: 500,
                    message: 'FAIL',
                }
            });
    }

});

console.log(api(route));