var greeting = "hello";
var myname = "shiv";
//return type explicitly defined as string
var myDetails = function (myname, greeting) {
    return greeting + " " + myname;
};
console.log(myDetails(myname, greeting));
//return type void - doesn't return any value
function printHello() {
    console.log('Hello!');
}
//parameters with type
// here desc is optional parameter with '?' sign
function sendMail(to, from, sub, desc) {
    return "To: " + to + ", From: " + from + " Subject: " + sub + " Description: " + (desc || " ");
}
var mail = sendMail("shiv@gmail.com", "sachine@gmail.com", "Your order has arrived ");
console.log(mail);
//default values goes after type
function multiply(a, b) {
    if (a === void 0) { a = 3; }
    if (b === void 0) { b = 4; }
    return a * b;
}
var areaRect = multiply();
//named parameters
function add(_a) {
    var fNum = _a.fNum, sNum = _a.sNum;
    return fNum + sNum;
}
var addition = add({ fNum: 123, sNum: 23 });
//rest parameters type must be an array
function sum(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
}
var alFuntion = function (val) { return val * -1; };
