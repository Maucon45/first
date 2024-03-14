

var button = document.querySelector( ".ri-arrow-right-up-line" );
var flag = 0
button.addEventListener("click", function() {
    if(flag==0){
    button.style.backgroundColor = "red"
    flag=1}
    else{
        button.style.backgroundColor="black"
        flag=0
    }
})