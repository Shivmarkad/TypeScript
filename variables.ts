
//Explicit type declaration of the variable 

let age : number = 23

//Implicit type declaration 
//Implicit assignment forces TypeScript to infer the value.
//typescript will guess the type based on assigned value
let myAge = 23

//typescript will throw error if datatype donot match

let myName : string = "shiv"

// myName = 67     //it will throw error as type string variable can not have value number

//implicit declaration
let carName = "Suzuki"

// carName = 123       //it also throw error as already declared value is of type string

// types 
//three main primitives in js & ts

// boolean - true or false values
// number - whole numbers and floating point values
// string - text values like "TypeScript Rocks"

// bigint - whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
// symbol are used to create a globally unique identifier.
