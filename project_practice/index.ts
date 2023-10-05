class User {
    name: string
    age: number
    private _courseCount: number = 1
    email: string
    
    constructor(name: string, age:number,email: string){
        this.name = name;
        this.age = age
        this.email = email
    }

    get getDetails(): string{
        return `Hello ${this.name} and you have ${this._courseCount} courses`;
    }

    set setCourseCount(courseNum: number){
        this._courseCount = courseNum
    }
}

const shiv = new User("shiv",24, "shiv@gmail.com")

