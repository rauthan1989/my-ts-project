// initialization of object
const person:{
    name:string;
    age:number;
    address:{
        city:string;
        country:string;
    }
} = {
    name:"mahender",
    age:35,
    address:{
        city:'Delhi',
        country:'India'
    }
}
console.log(person);
console.log(person.age);
console.log(person.address.country);

person.address.country = "Nepal"; // Updating object
console.log(person.address.country);


type Person = {
    name:string;
    age:number;
    address:{
        city:string;
        country:string;
    }
}
const person1:Person = {
    name:"mahender",
    age:35,
    address:{
        city:'Delhi',
        country:'India'
    }
}
console.log(person1.name);


type Product = {
    name:string;
    price:number;
    quantity:number;
}
const products:Product = {
name: "Laptop",
price: 50,
quantity: 10
}
//calculate total price
const calculatePrice = (product:Product)=>{
//    return products.price * products.quantity;
return `${products.name} total cost is ${products.price * products.quantity}.`  
}
console.log(calculatePrice(products));