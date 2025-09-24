const persona = {
    nombre: "Ivan isay",
    edad: 37,
    direccion: {
        ciudad: "Qro",
        pais: "MX"
    }
};


const { nombre, edad, direccion:{ ciudad }}= persona;
console.log("hola, me llamo " + nombre + ", y tengo " + edad + " años y vivo en " + ciudad);
//console.log(persona);
