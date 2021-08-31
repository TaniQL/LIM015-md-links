const {api} = require("../src/mdlinks.js");
const route = "/home/tania/LIM015-md-links/filesmd/test.md";
const routeFalse = "/home/tania/LIM015-md-links/filesmd/tst.md";
const respuesta = [{href: 'https://github.com/404',
text: 'Node.js',
path: '/home/tania/LIM015-md-links/filesmd/testcopy.md',
status: 404,
message: 'fail'}];

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

beforeEach(() => {
  fetch.resetMocks();
});

it('Return response', () => {
  fetch.mockResponseOnce(JSON.stringify({
    result: [
      {
        href: 'https://github.com/404',
        text: 'Node.js',
        path: '/home/tania/LIM015-md-links/filesmd/testcopy.md',
        status: 404,
        message: 'fail'
      }],
  }));
  const res = api('/home/tania/LIM015-md-links/filesmd/testcopy.md',{validate:true})
  .then((res)=>{
    expect(res).toEqual(respuesta);
    }) 
  //expect(res).toEqual(respuesta);
  //expect(fetch.mock.calls.length).toEqual(1);
});