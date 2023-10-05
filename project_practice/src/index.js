"use strict";
var User = /** @class */ (function () {
    function User(name, age, email) {
        this._courseCount = 1;
        this.name = name;
        this.age = age;
        this.email = email;
    }
    Object.defineProperty(User.prototype, "getDetails", {
        get: function () {
            return "Hello " + this.name + " and you have " + this._courseCount + " courses";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setCourseCount", {
        set: function (courseNum) {
            this._courseCount = courseNum;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
var shiv = new User("shiv", 24, "shiv@gmail.com");
