// ==========================
// TarjetaSube
// ==========================
class TarjetaSube {
  static minimo = -600;

  constructor(id) {
    this.id = id;
    this.saldo = 0;
  }

  consultarSaldo() {
    console.log(`Saldo de ${this.id}: ${this.saldo}`);
    return this.saldo;
  }

  cargarSaldo(monto) {
    this.saldo += monto;
  }

  realizarViaje(costo) {
    if (this.saldo - costo >= TarjetaSube.minimo) {
      this.saldo -= costo;
      console.log(`Viaje realizado. Nuevo saldo: ${this.saldo}`);
    } else {
      console.log("No alcanza: superarías el mínimo.");
    }
  }

  getId() { return this.id; }
}

// ==========================
// Carga
// ==========================
class Carga {
  constructor(id, monto) {
    this.id = id;
    this.monto = monto;
    this.estado = "Pendiente";
  }

  getId() { return this.id; }
  getMonto() { return this.monto; }
  getEstado() { return this.estado; }

  acreditar() {
    this.estado = "Acreditada";
  }
}

// ==========================
// SistemaCentralizado
// ==========================
class SistemaCentralizado {
    constructor() {
        this.cargas = []; // array de objetos Carga
    }

    cargarTarjeta(id, monto) {
        if(monto < 0){
            throw new Error("El monto a cargar debe ser positivo");
        }else{
            this.cargas.push(new Carga(id, monto));
        }   
    }

    acreditarSaldo(tarjeta) {
        // buscamos todas las cargas pendientes de esa tarjeta
        const pendientes = this.cargas.filter(c => c.getId() === tarjeta.getId() && c.getEstado() === "Pendiente");

        // sumamos los montos
        const total = pendientes.reduce((ac, c) => ac + c.getMonto(), 0);

        if (total > 0) {
            tarjeta.cargarSaldo(total);
            pendientes.forEach(c => c.acreditar()); // marcamos como acreditadas
            console.log(`Acreditado $${total} a tarjeta ${tarjeta.getId()}`);
        } else {
            console.log("No hay cargas pendientes para esta tarjeta.");
        }
    }

    cantidadRecargasPendientes() {
        return this.cargas.filter(c => c.getEstado() === "Pendiente").length;
    }
}

// ==========================
// DEMO
// ==========================
const sistema = new SistemaCentralizado();
const t1 = new TarjetaSube("A");
const t2 = new TarjetaSube("B");

sistema.cargarTarjeta("A", 500);
sistema.cargarTarjeta("A", 200);
sistema.cargarTarjeta("B", 300);

console.log("Pendientes totales:", sistema.cantidadRecargasPendientes()); // 3

sistema.acreditarSaldo(t1); // acredita 700
t1.consultarSaldo();        // 700
t1.realizarViaje(800);      // deja en -100 OK
t1.realizarViaje(550);      // no deja, superaría el mínimo

sistema.acreditarSaldo(t2); // acredita 300
t2.consultarSaldo();        // 300

console.log("Pendientes totales:", sistema.cantidadRecargasPendientes()); // 0
