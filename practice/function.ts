// we can define type of argument and return for function in typescript

function printHelloWorld(name:string):string {
    return `Hello ${name} !! from typescript`
}

console.log(printHelloWorld('Shiv'))

// function with array parameter

function getDetails(details: string[]): string{
    return details[0]
}

console.log(getDetails(['Shiv', 'Markad']))


// function with parameter and return value having more datatypes

function multiDataType(data:(string | number)[]): string | number { // returns string or number
    return data[0];
}

console.log(multiDataType(["Completed", 24]))
console.log(multiDataType([24, "Incomplete"]))


// type lock in typescript

function data<T>(para:T[]): T {
    return para[0]
}

console.log(data([76,99, 12]))      // returns number 

console.log(data(['Hello', 'This is array'])) // returns string
