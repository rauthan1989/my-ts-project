// initialization of object
var person = {
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
var person1 = {
    name: "mahender",
    age: 35,
    address: {
        city: 'Delhi',
        country: 'India'
    }
};
console.log(person1.name);
var products = {
    name: "Laptop",
    price: 50,
    quantity: 10
};
//calculate total price
var calculatePrice = function (product) {
    //    return products.price * products.quantity;
    return "".concat(products.name, " total cost is ").concat(products.price * products.quantity, ".");
};
console.log(calculatePrice(products));
