Oeste = function(){
    this.avanzar=function(pos){
        return pos.disminuirX();
    }
    this.retroceder=function(pos){
        return pos.aumentarX();
    }
    this.rotarDerecha=function(){
        return new Norte();
    }
    this.rotarIzquierda=function(){
        return new Sur();
    }
    this.mostrarMapa=function(pos){
        pos.mostrarMapa("O")
    }
    this.clone=function(){
        return new Oeste();
    }
}

module.exports=Este;