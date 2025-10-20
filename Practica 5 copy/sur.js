Sur = function(){
    this.avanzar=function(pos){
        return pos.disminuirY();
    }
    this.retroceder=function(pos){
        return pos.aumentarY();
    }
    this.rotarDerecha=function(){
        return new Oeste();
    }
    this.rotarIzquierda=function(){
        return new Este();
    }
    this.mostrarMapa=function(pos){
        pos.mostrarMapa("S")
    }
    this.clone=function(){
        return new Sur();
    }
}

module.exports=Sur;