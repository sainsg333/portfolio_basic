var b = document.querySelectorAll(".info h1")[0];
setTimeout(() => {
b.innerHTML = "<h1>SAI<span> NSG</span></h1>" ;
}, 3000);

var j=1;
images=[];
for(i=1;i<=4;i++){
    images[i]= `image${i}.jpg`;
}
function scro(){
    document.slide.src= images[j];
    if(j < images.length-1){
        j++;
    }else{
        j=1;
    }
    setTimeout("scro()",3000);
}
window.onload = scro;
var b1 = document.querySelector("#btn1");
var b2 = document.querySelector("#btn2");
var scroll1 = document.querySelector('.slides img');
scroll1.setAttribute('src','scroll1.jpg');
