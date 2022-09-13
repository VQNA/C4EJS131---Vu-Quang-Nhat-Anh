elem = document.getElementById("btn")
function increasing(){
    elem.innerHTML = parseInt(elem.innerHTML) + 1
}
elem.onclick = increasing