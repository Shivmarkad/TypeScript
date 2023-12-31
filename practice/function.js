// we can define type of argument and return for function in typescript
function printHelloWorld(name) {
    return "Hello ".concat(name, " !! from typescript");
}
console.log(printHelloWorld('Shiv'));
// function with array parameter
function getDetails(details) {
    return details[0];
}
console.log(getDetails(['Shiv', 'Markad']));
// function with parameter and return value having more datatypes
function multiDataType(data) {
    return data[0];
}
console.log(multiDataType(["Completed", 24]));
console.log(multiDataType([24, "Incomplete"]));
// type lock in typescript
function data(para) {
    return para[0];
}
console.log(data([76, 99, 12])); // returns number 
console.log(data(['Hello', 'This is array'])); // returns string
