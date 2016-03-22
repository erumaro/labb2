function addDiv(){
    var div = document.getElementById("todo").appendChild("div").classList.add("row item");
    div.innerHTML = this.value;
}

function add(){
    var inp = document.getElementsByTagName("input");
    inp.addEventListener("input", addDiv);
}