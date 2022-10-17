let numero;

function validar(){
    numero = prompt("Ingres un número");
    if(isNaN(numero) || numero <= 20){
        throw {msg: "Valor inválido ingresado por el usuario"}
    }
}

try{
    validar();
}catch(error){
    console.log(error);
    alert(`Sucedio un error, por favor verificar ${error}`);
}

