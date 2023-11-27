
function MyDecorator3(constructor: any, propertyName: string, positionOfPara: number){
    // return function (classCons: Function){
        console.log({constructor, propertyName, positionOfPara})
    // }
}

class Persons1 {
    name:string
    age:number
    constructor(n:string,a: number){
        this.name = n
        this.age = a
    }

    // @MyDecorator3
    getDetails(this: Persons1){
        console.log(this)
    }
   
    logUser(  @MyDecorator3 msg: string){
        console.log("USER IS CREATED",msg)
    }
}