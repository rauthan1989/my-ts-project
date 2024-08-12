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
// average of array
var arrarAverage = function (arre) {
    if (arre.length === 0) {
        console.log("The array is empty, cannot compute average.");
    }
    var a11 = arre.reduce(function (acce, arc) { return acce + arc; }, 0);
    return a11 / arre.length;
};
var arre = [20, 10, 20, 10, 20];
console.log(arrarAverage(arre));
// average of array with forloop
var arrarLoopAverage = function (arre1) {
    var abg = 0;
    var i;
    for (i = 0; i < arre1.length; i++) {
        abg = abg + arre1[i];
    }
    return abg / arre1.length;
};
var arre1 = [20, 30, 40, 50, 600];
console.log("test " + arrarLoopAverage(arre1));
