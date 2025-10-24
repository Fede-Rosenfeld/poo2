const sistemaCentralizado = {
  cargas: [],

  cantidadRecargasPendientes: function () {
    return this.cargas.length;
  },

  cargarTarjeta: function (identificador, montoACargar) {
    if (montoACargar < 0) {
      throw new Error("El monto a cargar debe ser positivo!");
    }

    this.cargas.push(new Carga(identificador, montoACargar));
  },

  acreditarSaldo: function (tarjetaSube) {
    this.cargas.forEach((carga) => {
      carga.acreditar(tarjetaSube);
    });
  },
};

class Carga {
  constructor(id, monto) {
    this.monto = monto;
    this.id = id;
    this.estado = new Pendiente();
    this.acreditado = false;
  }

  acreditar(tarjetaSube) {
    if (this.sePuedeAplicarA(tarjetaSube)) {
      this.estado.cargarSaldo(tarjetaSube, this.monto);
      this.estado = new Acreditado();
    }
  }

  sePuedeAplicarA(tarjetaSube) {
    return tarjetaSube.tenesId(this.id);
  }
}

class Acreditado {
  cargarSaldo(tarjetaSube, monto) {
    return;
  }
}

class Pendiente {
  cargarSaldo(tarjetaSube, monto) {
    tarjetaSube.cargarSaldo(monto);
  }
}

module.exports = sistemaCentralizado;
