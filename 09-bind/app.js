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

const showResult = (message, result)=> {
    alert(message, result);
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

    resultHandler("Result of substract is " +accum);
    return accum;
}

const multiply = (resultHandler,...numbers) =>{
    const validateNumber = (number) => (isNaN(number) ? 1 : number);

    let accum = 1;
    for(const number of numbers){
        accum *= validateNumber(number);
    }
    resultHandler("Result of multiply is " + accum);
    return accum;
}

sum(showResult.bind(this, "Result of sum is "), 10, 30, 30, 40);
substract(showResult, 100, 20, 38, 109);
multiply(showResult, 10, 3, 4);
//console.log(sum(10, 20, 30, "Hola", false, 40, 50))