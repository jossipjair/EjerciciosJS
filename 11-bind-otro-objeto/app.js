/*
bind permite pasar el objeto de contexto, por ejemplo cuando se llama la funcion 
"student.fullName.bind(student)" busca el contexto del objeto student (todo lo de la llaves)fi
*/

const student = {
    name : "Jair",
    lastName : "Escalaya",
    fullName : function(){
        return this.name + " " + this.lastName
    }
}

const teacher = {
    name: "Diego",
    lastName: "Escalaya"
}

const fullNameStudent = student.fullName.bind(teacher);

//console.log(student.fullName());
console.log(fullNameStudent());