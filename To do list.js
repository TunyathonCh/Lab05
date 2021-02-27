function keyCode(event){
    var x =event.keyCode;
    if(x==13){
        var li = document.createElement("li");
        var detail = document.getElementById("infotype").value;

        const div = document.createElement("div"); 
        const i = document.createElement("i");
        i.className = "fa fa-trash-o"; 

        div.className ="divstyle"
        div.onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            }
        div.appendChild(i);
        li.appendChild(div);

        ////////////
        var t = document.createElement("p");
        
        t.innerHTML = detail;
        t.onclick = function(){
            this.className = "strikethrough";
            i.style.color = "gray";
        }
        li.appendChild(t);
        

        document.getElementById("myList").appendChild(li);


        


 
    }
}