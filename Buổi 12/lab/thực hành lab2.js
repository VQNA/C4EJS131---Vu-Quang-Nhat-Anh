let elem = document.getElementById("change-my-life")
let el = document.getElementById("life")
let em = document.getElementById("nope")
function change_rich(){
    if (el.innerHTML === "Tôi nghèo"){
        el.innerHTML = "Tôi giàu sau khi học lập trình tại MindX"
    }
    else if (el.innerHTML === "Tôi giàu sau khi học lập trình tại MindX"){
        el.innerHTML = "Tôi nghèo"
    }
    else {
        return false
    }
}
function nope_response(){
    let text;
    if (window.confirm("Bạn có chắc chắn không muốn thay đổi cuộc đời bạn?") == true){
        text = "Tôi rất tiếc"
        el.innerHTML = text
    }
    else{
        return  
    }
}

