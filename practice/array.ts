
// Array of numbers

const marks: number[] = [12, 3, 4, 7]

// can not add string element in number array

// marks.push('Shiv')      // argument of type string not assignable to parameter of number

// Array of string 

const names: string[] = ['Shiv', 'Sachin', 'Ramesh']

// Array of two datatype elements

const details: (string | number)[] = ['Hello', 24]

// details.push(false) // only string or numbers allowed

console.log(names, details)