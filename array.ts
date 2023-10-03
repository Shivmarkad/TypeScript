
const numArray: number[] = [1,2,4,5]

numArray.push(9)        //only number can be pushed in the array

const carNames: readonly string[] = ["suzuki", "creta", "Thar"]

// carNames.push("Tata")   //push and pop does exist for readonly

//type inference

const ages = [19, 18, 23]       //here type inferred as number

//ages.push("shiv")    //argument of string not assignable to parameter type number


//typed arrays - tuple
//-pre-defined length and types for each index

let myTuple : [number, string, boolean]

myTuple = [14, "Hello", true]       //must be initialized with correct order

//readonly tuple

let myRoTuple :readonly [string, number, boolean] = ["shiv", 23, true]

