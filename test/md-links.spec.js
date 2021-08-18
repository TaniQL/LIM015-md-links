const {pathAbs, pathExists , pathDir, allMD} = require("../src/mdlinks.js");

describe('pathAbs', () => {
  it('is a function', () => {
    expect(typeof pathAbs).toBe('function');
  });

  // it ('Deberia retornar Johto para filterRegion', () => {
  //   const result = pathAbs('johto',datatest);
  //   expect (result[0].name).toEqual('celebi');
  // })

});

describe('pathExists', () => {
  it('is a function', () => {
    expect(typeof pathExists).toBe('function');
  });

  // it ('Deberia retornar Johto para filterRegion', () => {
  //   const result = pathAbs('johto',datatest);
  //   expect (result[0].name).toEqual('celebi');
  // })

});


describe('pathDir', () => {
  it('is a function', () => {
    expect(typeof pathDir).toBe('function');
  });

  // it ('Deberia retornar Johto para filterRegion', () => {
  //   const result = pathAbs('johto',datatest);
  //   expect (result[0].name).toEqual('celebi');
  // })

});

describe('allMD', () => {
  it('is a function', () => {
    expect(typeof allMD).toBe('function');
  });

  // it ('Deberia retornar Johto para filterRegion', () => {
  //   const result = pathAbs('johto',datatest);
  //   expect (result[0].name).toEqual('celebi');
  // })

});