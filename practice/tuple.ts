
// Tuple is special type of array with known datatypes at each index 
// should be initialized with correct order

let myTup: [string, number, boolean] = ['Shiv', 24, false]

console.log(myTup)

// tuple can be extented
myTup.push('hello')

console.log(myTup)


// myTup[0] = 34       // type number not assignable to type string