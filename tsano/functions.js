// literals or Backticks
function student(name, age) {
    console.log("My name is ".concat(name, " and my age is ").concat(age));
}
student("pankaj", 34);
//arrow function
var arrow = function (namea, agea) {
    console.log("My name is ".concat(namea, " and my age is ").concat(agea));
};
arrow("Mahender singh rauthan", 30);
//arrow function with return value
var arrow1 = function (name1, age1) {
    return "My name is ".concat(name1, " and age is ").concat(age1);
};
var arrowp = arrow1("Pankaj singh rauthan", 35);
console.log(arrowp);
//console.log(arrow1("Pankaj singh rauthan", 41))
//arrow function with return value without return keyword
var arrow2 = function (name1, age1) { return "My name is ".concat(name1, " and age is ").concat(age1); };
var arrow3 = arrow2("Pankaj singh rauthan", 41);
console.log(arrow3);
//console.log(arrow1("Pankaj singh rauthan", 41))
//palindrome function
var isPalindrome = function (palim) {
    var a = palim.split("").reverse().join("");
    return a === palim;
};
console.log(isPalindrome("12321"));
/// other example
var pal = function (p) {
    var oroginalNum = p;
    var reverse = 0;
    while (p > 0) {
        var x = p % 10;
        reverse = (reverse * 10) + x;
        p = Math.floor(p / 10);
    }
    return oroginalNum === reverse;
};
var pals = pal(121);
if (pals == true) {
    console.log(" Number is palindrome");
}
else {
    console.log("number is not palindrome");
}
// Default parameter
var dffunction = function (name2, ages1) {
    if (ages1 === void 0) { ages1 = 10; }
    if (ages1 < 18) {
        return "My name is ".concat(name2, " and i am not adult");
    }
    else {
        return "My name is ".concat(name2, " and i am adult");
    }
};
console.log(dffunction("pankaj"));
// Optional parameter
var opParameter = function (oprs, idd) {
    if (idd) {
        return "".concat(oprs, " and id is ").concat(idd);
    }
    else {
        return "".concat(oprs, " thank you!");
    }
};
console.log(opParameter("Hi this is opetional parameter"));
// console.log(opParameter("Hi this is opetional parameter", 10));
