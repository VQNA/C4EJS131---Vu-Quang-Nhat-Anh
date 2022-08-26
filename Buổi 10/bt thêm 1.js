var user = {
    name: "Hieu",
    age: "18",
    appearance: {
        hairColor: 'black',
        skinColor: 'yellow',
        height: 1700,
        weight:68
    }
}
function keycall(a){
    for(let key in a){
        console.log(key)
        
        if (key == "appearance"){
        keycall(a[key])}
    }
}
keycall(user)