let fname1 = "Mahi Singh";
let lname1 = "Rauthan";
let fullname = fname1 +" : "+ lname1;
console.log(fullname);


let st: string = "Hello my name is Mahender singh rauthan."; 
let strLength: number = st.length; 
console.log(strLength); 

let str2:string = "this is a uppercase sentence";
let upperCaseStr = str2.toUpperCase();
console.log(upperCaseStr);

let str3:string = "this is a lowercase sentence";
let lowerCaseStr = str3.toLowerCase();
console.log(lowerCaseStr);


//boolean value funcion start
function isEven(f1:number):boolean {
return f1 % 2 == 0;
}
var res:boolean = isEven(4);
console.log(res);


function divby4nd8(f2:number):boolean{
    return f2 % 4 == 0 && f2 % 8 == 0;
}
var divBy4and8:boolean = divby4nd8(24);
console.log(divBy4and8);
//boolean value funcion end



//any and unknown
//let a:string ="where is my type";
let a1:any ="where is my type";
a1=100;
console.log(a1);

let b1:unknown;
b1 = "String, ";
b1 = 10;
b1 = true;
if(typeof b1 == "number"){
console.log(b1 + " my type is number..");
} else if(typeof b1 == "boolean") {
    console.log(b1 + " my type is boolean");    
} else {
console.log(b1 + " my type is string..")
}



// type guard
const fave =(hobby:string | string[]) => {
if(typeof hobby === "object" && Array.isArray(hobby)){
    return hobby.map(()=>{});
} else {
    console.log(hobby);
}
}
fave("pankaj");
const did = fave(["Mahender", "Rauthan"]);
console.log(did);