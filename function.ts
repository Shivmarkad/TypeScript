const greeting: string = "hello"
const myname: string = "shiv"

//return type explicitly defined as string
let myDetails = (myname:string,greeting:string):string => {
    return `${greeting} ${myname}`
}
console.log(myDetails(myname,greeting))


//return type void - doesn't return any value
function printHello(): void {
    console.log('Hello!');
}

//parameters with type
// here desc is optional parameter with '?' sign
function sendMail(to: string, from: string, sub: string, desc?:string): string{
    return `To: ${to}, From: ${from} Subject: ${sub} Description: ${desc || " "}`
}

let mail = sendMail("shiv@gmail.com","sachine@gmail.com","Your order has arrived ")

console.log(mail);

//default values goes after type

function multiply(a: number = 3, b: number = 4){
    return a*b
}

let areaRect = multiply()

//named parameters

function add({fNum, sNum}:{fNum: number, sNum: number}){
    return fNum + sNum;
}

let addition = add({ fNum: 45, sNum: 23})

//rest parameters type must be an array

function sum(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}

//type aliase
//Function types can be specified separately from functions with type aliases.

type Negate = (value: number) => number

const alFuntion: Negate = (val) => val * -1