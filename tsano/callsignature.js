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
