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