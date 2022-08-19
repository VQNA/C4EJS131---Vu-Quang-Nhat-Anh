const prompt = require("prompt-sync")({ sigint: true})
let operator = prompt('enter operator(either +, -, * or /) :');
var a = prompt("first number: ");
var a = parseInt(a);
var b = prompt("second number: ");
var b = parseInt(b)
let result = 0
if (operator === '+'){
    let result = a + b
    console.log("the result is:", result)
}
else if (operator === '-'){
    let result = a - b
    console.log("the result is:", result)
}
else if (operator === '*'){
    let result = a * b
    console.log("the result is:", result)
}
else if (operator === '/'){
    let result = a / b
    console.log("the result is:", result)
}
