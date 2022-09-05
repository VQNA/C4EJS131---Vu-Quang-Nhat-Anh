// const prompt = require("prompt-sync")({ sigint: true})
//tìm số chẵn trong array
// let array = [2, 5, 29, 48, 55];
// for (var i = 0; i < array.length; i++){
//     c = array[i]
//     if (c%2===0){
//         console.log(c)
//     }
// }

//trong array in ra những số ở vị trí chẵn
// let array_2 = [2, 5, 17, 43, 8, 11, 28];
// for (var i = 0; i < array_2.length; i++){
//     if (i%2===0){
//         console.log(array_2[i])
//     }
// }

//cho 3 số a,b,c là 3 số trong pt bậc hai ax2 + bx + c = 0, tìm nghiệm của phương trình:
let a = parseInt(prompt("> first number"));
let b = parseInt(prompt("> second number"));
let c = parseInt(prompt("> third number"));
let x = [];
let delta = b**2 - 4*a*c;
if (delta == 0){
    x.push((-b)/(2*a))
    console.log(x)
}
else if (delta < 0){
    console.log("Vô nghiệm")
}
else if (delta > 0){
    x.push((((-b)+Math.sqrt(delta))/(2*a)))
    x.push((((-b)-Math.sqrt(delta))/(2*a)))
    console.log(x)
}