const prompt = require("prompt-sync")({ sigint: true })

let student = {
    firstname: "John",
    age:18,
}

console.log(student)


let {firstname, age} = student

console.log(student)
