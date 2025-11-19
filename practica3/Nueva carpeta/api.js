
function simularPeticionapi(){
  return new Promise(resolve =>{
    setTimeout(()=>{ //tiempo
      resolve("Datos recibidos correctamente");
    }, 5000);
  });
}

async function obtenerDatos(){ //espera
  try {
    const resul =await simularPeticionapi();
    // Imprime
    console.log("todo bien", resul); 
  } catch(error) {
    console.error("Error ", error);
 }
}

obtenerDatos(); //llamar funcion