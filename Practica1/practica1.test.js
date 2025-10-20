// 1) uso funcion arrow anonima sin parentesis ni llaves
const cuadrado_de = n => n * n;

// 2) uso lo q seria el closure
const creaResta = x => y => y - x;

// 3) 
const printString = n => "Execution Number: " + n;
const repeat = (f, n) => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(f(i));
  }
  return arr;
};

// 5)
const howManyTimesAppear = (arr, num) => {
  return arr.reduce((ac, v) => {
    if (v === num) {
      return ac + 1;
    } else {
      return ac;
    }
  }, 0);
};

test("ejercicio 1", () => {
  expect(cuadrado_de(2)).toBe(4);
  expect(cuadrado_de(3)).toBe(9);
  expect(cuadrado_de(4)).toBe(16);
});

test("ejercicio 2", () => {
  const resta2 = creaResta(2);

  expect(resta2(2)).toBe(0);
  expect(resta2(3)).toBe(1);
  expect(resta2(10)).toBe(8);
});

test("ejercicio 3", () => {
  const lista = repeat(printString, 4);

  expect(lista).toEqual([
    "Execution Number: 1",
    "Execution Number: 2",
    "Execution Number: 3",
    "Execution Number: 4",
  ]);
});

describe("ejercicio 4", () => {
  const pilotos = [
    "Verstappen",
    "Hamilton",
    "Russell",
    "Sainz",
    "Perez",
    "Leclerc",
    "Norris",
    "Alonso",
    "Ocon",
    "Vettel",
  ];



  
  test("inciso a", () => {
    const ejercicioA = nombre => pilotos.indexOf(nombre) + 1;
    expect(ejercicioA("Russell")).toEqual(3);
  });

  test("inciso b", () => {
    const ejercicioB = pos => pilotos[pos - 1];
    expect(ejercicioB(6)).toEqual("Leclerc");
  });

  test("inciso c", () => {
    const ejercicioC = letra => pilotos.filter(p => p.toLowerCase().includes(letra.toLowerCase()));

    expect(ejercicioC("a")).toEqual([
      "Verstappen",
      "Hamilton",
      "Sainz",
      "Alonso",
    ]);
  });

  test("inciso d", () => {
    const ejercicioD = lista => lista.map(n => pilotos.includes(n));
    expect(ejercicioD(["Russell", "Bottas", "Perez"])).toEqual([
      true,
      false,
      true,
    ]);
  });
  test("inciso e", () => {
    const corregirPilotos = arr => {
      let nuevo = arr.slice();
      let aux = nuevo[1];
      nuevo[1] = nuevo[4];
      nuevo[4] = aux;
      return nuevo;
    };

    expect(corregirPilotos(pilotos)).toEqual([
      "Verstappen",
      "Perez",
      "Russell",
      "Sainz",
      "Hamilton",
      "Leclerc",
      "Norris",
      "Alonso",
      "Ocon",
      "Vettel",
    ]);
  });
});

test("ejercicio 5", () => {
  const array = [3, 6, 9, 3, 1, 5, 2, 10];

  expect(howManyTimesAppear(array, 3)).toEqual(2);
  expect(howManyTimesAppear(array, 5)).toEqual(1);
  expect(howManyTimesAppear(array, 7)).toEqual(0);
});

test("ejercicio 6", () => {
  const array1 = [4, 8, 2, 13, 20];
  const array2 = [4, 8, 2, -5, 20];
  const ejercicio6 = arr => {
    let min = arr.reduce((m, v) => {
      if (v < m) {
        return v;
      } else {
        return m;
      }
    }, arr[0]);

    return arr.map(v => v + min);
  };

  expect(ejercicio6(array1)).toEqual([6, 10, 4, 15, 22]);
  expect(ejercicio6(array2)).toEqual([-1, 3, -3, -10, 15]);
});

describe("ejercicio 7", () => {
  test("inciso a", () => {
    const personas = [
      "Lionel Messi",
      "Rodrigo Depaul",
      "Emiliano Martinez",
      "Angel Dimaria",
      "Soledad Jaimes",
      "Yamila Rodriguez",
      "Florencia Bonsegundo",
    ];

    //resolucion
    personas.sort((a, b) => a.localeCompare(b));
    //fin resolucion

    expect(personas).toEqual([
      "Angel Dimaria",
      "Emiliano Martinez",
      "Florencia Bonsegundo",
      "Lionel Messi",
      "Rodrigo Depaul",
      "Soledad Jaimes",
      "Yamila Rodriguez",
    ]);
  });

  test("inciso b", () => {
    const personas = [
      "Lionel Messi",
      "Rodrigo Depaul",
      "Emiliano Martinez",
      "Angel Dimaria",
      "Soledad Jaimes",
      "Yamila Rodriguez",
      "Florencia Bonsegundo",
    ];
    const ejercicioB = arr =>
      arr.map(p => {
        let partes = p.split(" ");
        return partes[1] + " " + partes[0];
      });
    expect(ejercicioB(personas)).toEqual([
      "Messi Lionel",
      "Depaul Rodrigo",
      "Martinez Emiliano",
      "Dimaria Angel",
      "Jaimes Soledad",
      "Rodriguez Yamila",
      "Bonsegundo Florencia",
    ]);
  });

  test("inciso c", () => {
    const personas = [
      "Messi Lionel",
      "Depaul Rodrigo",
      "Martinez Emiliano",
      "Dimaria Angel",
      "Jaimes Soledad",
      "Rodriguez Yamila",
      "Bonsegundo Florencia",
    ];

    //resolucion
    personas.sort((a, b) => {
      let aP = a.split(" ");
      let bP = b.split(" ");
      let cmp = aP[0].localeCompare(bP[0]);
      if (cmp === 0) {
        return aP[1].localeCompare(bP[1]);
      }
      return cmp;
    });
    //fin resolucion

    expect(personas).toEqual([
      "Bonsegundo Florencia",
      "Depaul Rodrigo",
      "Dimaria Angel",
      "Jaimes Soledad",
      "Martinez Emiliano",
      "Messi Lionel",
      "Rodriguez Yamila",
    ]);
  });
});