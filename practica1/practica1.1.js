let nombre ="Armando";
const edad= 25;
nombre = "yoyyoyoy";
const saludo = "Holaaaaaa, "+ nombre +".estos " + edad + "años.";
console.log(saludo);

//function cuadrado(numero) {
//  return numero * numero;
//}

const cuadrado =(numero)=>numero *numero;
console.log(cuadrado(12));
//console.log(cuadrado(23));
//console.log(cuadrado(11));
const saludoPersonalizado = (nombre, edad) => `Holaaaa, mi nombre es ${nombre} y tengo ${edad} anos.`;
console.log(saludoPersonalizado("yuliana",19));
console.log(saludoPersonalizado("Ferndo",30));
console.log(saludoPersonalizado("Juan",30));
