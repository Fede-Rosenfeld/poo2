
W = function(rover){
    this.rover=rover;
    this.execute= ()=> this.rover.avanzar();
}
module.exports = W;