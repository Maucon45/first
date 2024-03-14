var add= document.querySelector("#add");
var turn= document.querySelector("h5");
var remove= document.querySelector("#Remove");
flag=0;
add.addEventListener("click", function() {
        if(flag==0){
        add.style.backgroundColor = "red"
        add.innerHTML="Remove";
        turn.innerHTML="Friends";
        turn.style.color ="green";
        flag=1}
        else if(flag==1){
            add.style.backgroundColor = "aqua"
            add.innerHTML="Add Friend";
            turn.innerHTML="Stranger";
            turn.style.color ="red";
            flag=0
        }
})