//object with type parameter

const car: {name: string, year: number, owner: string} = {
    name: "Suzuki",
    year: 2015,
    owner: "Ravi"
}

//optional properties

//here standard is optional parameter
const student: {name: string, age: number, standard?: number} = {
    name: "Sachin",
    age: 19
}

student.standard = 14;

//index signature 
const nameAndAge: {[index: string]: number} = {}

nameAndAge.ravi = 24;
// nameAndAge.shiv = "Twenty"      //string is not assignable to number