


// objeto calendario
    // 7 tipos de francos, o mejor dicho 7 fechas
    // este calendario esta asociado a un empleado



// objeto empleado
    

// objeto franco
function Franco(){
    Franco.prototype.esFranco = function(fecha){
        throw new Error("Debe implementar el metodo esFranco");
    }
  
}

// 1er Franco
function FrancoDiaEspecifico(dia, mes, anio){
    this.dia = dia;
    this.mes = mes;
    this.anio = anio;
}
FrancoDiaEspecifico.prototype = Object.create(Franco.prototype);
FrancoDiaEspecifico.prototype.constructor = FrancoDiaEspecifico;
FrancoDiaEspecifico.prototype.esFranco = function(fecha){
    return fracha.getDate() === this.dia &&
              fecha.getMonth() === this.mes &&
                fecha.getFullYear() === this.anio;
}

// 2do Franco
function FrancoRecurrente(dia, mes){
    this.dia = dia;
    this.mes = mes;
}
FrancoRecurrente.prototype = Object.create(Franco.prototype);
FrancoRecurrente.prototype.constructor = FrancoRecurrente;
FrancoRecurrente.prototype.esFranco = function(fecha){
    return fecha.getDate() === this.dia &&
              fecha.getMonth()  === this.mes;
}


// 3er Franco
function FrancoDiaSemana(diaSemana){
    this.diaSemana = diaSemana; // 0 a 6 (domingo a sabado)
}
FrancoDiaSemana.prototype = Object.create(Franco.prototype);
FrancoDiaSemana.prototype.constructor = FrancoDiaSemana;
FrancoDiaSemana.prototype.esFranco = function(fecha){
    return fecha.getDay() === this.diaSemana;
}

// 4to Franco
function FrancoDiaSemanaAnio(diaSemana, anio){
    this.diaSemana = diaSemana;
    this.anio = anio;

}
FrancoDiaSemanaAnio.prototype = Object.create(Franco.prototype);
FrancoDiaSemanaAnio.prototype.constructor = FrancoDiaSemanaAnio;
FrancoDiaSemanaAnio.prototype.esFranco = function(fecha){
    return fecha.getDay() === this.diaSemana &&
              fecha.getFullYear() === this.anio;
}

// 5to Franco
function FrancoDiaSemanaMes(diaSemana, mes){
    this.diaSemana = diaSemana;
    this.mes = mes;
}
FrancoDiaSemanaMes.prototype = Object.create(Franco.prototype);
FrancoDiaSemanaMes.prototype.constructor = FrancoDiaSemanaMes;
FrancoDiaSemanaMes.prototype.esFranco = function(fecha){
    return fecha.getDay() === this.diaSemana &&
              fecha.getMonth()  === this.mes;
}

// 6to Franco
function FrancoDiaCadaMes(dia, anio){
    this.dia = dia;
    this.anio = anio;
}
FrancoDiaCadaMes.prototype = Object.create(Franco.prototype);
FrancoDiaCadaMes.prototype.constructor = FrancoDiaCadaMes; 
FrancoDiaCadaMes.prototype.esFranco = function(fecha){
    return fecha.getDate() === this.dia &&
              fecha.getFullYear() === this.anio;
}

// 7mo Franco
function FrancoMesCompleto(mes, anio){
    this.mes = mes;
    this.anio = anio;
}
FrancoMesCompleto.prototype = Object.create(Franco.prototype);
FrancoMesCompleto.prototype.constructor = FrancoMesCompleto;
FrancoMesCompleto.prototype.esFranco = function(fecha){
    return fecha.getMonth()  === this.mes &&
              fecha.getFullYear() === this.anio;
}

// PROTOTIPO EMPLEADO

function Empleado(nombre){
    this.nombre = nombre;
    this.francos = []; // array de objetos franco
}

Empleado.prototype.agregarFranco = function(franco){
    this.francos.push(franco);
}

Empleado.prototype.tieneFranco = function(fecha){
    // el some devuelve true si al menos uno de los elementos del array cumple la condicion
    return this.francos.some(franco => franco.esFranco(fecha));
}   


function d(y, m, d) {           // m: 0=enero, 8=septiembre, etc.
  return new Date(y, m, d, 12); // 12hs local para evitar cambios por DST
}


var francisco = new Empleado("Francisco");


// Todos los martes de septiembre (de cualquier año)
francisco.agregarFranco(new FrancoDiaSemanaMes(2, 8)); // 2=Mar, 8=Septiembre

// Pruebas:
var mar_3_sep_2024 = d(2024, 8, 3);  // 3/9/2024 (martes)
var mie_4_sep_2024 = d(2024, 8, 4);  // 4/9/2024 (miércoles)
var mar_1_oct_2024 = d(2024, 9, 1);  // 1/10/2024 (martes) -> NO es septiembre

console.log("Francisco 03/09/2024:", francisco.tieneFranco(mar_3_sep_2024)); // true
console.log("Francisco 04/09/2024:", francisco.tieneFranco(mie_4_sep_2024)); // false
console.log("Francisco 01/10/2024:", francisco.tieneFranco(mar_1_oct_2024)); // false


