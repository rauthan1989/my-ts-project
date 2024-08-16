var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var student5 = {
    name: 'pankaj',
    age: 20,
    greet: function (country) { return "my name is ".concat(student5.name, " and my age is ").concat(student5.age, " and country is ").concat(country); }
};
var student6 = {
    name: 'Mahender',
    age: 40,
    greet: function (country) { return "my name is ".concat(student6.name, " and my age is ").concat(student6.age, " and country is ").concat(country); }
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
var emp = {
    name: "pankaj",
    email: "pankaj@gmail.com",
    password: 123,
    role: Roles.admin
};
var emp1 = {
    name: "mahi",
    email: "mahi@gmail.com",
    password: 123,
    role: Roles.user
};
var isRole = function (user1) {
    //console.log(user1.role);
    if (user1.role === "admin") {
        return "You are admin.";
    }
    else {
        return "You are a normal user.";
    }
};
console.log(isRole(emp1));
var isRole1 = function (user1) {
    //console.log(user1.role);
    var name = user1.name, role = user1.role;
    return user1.role === "admin" ? "Hello ".concat(name, "! You are ").concat(role, ".") : "Hello ".concat(name, "! You are a normal ").concat(role, "."); // Turnery operator
};
console.log(isRole1(emp));
console.log(isRole1(emp1));
var tip = function (tuptup1) {
    var name = tuptup1[0], age = tuptup1[1], hasDrivingLicence = tuptup1[2];
    return "".concat(name, " and age ").concat(age, " ").concat(hasDrivingLicence === true ? "Congrats!" : "Please get your license.");
};
var tup1 = ["pankaj", 35, false];
//tup1.push("test");
console.log(tup1);
var tup2 = ["mahi", 21, true];
console.log(tip(tup1));
console.log(tip(tup2));
var user = {
    name: "pankaj",
    age: 35
};
var address = {
    city: "Delhi",
    pin: 110042,
    country: "India"
};
var user1 = {
    name: "pankaj",
    age: 35
};
var address1 = {
    name: "mahender",
    city: "Delhi",
    pin: 110042,
    country: "India"
};
var dd = function (info, address) {
    //    return `${user}, ${address}`;
    return __assign(__assign({}, user), address); // ... for complete data extraction
};
var myCompleteData = dd(user, address); // intersection
console.log(myCompleteData); // intersection
var myCompleteData1 = dd(user1, address1); // union
console.log(myCompleteData1); // union
// Generics
function abcv(value) {
    // console.log(value);
    return value;
}
var abcv1 = abcv(20);
var abcv2 = abcv("This is generic function");
console.log(abcv1);
console.log(abcv2);
function genrf(ax, bx) {
    var cx = ax + bx;
    return cx;
}
var v1 = genrf(10, 20);
var v2 = genrf("Hello World! ", "My name is pankaj");
console.log(v1);
console.log(v2);
