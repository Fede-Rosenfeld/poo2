const Posicion = function(x, y) {
    this.x = x;
    this.y = y;
};

Posicion.prototype.aumentarX = function() {
    return new Posicion(this.x + 1, this.y);
};

Posicion.prototype.reducirX = function() {
    return new Posicion(this.x - 1, this.y);
};

Posicion.prototype.aumentarY = function() {
    return new Posicion(this.x, this.y + 1);
};

Posicion.prototype.reducirY = function() {
    return new Posicion(this.x, this.y - 1);
};

Posicion.prototype.obtenerCoordenadas = function() {
    return [this.x, this.y];
};

Posicion.prototype.estaEnLimites = function(limiteMin, limiteMax) {
    return this.x >= limiteMin && this.x <= limiteMax && 
           this.y >= limiteMin && this.y <= limiteMax;
};

module.exports = Posicion;
