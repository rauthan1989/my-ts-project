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



// interface
interface mold {
    bookPrice:number;
    pencil:number;
    eraser:number;
}

const pricing:mold = {
    bookPrice:20,
    pencil:7,
    eraser:3
}
const pricing1:mold = {
    bookPrice:100,
    pencil:70,
    eraser:30
}

const stationry = (bs:mold) =>  bs.bookPrice + bs.pencil + bs.eraser;
const priceb = stationry(pricing);
console.log(priceb);
const priceb1 = stationry(pricing1);
console.log(priceb1);


// interface with extends and type
interface A{
    a:string,
    b:number
}
interface D {
    c:number,
    d:string,
}
interface E extends A, D {} // interface use extends keywords to extends
const ab:E = {
    a:"pankaj",
    b:10,
    c:10,
    d:"singh"
}
class xy implements E { // interface extends with "implements" keyword
constructor(public a:string, public b:number, public c:number, public d:string){}
}

const st13 = new xy("Pankaj", 10, 15, "singh");
console.log(st13)