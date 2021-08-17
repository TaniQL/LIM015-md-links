//const mdLinks = require('../');

const {pathAbs} = require("../src/api.js");
console.log(pathAbs);


describe('pathAbs', () => {
  it('is a function', () => {
    expect(typeof pathAbs).toBe('function');
  });

  // it ('Deberia retornar Johto para filterRegion', () => {
  //   const result = pathAbs('johto',datatest);
  //   expect (result[0].name).toEqual('celebi');
  // })

});
