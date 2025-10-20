
// creo el prototipo Moneda vacio 
function Moneda (){}


// accedo al prototipo y le agrego los metodos
Moneda.prototype.obtenerRelacionPesos = function () {
    return this.relacionPesos;
};
Moneda.prototype.convertirA = function (monto,otraMoneda){
    const montoARS = monto * this.relacionPesos;
    return montoARS / otraMoneda.obtenerRelacionPesos();
}

// creo los prototipos ARS y GBP
function ARS (){
    this.relacionPesos = 1;
}
// al prototipo ARS le asigno como prototipo a Moneda
// osea que ars puede acceder a los metodos de Moneda
ARS.prototype = Object.create(Moneda.prototype);
// vuelvo a asignar el constructor
// vuelvo a asignar el constructor porque sino el constructor de ARS
// seria Moneda (porque le asigne el prototipo de Moneda)
ARS.prototype.constructor = ARS;

// lo mismo para GBP
function GBP (){
    this.relacionPesos = 1250;
}
GBP.prototype = Object.create(Moneda.prototype);
// vuelvo a asignar el constructor
GBP.prototype.constructor = GBP;



// PROTOTIPOS ESTADO, PENDIENTE, ACREDITADO
function Estado() {}
Estado.prototype.estaPendiente = function(){ return false; };

function Pendiente() {}
Pendiente.prototype = Object.create(Estado.prototype);
Pendiente.prototype.constructor = Pendiente;
Pendiente.prototype.estaPendiente = function(){ return true; };

function Acreditado() {}
Acreditado.prototype = Object.create(Estado.prototype);
Acreditado.prototype.constructor = Acreditado;

// PROTOTIPO TARJETA
function Tarjeta (id, moneda){
    this.id = id;
    this.moneda = moneda;
    this.saldo = 0;
}
Tarjeta.prototype.obtenerID = function () { return this.id ;};
Tarjeta.prototype.obtenerMoneda = function () { return this.moneda;};
Tarjeta.prototype.obtenerSaldo = function () { return this.saldo;};
// devuelve el nombre del constructor (Sube u Oyster)
Tarjeta.prototype.obtenerTipo = function () {
    return this.constructor.name; // "Sube" | "Oyster"
};

Tarjeta.prototype.acreditarSaldo = function (monto,monedaMonto) {
    const montoCarga = monedaMonto.convertirA (monto, this.obtenerMoneda());
    this.saldo += montoCarga;
    return this.saldo;
}

Tarjeta.prototype.puedePagar = function (monto,monedaMonto){
    const montoCarga = monedaMonto.convertirA (monto, this.obtenerMoneda());
    return (this.saldo - montoCarga) >= 0;
}

Tarjeta.prototype.pagarViaje = function (monto, monedaMonto){
    const montoCarga = monedaMonto.convertirA (monto, this.obtenerMoneda());
    if (!this.puedePagar(monto,monedaMonto)){
        throw new Error ("NO ALCANZA EL SALDO");
    }
    this.saldo -= montoCarga;
    return this.saldo;
}

// PROTOTIPOS SUBE Y OYSTER
function Sube (){
    // contador estatico
    // si no existe lo creo 
    // y si existe lo uso
    if (typeof Sube.contador === "undefined"){
        Sube.contador = 0;
    }
    Sube.contador ++;
    // llamo al constructor padre
    // osea al constructor de Tarjeta
    // le paso el id (contador) y la moneda (ARS)
    // hago esto primero que object.create ya que necesito el id
    // para despues crear el objeto con el prototipo de Tarjeta
    Tarjeta.call (this, Sube.contador, new ARS());
}
// sube.minimo es estatico
Sube.minimo = -600;
Sube.prototype = Object.create (Tarjeta.prototype);
Sube.prototype.constructor = Sube;

Sube.prototype.puedePagar = function (monto,monedaMonto){
    const montoCarga = monedaMonto.convertirA (monto, this.obtenerMoneda());
    return (this.saldo - montoCarga) >= Sube.minimo; // Consultar como poner el estatico aca...
}

function Oyster (){
    if (typeof Oyster.contador === "undefined"){
        Oyster.contador = 0;
    }
    Oyster.contador ++;
    Tarjeta.call (this, Oyster.contador, new GBP());
}
Oyster.prototype = Object.create (Tarjeta.prototype);
Oyster.prototype.constructor = Oyster;


