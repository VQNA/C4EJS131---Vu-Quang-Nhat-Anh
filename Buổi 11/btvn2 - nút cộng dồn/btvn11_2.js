elem = document.getElementById("btn")
function increasing(){
    elem.innerHTML = parseInt(elem.innerHTML) + 1
    console.log(elem.innerHTML)
}
elem.onclick = increasing