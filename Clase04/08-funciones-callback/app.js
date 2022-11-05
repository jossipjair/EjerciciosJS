//Las funciones callback pasan como parametro
//Funciones que se ejecutan luego de otra operación

const showResultInSpanish = result => {

    const message = "El resultado es " + result; 
    alert(message);
}

const showResultInEnglish= result =>{

    const message = "Result is " + result; 
    alert(message);
}


const sum = (resultHandler, ...numbers)=>{

    //Funcion dentro de una funcion
    const validateNumber = number => isNaN(number) ? 0 : number;

    let accum = 0;

    for(const number of numbers){
        accum += validateNumber(number);
    }
    
    resultHandler(accum);

    return accum;
};

const substract = (resultHandler,...numbers) =>{
    const validateNumber = (number) => (isNaN(number) ? 0 : number);

    let accum = 0;
    for(const number of numbers){
        accum -= validateNumber(number);
    }

    resultHandler(accum);
    return accum;
}

const multiply = (resultHandler,...numbers) =>{
    const validateNumber = (number) => (isNaN(number) ? 1 : number);

    let accum = 1;
    for(const number of numbers){
        accum *= validateNumber(number);
    }
    resultHandler(accum);
    return accum;
}

sum(showResultInSpanish, 10, 30, 30, 40);
substract(showResultInEnglish, 100, 20, 38, 109);
multiply(showResultInEnglish, 10, 3, 4);
//console.log(sum(10, 20, 30, "Hola", false, 40, 50))