// PROTOTIPO CARGA
function Carga (tipoTarjeta, idTarjeta, monto, moneda){
    this.tipoTarjeta = tipoTarjeta;
    this.idTarjeta = idTarjeta;
    this.monto = monto;
    this.moneda = moneda;
    this.estado = new Pendiente ();
}
Carga.prototype.obtenerTipoTarjeta = function(){ return this.tipoTarjeta; };
Carga.prototype.obtenerIDTarjeta = function () { return this.idTarjeta;};
Carga.prototype.obtenerMonto = function (){return this.monto;};
Carga.prototype.obtenerMoneda = function () {return this.moneda;};

Carga.prototype.estaPendiente = function (){ return this.estado.estaPendiente();};
Carga.prototype.marcarAcreditada = function (){this.estado = new Acreditado();};

function SistemaCentralizado (){
    this.cargas = [];
}
SistemaCentralizado.prototype.cargarTarjeta = function (tipoTarjeta,idTarjeta,monto,moneda){
    this.cargas.push (new Carga (tipoTarjeta,idTarjeta,monto,moneda));
};
SistemaCentralizado.prototype.acreditarSaldo = function (tarjeta){
    const idTarjeta = tarjeta.obtenerID();
    const tipoTarjeta = tarjeta.obtenerTipo();
    this.cargas.forEach ( carga => {
        if (carga.obtenerIDTarjeta() === idTarjeta && carga.estaPendiente() && carga.obtenerTipoTarjeta() === tipoTarjeta) {
            tarjeta.acreditarSaldo(carga.obtenerMonto() ,carga.obtenerMoneda());
            carga.marcarAcreditada();
        }
    })
};
SistemaCentralizado.prototype.cantidadRecargasPendientes = function () {
    const cargasPendientes = this.cargas.filter (carga => carga.estaPendiente());
    return cargasPendientes.length;
}



// SISTEMA + TARJETAS
const sistemaCentralizado = new SistemaCentralizado();
const s1 = new Sube();    // id 1, ARS
const o1 = new Oyster();  // id 1, GBP

console.log("Saldo SUBE: " , s1.obtenerSaldo());   // 0
console.log("Saldo OYSTER: ", o1.obtenerSaldo());  // 0

// CARGAS: 2 para SUBE, 1 para OYSTER (no 3 para SUBE)
console.log("Recargas Pendientes : ", sistemaCentralizado.cantidadRecargasPendientes()); // 0
sistemaCentralizado.cargarTarjeta(s1.obtenerTipo (),s1.obtenerID(), 2000, new ARS ()); // SUBE +2000 ARS
console.log("Recargas Pendientes : ", sistemaCentralizado.cantidadRecargasPendientes()); // 1
sistemaCentralizado.cargarTarjeta(s1.obtenerTipo (),s1.obtenerID(), 2, new GBP());   // SUBE +2 GBP
console.log("Recargas Pendientes : ", sistemaCentralizado.cantidadRecargasPendientes()); // 2
sistemaCentralizado.cargarTarjeta(o1.obtenerTipo(),o1.obtenerID(), 3, new GBP ());   // OYSTER +3 GBP
console.log("Recargas Pendientes : ", sistemaCentralizado.cantidadRecargasPendientes()); // 3

// ACREDITAR
sistemaCentralizado.acreditarSaldo(s1); // aplica 2 cargas a SUBE
// SUBE esperado: 2000 + (2*1250) = 4500
console.log("Saldo SUBE: " , s1.obtenerSaldo()); // 4500
console.log("Recargas Pendientes : ", sistemaCentralizado.cantidadRecargasPendientes()); // 1

sistemaCentralizado.acreditarSaldo(o1); // aplica 1 carga a OYSTER
// OYSTER esperado: 3 GBP
console.log("Saldo OYSTER: " , o1.obtenerSaldo()); // 3
console.log("Recargas Pendientes : ", sistemaCentralizado.cantidadRecargasPendientes()); // 0

// PAGOS
// SUBE: paga 1.5 GBP -> 1.5*1250 = 1875 ARS; 4500 - 1875 = 2625
s1.pagarViaje(1.5, new GBP ());
console.log("Saldo SUBE tras pago: ", s1.obtenerSaldo()); // 2625

// OYSTER: paga 2000 ARS -> 2000/1250 = 1.6 GBP; 3 - 1.6 = 1.4
o1.pagarViaje(2000, new ARS());
console.log("Saldo OYSTER tras pago: ", o1.obtenerSaldo()); // 1.4 aprox

