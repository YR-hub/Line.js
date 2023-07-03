const alturaEnCentimetros = 175;
const alturaEnMetros = alturaEnCentimetros / 100;
const pesoEnKilogramos = 68.5;
const alturaRedondeadaHaciaArriba = Math.ceil(alturaEnMetros);
const pesoRedondeadoHaciaAbajo = Math.floor(pesoEnKilogramos);
const maximoValorJavascript = Number.MAX_VALUE;
const comparacionMaximos = (maximoValorJavascript + 1) === maximoValorJavascript;

console.log("Altura en centímetros: " + alturaEnCentimetros);
console.log("Altura en metros: " + alturaEnMetros);
console.log("Peso en kilogramos: " + pesoEnKilogramos);
console.log("Altura redondeada hacia arriba: " + alturaRedondeadaHaciaArriba);
console.log("Peso redondeado hacia abajo: " + pesoRedondeadoHaciaAbajo);
console.log("¿(Max valor Javascript + 1) es igual al max valor Javascript?: " + comparacionMaximos);
