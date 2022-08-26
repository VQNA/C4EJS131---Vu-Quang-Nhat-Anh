
let n_array = []
function add_value_to_array(){
    let state_1 = true
    while (state_1){
        let n_array_element = prompt("Insert elements of array:");
        if (n_array_element == null || n_array_element == ""){
            state_1 = false
        }
        else {
            n_array.push(n_array_element)
        }
        
    }
    
    let i_element = prompt("Element to be inserted:");

    let state_2 = true
    while (state_2){
        let i_position = prompt("position to be inserted:");
        if (i_position > n_array.length){
            console.log("invalid input")
        }
        else{
            n_array.splice(i_position, 0, i_element);
            state_2 = false
        }
        }

    console.log(n_array)
    }

add_value_to_array()