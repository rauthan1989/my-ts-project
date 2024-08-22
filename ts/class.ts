//  class Persons {
//     name:string ="pankaj singhr rauthan";
//     age:number = 14;
//     hobby:string[]=["Reading", "Cricket"];
//  }

//  const persons1=new Persons();
//  console.log(persons1);

class Employee {
    name:string;
    age:number;
    work:string[];

    constructor(name:string, age:number, work:string[]){
        this.name=name;
        this.age=age;
        this.work=work;
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
    name:string;
    age:number;
    work:string[];

    constructor(name:string, age:number, work:string[]){
        this.name=name;
        this.age=age;
        this.work=work;
    }

    introduce():string {
        return `Hi, my name is ${this.name}, i am ${this.age} years old and my hobby is ${this.work.join(", ")}.`;
    }
}

const employee6 = new Employee5("Mahender", 21, ["Account", "Manger"]);
const employee7 = new Employee5("Singh", 21, ["UI Developer", "IT"]);
const employee8 = new Employee5("RAuthan", 21, ["HR", "Manger"]);
console.log(employee6.introduce());


// Static properties and methods

class MathOperation{
public static PI = Math.PI;
public static addition(a: number, b:number){
    return a+b;
}
public static subtraction(a:number,b:number){
    return a-b;
}
}
console.log(MathOperation.PI);
console.log(MathOperation.addition(10, 5));
console.log(MathOperation.subtraction(10,5));


// abstract class

abstract class Shape{
constructor(protected color:string){}
abstract calculateArea():number;
abstract displayArea():any;
}

// calculating area of Circle
class Circle extends Shape {
constructor(protected color:string, public radius:number){
    super(color);
}
public calculateArea(){
    return Math.PI * this.radius * this.radius;
}
displayArea() {
    console.log(`Circle color is ${this.color} and radius is ${this.radius} and area of circle is ${this.calculateArea()}.`);
}
}
// calculating area of Square
class Square extends Shape {
constructor (protected color:string, protected radius:number){
    super(color);
}
public calculateArea(): number {
    return this.radius * this.radius;
}
displayArea() {
    console.log(`Square color is ${this.color}, radius is ${this.radius} area of square is ${this.calculateArea()}.`)
}
}
// calculating area of Triangle
class Triangle extends Shape {
    constructor (protected color:string, protected width:number, protected height:number){
        super(color);
    }
    public calculateArea(): number {
        return (this.width * this.height)/2;
    }
    displayArea() {
        console.log(`Area of triangle is ${this.calculateArea()} and color is ${this.color}. `)
    }
    }

const shapeArea = new Circle("red", 10);
console.log(shapeArea.calculateArea());
shapeArea.displayArea();

const squareArea = new Square("Black", 5);
console.log(squareArea.calculateArea());
squareArea.displayArea();

const triangleArea = new Triangle("Black", 50, 4);
console.log(triangleArea.calculateArea());
triangleArea.displayArea();

