
function MyDecorator2(constructor: any, propertyName: string){
    // return function (classCons: Function){
        console.log({constructor, propertyName})
    // }
}

class Persons {
    name:string
    age:number
    constructor(n:string,a: number){
        this.name = n
        this.age = a
    }

    @MyDecorator2
    getDetails(this: Persons){
        console.log(this)
    }
}