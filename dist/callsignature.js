"use strict";
const student5 = {
    name: 'pankaj',
    age: 20,
    greet: (country) => `my name is ${student5.name} and my age is ${student5.age} and country is ${country}`
};
const student6 = {
    name: 'Mahender',
    age: 40,
    greet: (country) => `my name is ${student6.name} and my age is ${student6.age} and country is ${country}`
};
// const stgreet = (st1:Student):string => {
//     return `my name is ${student5.name} and my age is ${student5.age}`;
// }
// console.log(stgreet(student5));
console.log(student5.greet('Nepal'));
console.log(student6.greet('India'));
//enum type
var Roles;
(function (Roles) {
    Roles["admin"] = "admin";
    Roles["user"] = "user";
})(Roles || (Roles = {}));
const emp = {
    name: "pankaj",
    email: "pankaj@gmail.com",
    password: 123,
    role: Roles.admin
};
const emp1 = {
    name: "mahi",
    email: "mahi@gmail.com",
    password: 123,
    role: Roles.user
};
const isRole = (user1) => {
    //console.log(user1.role);
    if (user1.role === "admin") {
        return "You are admin.";
    }
    else {
        return "You are a normal user.";
    }
};
console.log(isRole(emp1));
const isRole1 = (user1) => {
    //console.log(user1.role);
    const { name, role } = user1;
    return user1.role === "admin" ? `Hello ${name}! You are ${role}.` : `Hello ${name}! You are a normal ${role}.`; // Turnery operator
};
console.log(isRole1(emp));
console.log(isRole1(emp1));
const tip = (tuptup1) => {
    const [name, age, hasDrivingLicence] = tuptup1;
    return `${name} and age ${age} ${hasDrivingLicence === true ? `Congrats!` : `Please get your license.`}`;
};
const tup1 = ["pankaj", 35, false];
//tup1.push("test");
console.log(tup1);
const tup2 = ["mahi", 21, true];
console.log(tip(tup1));
console.log(tip(tup2));
const user = {
    name: "pankaj",
    age: 35
};
const address = {
    city: "Delhi",
    pin: 110042,
    country: "India"
};
const user1 = {
    name: "pankaj",
    age: 35
};
const address1 = {
    name: "mahender",
    city: "Delhi",
    pin: 110042,
    country: "India"
};
const dd = (info, address) => {
    //    return `${user}, ${address}`;
    return { ...user, ...address }; // ... for complete data extraction
};
const myCompleteData = dd(user, address); // intersection
console.log(myCompleteData); // intersection
const myCompleteData1 = dd(user1, address1); // union
console.log(myCompleteData1); // union
// Generics
function abcv(value) {
    // console.log(value);
    return value;
}
const abcv1 = abcv(20);
const abcv2 = abcv("This is generic function");
console.log(abcv1);
console.log(abcv2);
function genrf(ax, bx) {
    // let cx = ax + bx; // There is a type-related issue in your TypeScript code. The + operator is not universally defined for all types. It works for numbers and strings, but not for other types by default. When using generic types, TypeScript doesn't know how to handle the + operation unless you provide a constraint or type that guarantees it.
    let cx = ax + bx;
    return cx;
}
const v1 = genrf(15, 20);
const v2 = genrf("Hello World! ", "My name is pankaj");
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
function genrfa(ax1, bx1) {
    let cx = ax1 + bx1;
    return cx;
}
const v1a = genrfa(15, " age");
const v2a = genrfa("I am ", "function overloading with generics..");
console.log(v1a);
console.log(v2a);
