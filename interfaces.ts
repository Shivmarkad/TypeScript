//type aliases

//types with custom names
type name = string;
type age = number;
type standard = number;


//custom type with use of types with custom names
type newstudent = {
    stdName:string,
    stdAge:number,
    standard:number
}

//using custom type with custom name for variable
const studentName: name = "Shiv";
const studentAge : age = 24;
const standardOfStudent: standard = 12

//creating object with name parameter type
const MyStudent: newstudent = {
    stdName:studentName,
    stdAge:studentAge,
    standard:standardOfStudent
}

//interfaces
//only apply to object types

interface CarDetail{
    year: number,
    name: string,
    owner: string
}

//extending interfaces which will have same properties with additional new 
interface coloredCar extends CarDetail{
    color: string
}

//new object with interface properties
const newCar: coloredCar = {
    year:2017,
    name:"Tata",
    owner: "Sachin",
    color: "blue"
}