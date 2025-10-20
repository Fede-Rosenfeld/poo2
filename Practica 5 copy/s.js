S = function(rover){
    this.rover=rover;
    this.execute = ()=>this.rover.retroceder();
}
module.exports = S;