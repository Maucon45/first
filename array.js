// arrrrraaay hat 
let marks=[100,89,90,85,48];
console.log(marks,marks.length);

let heroes=["ironman","hulk","thor","captain"]; //array type is object and mutable
// console.log("call my fav hero",heroes[2]); // thor
// for(i=0;i<heroes.length;i++){
//     console.log(heroes[i])
// }
//or
// for(hero of heroes){
//     console.log(hero);}
// for(mark of marks){
//     sum+=mark;
// }
// console.log("average is ",sum/marks.length);
heroes.push("batman");
deleted = heroes.pop();
heroes.pop();
heroes.pop(); //only two hero left 
console.log(deleted); 
let z=heroes.toString();
console.log(z);
// heroes.unshift(); add element at beg
// heroes.shift(); delete element at beg
// heroes.slice(1,2); //returns a piece of array 
// heroes.splice(1,2,"flash"); //(startindex,delcount,new element)

/*Question****
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift(); //REMOVE 1ST
console.log(companies);
companies.splice(1,1,"Ola"); //REMOVE UBER WITH OLA
console.log(companies);
companies.push("Amazon");    //ADD AMAZON AT LAST
console.log(companies); */

// function myfunc(msg){
//     console.log("Welcome to sms college");
//     console.log("hello fncti"+msg);
// }
// myfunc("hellloo"); //function call

//ARROPW FUNC
// const sum=(a,b)=>{return a+b;}
// const mul=(a,b)=>{return a*b;}
// const sub=(a,b)=>{return a-b;}
// const div=(a,b)=>{return a/b;}

//q1
// sum=0;
// const check=(m)=>{
//     for(i=0;i<m.length;i++){
//         if(m[i]=="a"||m[i]=="e"||m[i]=="i"||m[i]=="o"||m[i]=="u"){
//         console.log(m[i]);
//         sum++;
//         }
//     }
//     console.log(sum);
// };
//ARRAY For each function //higher order function or higher order method
// let  arr=[5,6,7];
// arr.forEach((val)=> {
//     console.log(val*2);
// });

 let  arr=[5,6,7];
// ar.forEach((val,idx,ar)=> {
//     console.log(val*2,idx,ar);
// });

//  const output = arr.reduce((prev,curr)=>{
//     return prev > curr? prev:curr;
//  });
//  console.log(output); //7 used similarly for adding and all the one value return for array

//   filter out the value from array
//  let nums = [4,9,3,6,8,1,2];
//  let evenNums = nums.filter((num) => num % 2 ===  0 );
//  console.log(evenNums);

//   map through an array
// let fruits = ['apple', 'banana','cherry'];
// let colors = fruits.map((fruit) => fruit + " is red");
// console.log(colors);

//  sort array using inbuild methods of javascript
// let students = [{name:"John",age:15}, {name:"Jane", age:12} , {name : "Roger",age : 18}]
// students.sort((a,b) => a.age - b.age);
// console.log(students);
// let n=prompt("Enter a number");
// let array=[];
// for(let i=1 ;i<=n;i++){
//     array.push(i**2);
// }
// const output=array.reduce((prev,curr)=> prev+curr);
// console.log(output);
// alert(output);
