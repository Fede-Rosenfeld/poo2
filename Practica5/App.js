const MarsRover = require('./marsRover.js');

console.log("=== Test 1: Secuencia válida (dentro de límites) ===");
const marsRover1 = new MarsRover();
console.log("Posición inicial:", marsRover1.obtenerPosicion());
marsRover1.mover('WWWWW'); // Avanza 5 veces hacia el norte
console.log("Después de WWWWW:", marsRover1.obtenerPosicion());

console.log("\n=== Test 2: Secuencia válida original ===");
const marsRover2 = new MarsRover();
console.log("Posición inicial:", marsRover2.obtenerPosicion());
marsRover2.mover('ASSSDDW');
console.log("Después de ASSSDDW:", marsRover2.obtenerPosicion());

console.log("\n=== Test 3: Secuencia inválida (excede límite) ===");
const marsRover3 = new MarsRover();
console.log("Posición inicial:", marsRover3.obtenerPosicion());
// Intentar avanzar 51 veces al norte (excede el límite de 50)
let secuenciaLarga = 'W'.repeat(51);
try {
    marsRover3.mover(secuenciaLarga);
    console.log("Después de 51 W's:", marsRover3.obtenerPosicion());
} catch (error) {
    console.log("ERROR capturado:", error.message);
    console.log("Posición después del error:", marsRover3.obtenerPosicion());
    console.log("(La posición no cambió porque se lanzó un error)");
}

console.log("\n=== Test 4: Secuencia parcialmente válida (inválida al final) ===");
const marsRover4 = new MarsRover();
console.log("Posición inicial:", marsRover4.obtenerPosicion());
// Primero mover 40 veces al norte (válido)
marsRover4.mover('W'.repeat(40));
console.log("Después de 40 W's:", marsRover4.obtenerPosicion());
// Ahora intentar mover 20 más (esto excedería el límite)
try {
    marsRover4.mover('W'.repeat(20));
    console.log("Después de intentar 20 W's más:", marsRover4.obtenerPosicion());
} catch (error) {
    console.log("ERROR capturado:", error.message);
    console.log("Posición después del error:", marsRover4.obtenerPosicion());
    console.log("(La posición no cambió porque se lanzó un error)");
}

console.log("\n=== Test 5: Secuencia cerca del límite negativo ===");
const marsRover5 = new MarsRover();
console.log("Posición inicial:", marsRover5.obtenerPosicion());
// Girar al sur y avanzar 50 veces (justo en el límite)
marsRover5.mover('SS' + 'W'.repeat(50));
console.log("Después de girar al sur y avanzar 50:", marsRover5.obtenerPosicion());
// Intentar avanzar 1 más (excedería el límite)
try {
    marsRover5.mover('W');
    console.log("Después de intentar avanzar 1 más:", marsRover5.obtenerPosicion());
} catch (error) {
    console.log("ERROR capturado:", error.message);
    console.log("Posición después del error:", marsRover5.obtenerPosicion());
    console.log("(La posición no cambió porque se lanzó un error)");
}

console.log("\n=== Test 6: En el límite exacto (válido) ===");
const marsRover6 = new MarsRover();
console.log("Posición inicial:", marsRover6.obtenerPosicion());
marsRover6.mover('W'.repeat(50)); // Exactamente en el límite
console.log("Después de 50 W's:", marsRover6.obtenerPosicion());
console.log("(En el límite exacto es válido)");
