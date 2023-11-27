function MyDecorator3(constructor, propertyName, positionOfPara) {
    // return function (classCons: Function){
    console.log({ constructor: constructor, propertyName: propertyName, positionOfPara: positionOfPara });
    // }
}
var Persons1 = /** @class */ (function () {
    function Persons1(n, a) {
        this.name = n;
        this.age = a;
    }
    // @MyDecorator3
    Persons1.prototype.getDetails = function () {
        console.log(this);
    };
    Persons1.prototype.logUser = function (msg) {
        console.log("USER IS CREATED", msg);
    };
    return Persons1;
}());
