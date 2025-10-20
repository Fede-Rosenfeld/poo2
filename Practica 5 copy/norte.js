Norte = function(){
    this.avanzar=function(pos){
        return pos.aumentarY();
    }
    this.retroceder=function(pos){
        return pos.disminuirY();
    }
    this.rotarDerecha=function(){
        return new Este();
    }
    this.rotarIzquierda=function(){
        return new Oeste();
    }
    this.mostrarMapa=function(pos){
        pos.mostrarMapa("N")
    }
    this.clone=function(){
        return new Norte();
    }
}

module.exports=Norte;