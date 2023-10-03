// There are three main visibility modifiers in TypeScript.
//     public - (default) allows access to the class member from anywhere
//     private - only allows access to the class member from within the class
//     protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name,
            this.age = age;
    }
    Student.prototype.getDetails = function () {
        return this.name + " your age is " + this.age;
    };
    return Student;
}());
var newStud = new Student("shiv", 18);
var studName = newStud.getDetails();
console.log(studName);
//parameter properties 
// visibility modifiers to the parameters can be added in class constructor 
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.name = name;
        this.age = age;
    }
    Person.prototype.getDetails = function () {
        return this.name + " your age is " + this.age;
    };
    return Person;
}());
var newPerson = new Person("Ravi", 23);
console.log(newPerson.getDetails());
//readonly keyword prevents class members from being changed
