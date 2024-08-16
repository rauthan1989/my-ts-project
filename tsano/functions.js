"use strict";
// literals or Backticks
function student(name, age) {
    console.log(`My name is ${name} and my age is ${age}`);
}
student("pankaj", 34);
//arrow function
const arrow = (namea, agea) => {
    console.log(`My name is ${namea} and my age is ${agea}`);
};
arrow("Mahender singh rauthan", 30);
//arrow function with return value
const arrow1 = (name1, age1) => {
    return `My name is ${name1} and age is ${age1}`;
};
const arrowp = arrow1("Pankaj singh rauthan", 35);
console.log(arrowp);
//console.log(arrow1("Pankaj singh rauthan", 41))
//arrow function with return value without return keyword
const arrow2 = (name1, age1) => `My name is ${name1} and age is ${age1}`;
const arrow3 = arrow2("Pankaj singh rauthan", 41);
console.log(arrow3);
//console.log(arrow1("Pankaj singh rauthan", 41))
//palindrome function
const isPalindrome = (palim) => {
    let a = palim.split("").reverse().join("");
    return a === palim;
};
console.log(isPalindrome("12321"));
/// other example
const pal = (p) => {
    let oroginalNum = p;
    let reverse = 0;
    while (p > 0) {
        let x = p % 10;
        reverse = (reverse * 10) + x;
        p = Math.floor(p / 10);
    }
    return oroginalNum === reverse;
};
const pals = pal(121);
if (pals == true) {
    console.log(` Number is palindrome`);
}
else {
    console.log("number is not palindrome");
}
// Default parameter
const dffunction = (name2, ages1 = 10) => {
    if (ages1 < 18) {
        return `My name is ${name2} and i am not adult`;
    }
    else {
        return `My name is ${name2} and i am adult`;
    }
};
console.log(dffunction("pankaj"));
// Optional parameter
const opParameter = (oprs, idd) => {
    if (idd) {
        return `${oprs} and id is ${idd}`;
    }
    else {
        return `${oprs} thank you!`;
    }
};
console.log(opParameter("Hi this is opetional parameter"));
// console.log(opParameter("Hi this is opetional parameter", 10));
