
function numberOneTriangle(number){
let pyramid = "";
for (let i = 1; i <= number; i++){
    for (let j = 1 ; j <= i; j++){
        pyramid += "*"
    }
    pyramid += "\n"
}
console.log(pyramid)
}
numberOneTriangle(7)

