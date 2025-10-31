
// 7 tipos diferentes de francos, pero todos tienen en comun el metodo es franco

function Franco(){
}

Franco.prototype.esFranco = function(){
    throw new Error("el metodo es franco se debe implementar en los tipos de franco")
}

module.exports = Franco;