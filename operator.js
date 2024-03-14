let a=3;
let b=4;
// console.log("a + b = "+(a+b));
// console.log("a - b = "+(a-b));
// console.log("a * b = "+(a*b));
// console.log("a / b = "+(a/b));
// console.log("a % b = "+(a%b));
// console.log("a**b = "+(a**b));
// console.log("a++ = "+(a++)); //Unary Operator //a = 3 (incremented but not used)
// console.log("++a = "+(++a)); //a = 5(incremented and used)
// console.log("a==b",a==b);
// console.log("a!=b",a!=b); // returns true for same value of string and number
// console.log("a!==b",a!==b);
// console.log("a===b",a===b); //stricter version  of ==, checks both type and value
// console.log("a!==b",a!==b);
// console.log("a<=b",a<=b);
// console.log("a>=b",a>=b);
// console.log(a>=1 && b>=1); //&& operator(AND) logical
// console.log(a>=1 || b>=5); //|| operator(OR)  logical
// console.log(!(a>=1 && b>=1)); //NOT logical

 // CONDITIONAL OPERATORS
// let color="black";
// if(a>b){
// color="blue";
// }else if(a<b){
//     color="red";
// }else{
//     color= "white";
// }
// console.log("The color is: "+color);

//Ternary Operators
let age=17;
ans=age>=18?"Adult":"Minor";

//Switch
// const exp="Apple";
// switch(exp){
//     case "oranges":
//         console.log("I like oranges");
//         break;
//     case "Apple":
//         console.log("I like Apple");
//         break;
//     case "banana":
//         console.log("I like bananas");      
//     default:
//         console.log("I do not like fruit")

// }

let naam=prompt("Enter your name"); //ask ing user for input and storing
alert(`Hello ${naam} welcome to our website`); //display popup
// console.log(naam); //print

// let num=prompt("Number dalo yaar");
// if(num%5==0){
//     console.log(num+" is divisible by 5");
//     alert("si hai kat jaega")
//     }else{
//         console.log(num+ "is not divisible by 5");
//         alert("kuch bhi nahi katega");
// }
//Loops
// for(let i=0 ; i<6 ; i++){
//     console.log("Hello World");
//     }

//ARRAY
// const arr=[23,45,67,9];
// console.log(arr[3]);

//string
let obj={
    item:"pen",
    PRICE:10,
};
//console.log("THE COST OF ",obj.item,"is",obj.PRICE);
// let output=`THE COST OF ${obj.item} is ${obj.PRICE} and \n ${1+2+3}`; //using (string Interpolation) template literal ` // converts whole into string 
// console.log(output);
// let specialString = `This is a template literal`;

//string methods
let str="  kuch       smj      ni      aara";
/* 
let abc=str.toUpperCase();  // AS STRINGS ARE IMMUTABLE IN JAVA
let PQR=str.trim(); // TRIM BEG AND SPACE AT LAST
console.log(PQR);
str = str.slice(2,9); //kuch
let mno="helloooo" 
a=str.concat(mno); //joins 2 or more string or str1 + str2
console.log(str);
str.replace(searchVal,newVal)
str.charAt(idx)
*/
// let fn=prompt("Enter your name");
// alert("your username is @"+fn+fn.length);
// console.log("@"+fn+fn.length); //to generate username based on the input

