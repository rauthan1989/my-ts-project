// literals or Backticks
function student(name:string, age:number){
console.log(`My name is ${name} and my age is ${age}`);
}
student("pankaj", 34);


//arrow function
const arrow = (namea:string, agea:number)=>{
    console.log(`My name is ${namea} and my age is ${agea}`);
}
arrow("Mahender singh rauthan", 30);

//arrow function with return value
const arrow1 = (name1:string, age1:number):string =>{
    return `My name is ${name1} and age is ${age1}`
}
const arrowp = arrow1("Pankaj singh rauthan", 35);
console.log(arrowp);
//console.log(arrow1("Pankaj singh rauthan", 41))

//arrow function with return value without return keyword
const arrow2 = (name1:string, age1:number):string => `My name is ${name1} and age is ${age1}`;
const arrow3 = arrow2("Pankaj singh rauthan", 41);
console.log(arrow3);
//console.log(arrow1("Pankaj singh rauthan", 41))

//palindrome function
const isPalindrome = (palim:string):boolean=>{
    let a = palim.split("").reverse().join("");
    return a === palim;
}
console.log(isPalindrome("12321"));

// average of array
const arrarAverage = (arre:number[])=>{
    if(arre.length === 0){
console.log("The array is empty, cannot compute average.");
    }
    const a11 = arre.reduce((acce, arc)=> acce+arc,0);
return a11/arre.length;
}
const arre = [20,10,20,10,20];
console.log(arrarAverage(arre));


// average of array with forloop
const arrarLoopAverage = (arre1)=>{
    var abg = 0;
    let i:number;
    for(i=0;i<arre1.length; i++){
        abg = abg + arre1[i];
    }
    return abg/arre1.length;
}
const arre1 = [20,30,40,50,600];
console.log("test " + arrarLoopAverage(arre1));