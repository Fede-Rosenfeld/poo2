const factorial=require("./ej1");
//const factorial=require("./ej1v2")
const convertir=require("./ej2")
ej1=function(){
    test("0! = 1",()=>{
    expect(factorial(0)).toBe(1);
    });
    test("1! = 1",()=>{
        expect(factorial(1)).toBe(1);
    });
    test("2! = 2",()=>{
        expect(factorial(2)).toBe(2);
    });
    test("3! = 6",()=>{
        expect(factorial(3)).toBe(6);
    });
    test("4! = 24",()=>{
        expect(factorial(4)).toBe(24);
    });
    test("5! = 120",()=>{
        expect(factorial(5)).toBe(120);
    });
    test("6! = 720",()=>{
        expect(factorial(6)).toBe(720);
    });
}

ej2=function(){
    test("1 = I",()=>{
        expect(convertir(1)).toBe('I');
    });
    test("2 = II",()=>{
        expect(convertir(2)).toBe('II');
    });
    test("3 = II",()=>{
        expect(convertir(3)).toBe('III');
    });
    test("4 = IV",()=>{
        expect(convertir(4)).toBe('IV');
    });
    test("5 = V",()=>{
        expect(convertir(5)).toBe('V');
    });
    test("6 = VI",()=>{
        expect(convertir(6)).toBe('VI');
    });
    test("7 = VII",()=>{
        expect(convertir(7)).toBe('VII');
    });
    test("8 = VIII",()=>{
        expect(convertir(8)).toBe('VIII');
    });
    test("9 = IX",()=>{
        expect(convertir(9)).toBe('IX');
    });
    test("10 = X",()=>{
        expect(convertir(10)).toBe('X');
    });
    test("11 = XI",()=>{
        expect(convertir(11)).toBe('XI');
    });
    test("12 = XII",()=>{
        expect(convertir(12)).toBe('XII');
    });
    test("13 = XIII",()=>{
        expect(convertir(13)).toBe('XIII');
    });
    test("14 = XIV",()=>{
        expect(convertir(14)).toBe('XIV');
    });
    test("15 = XV",()=>{
        expect(convertir(15)).toBe('XV');
    });
    test("16 = XVI",()=>{
        expect(convertir(16)).toBe('XVI');
    });
    test("17 = XVII",()=>{
        expect(convertir(17)).toBe('XVII');
    });
    test("18 = XVIII",()=>{
        expect(convertir(18)).toBe('XVIII');
    });
    test("19 = XIX",()=>{
        expect(convertir(19)).toBe('XIX');
    });
    test("20 = XX",()=>{
        expect(convertir(20)).toBe('XX');
    });
    test("21 = XXI",()=>{
        expect(convertir(21)).toBe('XXI');
    });
    test("39 = XXXIX",()=>{
        expect(convertir(39)).toBe('XXXIX');
    });
    test("43 = XLIII",()=>{
        expect(convertir(43)).toBe('XLIII');
    });
    test("44 = XLIV",()=>{
        expect(convertir(44)).toBe('XLIV');
    });
    test("45 = XLV",()=>{
        expect(convertir(45)).toBe('XLV');
    });
    test("47 = XLVII",()=>{
        expect(convertir(47)).toBe('XLVII');
    });
    test("48 = XLVIII",()=>{
        expect(convertir(48)).toBe('XLVIII');
    });
    test("49 = XLIX",()=>{
        expect(convertir(49)).toBe('XLIX');
    });
    test("50 = L",()=>{
        expect(convertir(50)).toBe('L');
    });
    test("54 = LIV",()=>{
        expect(convertir(54)).toBe('LIV');
    });
    test("98 = XCVIII",()=>{
        expect(convertir(98)).toBe('XCVIII');
    });
    test("99 = XCIX",()=>{
        expect(convertir(99)).toBe('XCIX');
    });
    test("1150 = MCL",()=>{
        expect(convertir(1150)).toBe('MCL');
    });
    test("2021 = MMXXI",()=>{
        expect(convertir(2021)).toBe('MMXXI');
    });
    test("1751 = MDCCLI",()=>{
        expect(convertir(1751)).toBe('MDCCLI');
    });
    test("3999 = MMMCMXCIX",()=>{
        expect(convertir(3999)).toBe('MMMCMXCIX');
    });
}


//ej1();
ej2();