type Student = {
    name:string;
    age:number;
    greet:(country:string)=> string;
}
const student5:Student =  {
    name: 'pankaj',
    age: 20,
    greet: (country):string => `my name is ${student5.name} and my age is ${student5.age} and country is ${country}`
}
const student6:Student =  {
    name: 'Mahender',
    age: 40,
    greet: (country):string => `my name is ${student6.name} and my age is ${student6.age} and country is ${country}`
}

// const stgreet = (st1:Student):string => {
//     return `my name is ${student5.name} and my age is ${student5.age}`;
// }

// console.log(stgreet(student5));
console.log(student5.greet('Nepal'));
console.log(student6.greet('India'));



//enum type
enum Roles {
    admin = "admin",
    user = "user"
}
type loginDetails = {
    name?:string;
    email:string;
    password:number;
    role:Roles;
}
const emp:loginDetails = {
name:"pankaj",
email:"pankaj@gmail.com",
password:123,
role:Roles.admin
}
const emp1:loginDetails = {
    name:"mahi",
    email:"mahi@gmail.com",
    password:123,
    role:Roles.user
}

const isRole = (user1:loginDetails)=> {
    //console.log(user1.role);
if (user1.role === "admin"){
    return "You are admin.";
} else {
    return "You are a normal user."
}
}
console.log(isRole(emp1));


const isRole1 = (user1:loginDetails)=> {
    //console.log(user1.role);
    const {name, role} = user1;
return user1.role === "admin" ? `Hello ${name}! You are ${role}.` : `Hello ${name}! You are a normal ${role}.` // Turnery operator
}
console.log(isRole1(emp));
console.log(isRole1(emp1));


//tuples
type Tup = readonly[string, number, boolean]; // readonly is use to prevent from .push() function
const tip = (tuptup1:Tup)=>{
const [name, age, hasDrivingLicence] = tuptup1;
return `${name} and age ${age} ${hasDrivingLicence === true ? `Congrats!` : `Please get your license.`}`
}
const tup1:Tup = ["pankaj", 35, false];
//tup1.push("test");
console.log (tup1);
const tup2:Tup = ["mahi", 21, true];
console.log(tip(tup1))
console.log(tip(tup2))


// Union and Intersection
type Emps = {
    name:string;
    age: number;
}
type Address = {
    name?:string;
    city:string;
    pin: number;
    country:string;
}
const user:Emps = {
   name: "pankaj",
   age: 35
}
const address:Address = {
    city: "Delhi",
    pin:110042,
    country:"India"
 }
 type infor = Emps & Address; // Intersection

 const user1:Emps = {
    name: "pankaj",
    age: 35
 }
 const address1:Address = {
    name:"mahender",
     city: "Delhi",
     pin:110042,
     country:"India"
  }

type infor1 = Emps | Address; // Union
const dd = (info:Emps, address:Address) =>{
//    return `${user}, ${address}`;
return {... user, ... address}; // ... for complete data extraction
}
const myCompleteData:infor = dd(user,address); // intersection
console.log(myCompleteData); // intersection
const myCompleteData1:infor = dd(user1,address1); // union
console.log(myCompleteData1); // union



// Generics
function abcv<T>(value:T):T{ // Here "T"(placeholder) is a type of value so i can pass any type of value 
// console.log(value);
return value;
}
const abcv1 = abcv<number>(20);
const abcv2 = abcv<string>("This is generic function");
console.log(abcv1);
console.log(abcv2);


function genrf<S>(ax:S, bx:S):S{
// let cx = ax + bx; // There is a type-related issue in your TypeScript code. The + operator is not universally defined for all types. It works for numbers and strings, but not for other types by default. When using generic types, TypeScript doesn't know how to handle the + operation unless you provide a constraint or type that guarantees it.
let cx = ax as any + bx as any;
return cx;
}
const v1:number = genrf<number>(15, 20);
const v2:string = genrf<string>("Hello World! ", "My name is pankaj")
console.log(v1);
console.log(v2);

//Another way to solve above problems
// function genrf<S extends number | string>(ax: S, bx: S): S {
//     let cx = (ax as any) + (bx as any);
//     return cx;
//   }
  
//   const v1: number = genrf<number>(10, 20);
//   const v2: string = genrf<string>("Hello World! ", "My name is Pankaj");
//   console.log(v1);
//   console.log(v2);

function genrfa<T,S>(ax1:T, bx1:S){
    let cx = ax1 as any + bx1 as any;
    return cx;
    }
    const v1a = genrfa<number, string>(15, " age");
    const v2a = genrfa("I am ", "function overloading with generics..")
    console.log(v1a);
    console.log(v2a);