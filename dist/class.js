"use strict";
//  class Persons {
//     name:string ="pankaj singhr rauthan";
//     age:number = 14;
//     hobby:string[]=["Reading", "Cricket"];
//  }
//  const persons1=new Persons();
//  console.log(persons1);
class Employee {
    name;
    age;
    work;
    constructor(name, age, work) {
        this.name = name;
        this.age = age;
        this.work = work;
    }
}
const employee1 = new Employee("Mahender", 21, ["Account", "Manger"]);
const employee2 = new Employee("Singh", 21, ["UI Developer", "IT"]);
const employee3 = new Employee("RAuthan", 21, ["HR", "Manger"]);
///When you have objects like employee1, employee2, and employee3 and you try to print them directly in a string context (e.g., with console.log()), JavaScript tries to convert these objects to strings. Output is: [object Object] <br> [object Object] <br> [object Object]
// console.log(employee1 + "<br>" + employee2 + "<br>" +  employee3);
console.log(JSON.stringify(employee1) + "<br>" + JSON.stringify(employee2) + "<br>" + JSON.stringify(employee3));
//To print the actual content of the objects, you can use JSON.stringify() to convert the objects to a string representation that includes their properties.
// Inheritance
class Employee5 {
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
const employee6 = new Employee5("Mahender", 21, ["Account", "Manger"]);
const employee7 = new Employee5("Singh", 21, ["UI Developer", "IT"]);
const employee8 = new Employee5("RAuthan", 21, ["HR", "Manger"]);
console.log(employee6.introduce());
