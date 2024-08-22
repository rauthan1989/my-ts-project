"use strict";
// initialization of object
const person = {
    name: "mahender",
    age: 35,
    address: {
        city: 'Delhi',
        country: 'India'
    }
};
console.log(person);
console.log(person.age);
console.log(person.address.country);
person.address.country = "Nepal"; // Updating object
console.log(person.address.country);
const person1 = {
    name: "mahender",
    age: 35,
    address: {
        city: 'Delhi',
        country: 'India'
    }
};
console.log(person1.name);
const products = {
    name: "Laptop",
    price: 50,
    quantity: 10
};
//calculate total price
const calculatePrice = (product) => {
    //    return products.price * products.quantity;
    return `${products.name} total cost is ${products.price * products.quantity}.`;
};
console.log(calculatePrice(products));
const pricing = {
    bookPrice: 20,
    pencil: 7,
    eraser: 3
};
const pricing1 = {
    bookPrice: 100,
    pencil: 70,
    eraser: 30
};
const stationry = (bs) => bs.bookPrice + bs.pencil + bs.eraser;
const priceb = stationry(pricing);
console.log(priceb);
const priceb1 = stationry(pricing1);
console.log(priceb1);
const ab = {
    a: "pankaj",
    b: 10,
    c: 10,
    d: "singh"
};
class xy {
    a;
    b;
    c;
    d;
    constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
}
const st13 = new xy("Pankaj", 10, 15, "singh");
console.log(st13);
