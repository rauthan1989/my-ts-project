//  class Persons {
//     name:string ="pankaj singhr rauthan";
//     age:number = 14;
//     hobby:string[]=["Reading", "Cricket"];
//  }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//  const persons1=new Persons();
//  console.log(persons1);
var Employee = /** @class */ (function () {
    function Employee(name, age, work) {
        this.name = name;
        this.age = age;
        this.work = work;
    }
    return Employee;
}());
var employee1 = new Employee("Mahender", 21, ["Account", "Manger"]);
var employee2 = new Employee("Singh", 21, ["UI Developer", "IT"]);
var employee3 = new Employee("RAuthan", 21, ["HR", "Manger"]);
///When you have objects like employee1, employee2, and employee3 and you try to print them directly in a string context (e.g., with console.log()), JavaScript tries to convert these objects to strings. Output is: [object Object] <br> [object Object] <br> [object Object]
// console.log(employee1 + "<br>" + employee2 + "<br>" +  employee3);
console.log(JSON.stringify(employee1) + "<br>" + JSON.stringify(employee2) + "<br>" + JSON.stringify(employee3));
//To print the actual content of the objects, you can use JSON.stringify() to convert the objects to a string representation that includes their properties.
// Inheritance
var Employee5 = /** @class */ (function () {
    function Employee5(name, age, work) {
        this.name = name;
        this.age = age;
        this.work = work;
    }
    Employee5.prototype.introduce = function () {
        return "Hi, my name is ".concat(this.name, ", i am ").concat(this.age, " years old and my hobby is ").concat(this.work.join(", "), ".");
    };
    return Employee5;
}());
var employee6 = new Employee5("Mahender", 21, ["Account", "Manger"]);
var employee7 = new Employee5("Singh", 21, ["UI Developer", "IT"]);
var employee8 = new Employee5("RAuthan", 21, ["HR", "Manger"]);
console.log(employee6.introduce());
// Static properties and methods
var MathOperation = /** @class */ (function () {
    function MathOperation() {
    }
    MathOperation.addition = function (a, b) {
        return a + b;
    };
    MathOperation.subtraction = function (a, b) {
        return a - b;
    };
    MathOperation.PI = Math.PI;
    return MathOperation;
}());
console.log(MathOperation.PI);
console.log(MathOperation.addition(10, 5));
console.log(MathOperation.subtraction(10, 5));
// abstract class
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    return Shape;
}());
// calculating area of Circle
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, radius) {
        var _this = _super.call(this, color) || this;
        _this.color = color;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.displayArea = function () {
        console.log("Circle color is ".concat(this.color, " and radius is ").concat(this.radius, " and area of circle is ").concat(this.calculateArea(), "."));
    };
    return Circle;
}(Shape));
// calculating area of Square
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color, radius) {
        var _this = _super.call(this, color) || this;
        _this.color = color;
        _this.radius = radius;
        return _this;
    }
    Square.prototype.calculateArea = function () {
        return this.radius * this.radius;
    };
    Square.prototype.displayArea = function () {
        console.log("Square color is ".concat(this.color, ", radius is ").concat(this.radius, " area of square is ").concat(this.calculateArea(), "."));
    };
    return Square;
}(Shape));
// calculating area of Triangle
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(color, width, height) {
        var _this = _super.call(this, color) || this;
        _this.color = color;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Triangle.prototype.calculateArea = function () {
        return (this.width * this.height) / 2;
    };
    Triangle.prototype.displayArea = function () {
        console.log("Area of triangle is ".concat(this.calculateArea(), " and color is ").concat(this.color, ". "));
    };
    return Triangle;
}(Shape));
var shapeArea = new Circle("red", 10);
console.log(shapeArea.calculateArea());
shapeArea.displayArea();
var squareArea = new Square("Black", 5);
console.log(squareArea.calculateArea());
squareArea.displayArea();
var triangleArea = new Triangle("Black", 50, 4);
console.log(triangleArea.calculateArea());
triangleArea.displayArea();
