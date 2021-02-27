function nightmode(){
    document.getElementById("night").innerHTML = "day";
    document.getElementById("wordred").style.color ="blue";
    document.getElementById("changeh1").innerHTML = "GOOD NIGHT";
    document.getElementById("changeh2").innerHTML = "This is night time!";
    document.getElementById("bg1").style.backgroundColor = 'black';
    document.getElementById("wh1").style.color="white";
    document.getElementById("wh2").style.color="white";
    document.getElementById("wh3").style.color ="white";
    document.getElementById("wh4").style.color ="white";

    button2.classList.remove('hidden');
    button1.classList.add('hidden');
  
}
function daymode(){
    document.getElementById("night").innerHTML = "night";
    document.getElementById("wordred").style.color ="red";
    document.getElementById("changeh1").innerHTML = "GOOD MORNING";
    document.getElementById("changeh2").innerHTML = "This is day time!";
    document.getElementById("bg1").style.backgroundColor = 'white';
    document.getElementById("wh1").style.color="black";
    document.getElementById("wh2").style.color="black";
    document.getElementById("wh3").style.color ="black";
    document.getElementById("wh4").style.color ="black";

    button2.classList.add('hidden');
    button1.classList.remove('hidden');
  
}

