//1. Usa .find() para buscar a la persona con nombre "Luis".
//2. Usa .forEach() para imprimir el nombre de cada persona con su edad.
//3. Usa .reduce() para sumar todas las edades y obtener un total.
//const personas = [
  //{ nombre: "Ana", edad: 22 },
  //{ nombre: "Luis", edad: 35 },
 // { nombre: "María", edad: 28 }
//];

//const personaLuis =personas.find(persona =>persona.nombre == "Luis");
//console.log(personaLuis); 
//personas.forEach(persona => {
//  console.log(persona.nombre + " tiene " + persona.edad + " años");
//});
//const totalEdades= personas.reduce((acum, persona)=> acum+ persona.edad, 0);
//console.log("La suma total de las edades es:" +totalEdades +" años");

//La condición de default es opcional. No es obligatorio que la uses si no la necesitas. 
// Es como el else de las condiciones if.

const dia = 'lunes'

switch (dia) {
 // switch (expresión) {
  case 'lunes':
 //case valor1:
  console.log('hoy es lunes');
    // código a ejecutar si la expresión coincide con valor1
    break
 // case 'Martes'
  //case valor2:
 // console.log('hoy es Martes');
    // código a ejecutar si la expresión coincide con valor2
  //  break

  default:
    console.log('otro dia');
    // código a ejecutar si la expresión no coincide con ningún valor
    break
};










