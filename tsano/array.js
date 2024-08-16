"use strict";
// method to declare Array
//  // Initialize an empty array
var a5 = [];
// (1) using squre brackets
const sqarre = [20, 10, 20, 10, 20];
// (2) using constructor
const construc = new Array(1, 2, 3, 4, 5, 6);
//(3) using Array.of method
//const ofMethod:string[] = Array.of("Pankaj","Singh","Rauthan");
//------------------------------------------------
// average of array
// const arrarAverage = (arre:number[])=>{
//     if(arre.length === 0){
// console.log("The array is empty, cannot compute average.");
//     }
//     const a11 = arre.reduce((acce, arc)=> acce+arc,0);
// return a11/arre.length;
// }
// const arre = [20,10,20,10,20];
// console.log(arrarAverage(arre));
// average of array with forloop
// const arrarLoopAverage = (arre1:any)=>{
//     var abg = 0;
//     let i:number;
//     for(i=0;i<arre1.length; i++){
//         abg = abg + arre1[i];
//     }
//     return abg/arre1.length;
// }
// const arre1:number[] = [20,30,40,50,600];
// console.log("test " + arrarLoopAverage(arre1));
const fruits1 = ["one", "two", "three"];
const upfruits = fruits1.push("four1");
console.log(upfruits);
console.log(fruits1);
//const popy = fruits1.pop();
//console.log(popy);
for (let i = 0; i < fruits1.length; i++) {
    console.log(fruits1[i]);
}
for (const fr of fruits1) {
    console.log(fr);
}
for (const fr1 in fruits1) {
    console.log(fr1);
}
fruits1.forEach((value) => console.log(value));
// Arry map method
const amp = [10, 20, 40, 30, 5];
const armap = amp.map((values) => values * 2);
console.log(armap);
// Convert nunber to string with map method
const celm = [10, 20, 40, 30, 5];
const currentNum = celm.map((curelm) => curelm.toString());
console.log(currentNum);
// convert number to string Map method can not filter
const celm1 = [10, 20, 40, 30, 5];
const currentNum1 = celm1.map((curelm1) => curelm1 > 30);
console.log(currentNum1);
//filtering even number
const currentNum2 = celm1.filter((curelm1) => curelm1 % 2 === 0);
console.log(currentNum2);
//filtering even number
const currentNum3 = celm1.filter((curelm1) => curelm1 < 30);
console.log(currentNum3);
// change array in uppercase
const animal = ["dog", "cat", "wolf", "tiger"];
const upcase = animal.map((a) => a.toUpperCase());
console.log(upcase);
// square of given array number
const sq = [10, 20, 40, 30, 5];
const squares = sq.map((x) => x * x);
console.log(squares);
// find max number
const maxn = (num) => {
    let i = 0;
    var x = num[0];
    for (i = 0; i < num.length; i++) {
        if (x < num[i]) {
            x = num[i];
        }
    }
    return x;
};
const maximus = [-10, 10, -20, -400, -30, -50];
console.log(maxn(maximus) + " is largest value.");
// find arrey with largest number of characters
const l1 = ["discos", "cricket", "football", "race", "hockey", "plays"];
const filterarreay = (l1) => {
    var a5 = []; // Initialize an empty array
    for (let i = 0; i < l1.length; i++) {
        if (l1[i].length > 4) {
            a5.push(l1[i]); // Use push to add the element to the next available index
            //    a5[i] = l1[i]; // [ 'discos', 'cricket', 'football', <1 empty item>, 'hockey', 'plays' ] .... The empty item appears in your array because you're assigning the filtered elements directly to a5[i], which means you're using the same index i from the original array. When an element doesn't meet the condition, it leaves a "gap" (an empty item) in the new array at that index.
        }
    }
    return a5; // Return the array containing all matching elements
};
const filterarreay1 = filterarreay(l1);
console.log(filterarreay1);
