// method to declare Array
// (1) using squre brackets
var sqarre = [20, 10, 20, 10, 20];
// (2) using constructor
var construc = new Array(1, 2, 3, 4, 5, 6);
//(3) using Array.of method
//const ofMethod:string[] = Array.of("Pankaj","Singh","Rauthan");
//------------------------------------------------
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
var fruits1 = ["one", "two", "three"];
var upfruits = fruits1.push("four");
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
