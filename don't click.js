function button1(){
    alert(document.getElementById("b1").innerHTML+' : Why you clicked me');
    document.getElementById("b1").style.backgroundColor="black";
    document.getElementById("b1").style.color="white";
}
function button2(){
    alert(document.getElementById("b2").innerHTML+' : Why you clicked me');
    document.getElementById("b2").style.backgroundColor="black";
    document.getElementById("b2").style.color="white";
}
function button3(){
    alert(document.getElementById("b3").innerHTML+' : Why you clicked me');
    document.getElementById("b3").style.backgroundColor="black";
    document.getElementById("b3").style.color="white";
}
function button4(){
    alert(document.getElementById("b4").innerHTML+' : Why you clicked me');
    document.getElementById("b4").style.backgroundColor="black";
    document.getElementById("b4").style.color="white";
}

var header = document.querySelector(".header");
header.addEventListener('click',clickh1);
  

function clickh1(){
    var x, i;
    x = document.querySelectorAll(".header");
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML = "Hi.";
    }
}
