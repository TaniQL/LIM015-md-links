const {pathAbs, pathExists , pathDir, allMD, readMD} = require("../src/functions.js");
const route = "/home/tania/LIM015-md-links/filesmd/test.md";
const routeRel = "filesmd/test.md";
const routeDir = "/home/tania/LIM015-md-links/filesmd";
const routeFalse = "/home/tania/LIM015-md-links/filesmd/tst.md";

describe('pathAbs', () => {
  it('is a function', () => {
    expect(typeof pathAbs).toBe('function');
  });

  it ('Deberia retornar ruta absoluta', () => {
    const result = pathAbs(route);
    expect (result).toEqual('/home/tania/LIM015-md-links/filesmd/test.md');
  })
  it ('Deberia retornar ruta absoluta, incluso si es relativa', () => {
    const result = pathAbs(routeRel);
    expect (result).toEqual('/home/tania/LIM015-md-links/filesmd/test.md');
  })

});

describe('pathExists', () => {
  it('is a function', () => {
    expect(typeof pathExists).toBe('function');
  });

  it ('Deberia retornar true', () => {
    const result = pathExists(route);
    expect (result).toEqual(true);
  })

  it ('Deberia retornar false', () => {
    const result = pathExists(routeFalse);
    expect (result).toEqual(false);
  })

});


describe('pathDir', () => {
  it('is a function', () => {
    expect(typeof pathDir).toBe('function');
  });

  it ('Deberia retornar object', () => {
    const result = pathDir(route);
    expect (typeof result).toEqual('object');
  })

  it ('Deberia retornar object', () => {
    const result = pathDir(routeDir);
    expect (typeof result).toEqual('object');
  })
});

describe('allMD', () => {
  it('is a function', () => {
    expect(typeof allMD).toBe('function');
  });
});

describe('readMD', () => {
  it('is a function', () => {
    expect(typeof readMD).toBe('function');
  });

});


const {api} = require("../src/mdlinks.js");

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


const {statistics, brokenLinks} = require("../src/stats.js");

describe('statistics', () => {
  it('is a function', () => {
    expect(typeof statistics).toBe('function');
  });
});

describe('brokenLinks', () => {
  it('is a function', () => {
    expect(typeof brokenLinks).toBe('function');
  });

});
