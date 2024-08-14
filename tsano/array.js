// method to declare Array
// how we can defile array
var a5 = [];
// (1) using squre brackets
var sqarre = [20, 10, 20, 10, 20];
// (2) using constructor
var construc = new Array(1, 2, 3, 4, 5, 6);
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
var fruits1 = ["one", "two", "three"];
var upfruits = fruits1.push("four1");
console.log(upfruits);
console.log(fruits1);
//const popy = fruits1.pop();
//console.log(popy);
for (var i = 0; i < fruits1.length; i++) {
    console.log(fruits1[i]);
}
for (var _i = 0, fruits1_1 = fruits1; _i < fruits1_1.length; _i++) {
    var fr = fruits1_1[_i];
    console.log(fr);
}
for (var fr1 in fruits1) {
    console.log(fr1);
}
fruits1.forEach(function (value) { return console.log(value); });
// Arry map method
var amp = [10, 20, 40, 30, 5];
var armap = amp.map(function (values) { return values * 2; });
console.log(armap);
// Convert nunber to string with map method
var celm = [10, 20, 40, 30, 5];
var currentNum = celm.map(function (curelm) { return curelm.toString(); });
console.log(currentNum);
// convert number to string Map method can not filter
var celm1 = [10, 20, 40, 30, 5];
var currentNum1 = celm1.map(function (curelm1) { return curelm1 > 30; });
console.log(currentNum1);
//filtering even number
var currentNum2 = celm1.filter(function (curelm1) { return curelm1 % 2 === 0; });
console.log(currentNum2);
//filtering even number
var currentNum3 = celm1.filter(function (curelm1) { return curelm1 < 30; });
console.log(currentNum3);
// change array in uppercase
var animal = ["dog", "cat", "wolf", "tiger"];
var upcase = animal.map(function (a) { return a.toUpperCase(); });
console.log(upcase);
// square of given array number
var sq = [10, 20, 40, 30, 5];
var squares = sq.map(function (x) { return x * x; });
console.log(squares);
// find max number
var maxn = function (num) {
    var i = 0;
    var x = num[0];
    for (i = 0; i < num.length; i++) {
        if (x < num[i]) {
            x = num[i];
        }
    }
    return x;
};
var maximus = [-10, 10, -20, -400, -30, -50];
console.log(maxn(maximus) + " is largest value.");
// find arrey with largest number of characters
var l1 = ["discos", "cricket", "football", "race", "hockey", "plays"];
var filterarreay = function (l1) {
    var a5 = [];
    for (var i = 0; i < l1.length; i++) {
        if (l1[i].length > 4) {
            a5.push(l1[i]);
        }
    }
    return a5;
};
var filterarreay1 = filterarreay(l1);
console.log(filterarreay1);
