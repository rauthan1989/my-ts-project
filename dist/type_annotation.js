"use strict";
let fname1 = "Mahi Singh";
let lname1 = "Rauthan";
let fullname = fname1 + " : " + lname1;
console.log(fullname);
let st = "Hello my name is Mahender singh rauthan.";
let strLength = st.length;
console.log(strLength);
let str2 = "this is a uppercase sentence";
let upperCaseStr = str2.toUpperCase();
console.log(upperCaseStr);
let str3 = "this is a lowercase sentence";
let lowerCaseStr = str3.toLowerCase();
console.log(lowerCaseStr);
//boolean value funcion start
function isEven(f1) {
    return f1 % 2 == 0;
}
var res = isEven(4);
console.log(res);
function divby4nd8(f2) {
    return f2 % 4 == 0 && f2 % 8 == 0;
}
var divBy4and8 = divby4nd8(24);
console.log(divBy4and8);
//boolean value funcion end
//any and unknown
//let a:string ="where is my type";
let a1 = "where is my type";
a1 = 100;
console.log(a1);
let b1;
b1 = "String, ";
b1 = 10;
b1 = true;
if (typeof b1 == "number") {
    console.log(b1 + " my type is number..");
}
else if (typeof b1 == "boolean") {
    console.log(b1 + " my type is boolean");
}
else {
    console.log(b1 + " my type is string..");
}
