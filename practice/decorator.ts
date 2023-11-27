

function MyDecorator(msg: string){
    return function (classCons: Function){
        console.log(msg)
    }
}

@MyDecorator("hello this is my decorator!!!")
class User {
    name:string
    age:number
    constructor(n:string,a: number){
        this.name = n
        this.age = a
    }
}