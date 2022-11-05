const sum = (...numbers)=>{

    //Funcion dentro de una funcion
    const validateNumber = number => isNaN(number) ? 0 : number;

    let accum = 0;

    for(const number of numbers){
        accum += validateNumber(number);
    }

    return accum;
};

console.log(sum(10, 20, 30, "Hola", false, 40, 50))