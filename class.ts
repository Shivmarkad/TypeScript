// There are three main visibility modifiers in TypeScript.

//     public - (default) allows access to the class member from anywhere
//     private - only allows access to the class member from within the class
//     protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

class Student {
    private name: string;
    private age: number

    constructor(name: string,age: number){
        this.name = name,
        this.age = age
    }
    
    getDetails():string{
        return `${this.name} your age is ${this.age}`
    } 
}

let newStud = new Student("shiv",18);
let studName = newStud.getDetails()

console.log(studName)


//parameter properties 
// visibility modifiers to the parameters can be added in class constructor 

class Person {

    private readonly age: number;
    public constructor(private name: string,age: number){
        this.name = name;
        this.age = age
    }

    public getDetails(): string {
        return `${this.name} your age is ${this.age}`
    }
}

let newPerson = new Person("Ravi",23)

console.log(newPerson.getDetails())

//readonly keyword prevents class members from being changed