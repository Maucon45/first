const product={
    name:"Parker Ball Pen",
    rating:4.3,
    inDeal:true,
    price:270,
    offer:"20%"
}
console.log(product);
const profile={
    username:"om_ahuja3000",
    isFollow:false,
    followers:49,
    following:156,
    posts:20
}
profile.username="maucon3000"; //update
delete profile.following;
console.log(profile); //print
console.log(typeof profile);//check the data type of object 