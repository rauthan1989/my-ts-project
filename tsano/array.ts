// method to declare Array
// (1) using squre brackets
const sqarre:number[] = [20,10,20,10,20];
// (2) using constructor
const construc:number[] = new Array(1,2,3,4,5,6);
//(3) using Array.of method
//const ofMethod:string[] = Array.of("Pankaj","Singh","Rauthan");
//------------------------------------------------


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
const arrarLoopAverage = (arre1:any)=>{
    var abg = 0;
    let i:number;
    for(i=0;i<arre1.length; i++){
        abg = abg + arre1[i];
    }
    return abg/arre1.length;
}
const arre1:number[] = [20,30,40,50,600];
console.log("test " + arrarLoopAverage(arre1));


const fruits1:string[] = ["one", "two", "three"];
const upfruits = fruits1.push("four");
console.log(upfruits);
console.log(fruits1);
//const popy = fruits1.pop();
//console.log(popy);

for(let i=0;i<fruits1.length; i++){
    console.log(fruits1[i]);
}
for(const fr of fruits1){
    console.log(fr);
}
for(const fr1 in fruits1){
    console.log(fr1);
}
fruits1.forEach((value)=> console.log(value))