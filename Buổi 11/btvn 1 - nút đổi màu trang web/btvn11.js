let elm = document.getElementById("bdy")
let elem = document.getElementById("btn")
function changecolor(){
    if (elm.style.backgroundColor == "white"){
        elm.style.backgroundColor="red";
    }
    else if (elm.style.backgroundColor == "red"){
        elm.style.backgroundColor="white";
    }
    else{
        return false
    }
}
elem.onclick = changecolor
