const username = 'jair';

function printInfoUser(){
    const age = 14;
    console.log('nombre', username);
    console.log('age', age);
}

printInfoUser();
//console.log('age out function', age);

if(username === 'jair'){
    const lastname = 'escalaya';
    console.log(`Fullname is ${username} ${lastname}`);
}

console.log('el valor es',lastname);