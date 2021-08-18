const {api} = require("../src/api.js");

describe('api', () => {
  it('is a function', () => {
    expect(typeof api).toBe('function');
  });

  // it ('Deberia retornar Johto para filterRegion', () => {
  //   const result = pathAbs('johto',datatest);
  //   expect (result[0].name).toEqual('celebi');
  // })

});