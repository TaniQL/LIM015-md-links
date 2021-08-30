const {api} = require("../src/mdlinks.js");
const route = "/home/tania/LIM015-md-links/filesmd/test.md";
const routeFalse = "/home/tania/LIM015-md-links/filesmd/tst.md";

describe('api', () => {
  it('is a function', () => {
    expect(typeof api).toBe('function');
  });

  it ('Deberia retornar un Object', () => {
    const result = api(route);
    expect (typeof result).toBe('object');
  })

  it ('Deberia retornar un Object', () => {
    const result = api(route);
    expect (typeof result).toBe('object');
  })

  it ('Deberia retornar ERROR!!!', () => {
    const result = api(routeFalse);
    expect(result).rejects.toBe('False path');
  })

  it ('Deberia retornar ERROR!!!', () => {
    const result = api("/home/tania/LIM015-md-links/filesmd/dirempty");
    expect(result).rejects.toBe('No files');
  })

  it ('Deberia retornar ERROR!!!', () => {
    const result = api("/home/tania/LIM015-md-links/filesmd/testsrc/hola.md");
    expect(result).rejects.toBe('No links');
  })

  it ('Deberia retornar ERROR!!!', () => {
    const result = api("/home/tania/LIM015-md-links/filesmd/testsrc/files/hola.txt");
    expect(result).rejects.toBe('Sin archivos md');
  })
});

