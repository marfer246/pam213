const productos=[
    {nombre: "laptop", precio: 12000 },
     {nombre: "mous", precio: 250 },
      {nombre: "teclado", precio: 750 },
      {nombre: "monitor", precio: 3000 }
];
//console.log(productos);
const nombres = productos
.filter (producto => producto.precio > 1000)
.map (producto => producto. nombre);
console.log(nombres);