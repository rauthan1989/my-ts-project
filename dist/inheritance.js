"use strict";
class People {
    name;
    age;
    work;
    constructor(name, age, work) {
        this.name = name;
        this.age = age;
        this.work = work;
    }
    introduce() {
        return `Hi, my name is ${this.name}, i am ${this.age} years old and my hobby is ${this.work.join(", ")}.`;
    }
}
class Students extends People {
    grade;
    constructor(name, age, work, grade) {
        super(name, age, work);
        this.grade = grade;
    }
    introduce1() {
        return `${super.introduce()} I am in grade ${this.grade}`;
    }
}
const s1 = new People("Ramesh", 19, ["Reading", "Playing"]);
console.log(s1);
console.log(s1.introduce());
const s2 = new Students("Kumar", 14, ["Running", "Disco"], 10);
console.log(s2.introduce1());
// Shorthand properties
class People9 {
    name;
    age;
    work;
    constructor(name, age, work) {
        this.name = name;
        this.age = age;
        this.work = work;
    }
    introduce9() {
        return `Hi, my name is ${this.name}, i am ${this.age} years old and my hobby is ${this.work.join(", ")}.`;
    }
}
class Students9 extends People9 {
    grade;
    constructor(name, age, work, grade) {
        super(name, age, work);
        this.grade = grade;
    }
    introduce19() {
        return `${super.introduce9()} I am in grade ${this.grade}`;
    }
}
console.log("-------------------------Shothand Properties Output--------------------------");
const s19 = new People9("Ramesh", 19, ["Reading", "Playing"]);
console.log(s19);
console.log(s19.introduce9());
const s29 = new Students9("Kumar", 14, ["Running", "Disco"], 10);
console.log(s29.introduce19());
console.log(s19.work);
// Getter and Setter method
class Student2 {
    name;
    job;
    _age;
    constructor(name, job) {
        this.name = name;
        this.job = job;
    }
    set age(age) {
        if (age > 150 || age <= 0) {
            throw new Error("age is not valid");
        }
        this._age = age;
    }
    get age() {
        if (this._age === undefined) {
            throw new Error("age is not defined");
        }
        return this._age;
    }
    introduceParent() {
        return `Hi, my name is ${this.name}, i am ${this._age} years old and my hobby is ${this.job.join(", ")}.`;
    }
}
const st3 = new Student2("Pankaj", ["reading", "cricket"]);
st3.age = 50;
console.log(st3.introduceParent());
console.log(st3.age); // calling get method
