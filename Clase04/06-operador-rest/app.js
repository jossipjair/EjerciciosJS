//const sum = (a, b, c, d, e, f) => a + b + c + d + e +f;
//console.log(sum(10, 20, 40, 20, 10, 40));

//Redefiniendo la función SUM

/*const sum = numbers => {
    let accum = 0;
    for(const number of numbers){
        accum += number;
    }
    return accum;
}
*/

//Operador rest son "...", este operador solo se aplica a parametros

const sum = (...numbers) => {
    let accum = 0;
    for(const number of numbers){
        accum += number;
    }
    return accum;
}



console.log(sum(10, 20, 30, 20, 10, 40));

const authorization = (...rolesAllowed) =>{
    const rolesUser = ["OPERATOR", "ADMIN"];
    
    let userAuthenticate = false;

    for (const role of rolesAllowed){
        //IndexOf para busqueda en array
        if(rolesUser.indexOf(role) > -1){
            console.log("Usuario valido");
            userAuthenticate = true;
        }
    }

    return userAuthenticate;
}





