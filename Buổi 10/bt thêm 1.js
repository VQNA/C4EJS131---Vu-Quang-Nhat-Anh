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
function keycall(object, result = []){
    let keys = result;
    for(let key in object){
        keys.push(key)
        if (typeof object[key] === 'object'){
            keycall(object[key], keys)
        }
       
        }
        return(keys)
    }

console.log('keys:', keycall(user))