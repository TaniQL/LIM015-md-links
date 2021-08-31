const {pathAbs, pathExists , pathDir, allMD, readMD, statusLinks} = require("../src/functions.js");
const route = "/home/tania/LIM015-md-links/filesmd/test.md";
const routeRel = "filesmd/test.md";
const routeDir = "/home/tania/LIM015-md-links/filesmd";
const routeFalse = "/home/tania/LIM015-md-links/filesmd/tst.md";
const arrayObjects = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    path: '/home/tania/LIM015-md-links/filesmd/test.md'
  }]

const arrayObjectsComplete =  [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    message: 'ok',
    path: '/home/tania/LIM015-md-links/filesmd/test.md',
    status: 200,
    text: 'Markdown'
  }]

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


describe('statusLinks', () => {
  it('is a function', () => {
    expect(typeof statusLinks).toBe('function');
  });
  
  test('fail', () => {
  const link = 
    {
      href: 'https://github.com/404',
      text: 'Node.js',
      path: '/home/tania/LIM015-md-links/filesmd/testcopy.md'
    }
  ;
  const validate  = 
    {
      href: 'https://github.com/404',
      text: 'Node.js',
      path: '/home/tania/LIM015-md-links/filesmd/testcopy.md',
      status: 404,
      message: 'fail'
    }
  ;
    fetch.mockImplementation(() => Promise.resolve({
      status: 404,
      statusText: 'fail',
    }));
    return statusLinks(link)
    .then((res) => {
      expect(res).toEqual(validate);
    });
  });

  it('ok', () => {
    const link = 
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        path: '/home/tania/LIM015-md-links/filesmd/test.md'
      }
    ;
    const validate  = 
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        message: 'ok',
        path: '/home/tania/LIM015-md-links/filesmd/test.md',
        status: 200,
        text: 'Markdown'
      }
    ;
      fetch.mockImplementation(() => Promise.resolve({
        status: 200,
        statusText: 'ok',
      }));
      return statusLinks(link)
      .then((res) => {
        expect(res).toEqual(validate);
      });
    });

    it('reject', () => {
      const arr = {
        href: 'https://hellotania.bye',
        text: 'Tania Rej',
        file: '/home/tania/LIM015-md-links/filesmd/fail.md'
      };
      const obj = {
        href: 'https://hellotania.bye',
        text: 'Tania Rej',
        file: '/home/tania/LIM015-md-links/filesmd/fail.md',
        status: 'Status not found',
        message: 'Status not found'
      };
      fetch.mockImplementation(() => Promise.reject({}));
      return statusLinks(arr)
      .catch((err) => {
        expect(err).toEqual(obj);
      });
    });
});

const {statistics, brokenLinks} = require("../src/stats.js");

describe('statistics', () => {
  it('is a function', () => {
    expect(typeof statistics).toBe('function');
  });
  it ('Deberia retornar string', () => {
    const result = statistics(arrayObjectsComplete);
    expect (typeof result).toEqual('string');
  })
});

describe('brokenLinks', () => {
  it('is a function', () => {
    expect(typeof brokenLinks).toBe('function');
  });
  it ('Deberia retornar string', () => {
    const result = brokenLinks(arrayObjects);
    expect (typeof result).toEqual('string');
  })
});
