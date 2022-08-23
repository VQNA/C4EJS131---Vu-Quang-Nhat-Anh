let prompt = require("prompt-sync")({ sigint: true })

function LogIn(){
    let state_1 = true
    while (state_1) {
    username = prompt("Username:")
    if (username === "" || username === null){
        state_1 = false
        return
    }
    else if (username === "Admin"){
        state_1 = false
        let state_2 = true
        while (state_2){
        password = prompt("Password:")
        
        if (password === "mindX"){
            console.log("Welcome!")
            state_2 = false
        }
        else if (password === "" || password === null){
            console.log("Exiting")
            state_2 = false
            return
        }
        else {
            console.log("Wrong password")
        }
    }
    }
    
    else {
        console.log("Try Again!")
    }
}
}
LogIn()