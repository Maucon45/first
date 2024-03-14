// alert("hellooooo")
// console.dir(window.document) //to display windows object which consist of html css properties
// let heading =document.getElementById("bada")  by id picking 
// heading.innerHTML="Hello World"
// let headings = document.getElementsByClassName("bada-class") by class picking
// console.dir(headings)
// console.log(headings)

// 1111. Selection of an Element 
// var a =document.querySelector("h1")
// console.log(a)


//22222. Changing HTML
// var a =document.querySelector("h1")
// a.innerHTML= "I am H1 tag"
// console.log(a)


//33333.Changing CSS
// var a =document.querySelector("h1")
// var b = document.querySelector("body")
// b.style.backgroundColor ="yellow"
// a.style.color ="red"
// console.log(a)


//44444. Adding Event Listeners to
// var a =document.querySelector("h1")
// a.addEventListener('click',function(){
//     a.style.backgroundColor = 'grey'
//     a.style.color = 'white'
// })
// var b =document.querySelector("h2")
// b.addEventListener('click',function(){
//     b.style.backgroundColor = 'yellow'
//     b.style.color = 'red'
// })

// var h = document.querySelectorAll("h1") selects all h1 tags insider
// h.innerhtml="<h1>hello world</h1>" <-- this will display  hello world in h1 size

// h.innerContent ="<h1>hello world</h1>" <-- this will display <h1>hello world</h1>

// BULB PROGRAM
// var bulb = document.querySelector("#bulb");
// var button = document.querySelector( "button" );
// var flag = 0
// button.addEventListener("click", function() {
//     if(flag==0){
//     bulb.style.backgroundColor = "YELLOW"
//     button.innerHTML="Band kro paisa lgta";
//     flag=1}
//     else{
//         bulb.style.backgroundColor="black"
//         button.innerHTML="Aee Chalu Kr"
//         flag=0
//     }
// })

CSS
/* #bulb{
    height: 300px;
    width: 300px;
    border-radius: 50%;
    border: 4px solid black;
    background-color: #000;
} */
