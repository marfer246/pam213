import { restar} from './utils.js';

console.log(restar( 32, 13));
console.log(restar( 22, 17));

// b ------
function verificarUsuario(usuario) {
    //promesa
    return new Promise((resolve,reject) =>{
        if (usuario == "admin") {
            resolve("Acceso concedido");
        }else{
            reject("Acceso denegado");
        }
    }); //ok 
}
verificarUsuario("admin")
    .then(res=>console.log(res)) // bien
    .catch(err=>console.error(err));
verificarUsuario("ivan")
    .then(res=> console.log(res))
    .catch(err=>console.error(err));
    

    

    







