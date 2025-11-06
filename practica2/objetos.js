//1. Usa .find() para buscar a la persona con nombre "Luis".
//2. Usa .forEach() para imprimir el nombre de cada persona con su edad.
//3. Usa .reduce() para sumar todas las edades y obtener un total.
const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "María", edad: 28 }
];

const personaLuis =personas.find(persona =>persona.nombre == "Luis");
console.log(personaLuis); 
personas.forEach(persona => {
  console.log(persona.nombre + " tiene " + persona.edad + " años");
});
const totalEdades= personas.reduce((acum, persona)=> acum+ persona.edad, 0);
console.log("La suma total de las edades es:" +totalEdades +" años");










