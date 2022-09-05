while (true){
var a = prompt("Nhập 1 số nguyên bất kì: ");
if (a == "del"){
    console.log("Shutting down...")
    break
}
var a = parseInt(a);
let so_du = []
    
    if (a <= 0) {
        console.log("xin hãy nhập 1 số nguyên dương khác 0")
    }
    else if (a >= 1) {
        for (let i = 1; i <= a; i++) {
            if (a % i === 0) {
                so_du.push(i)
            }
        }
        if (so_du.length == 2) {
            console.log(a, "là số nguyên tố")
        }
        else if (so_du.length != 2) {
            console.log(a, "không phải số nguyên tố")
        }
    }
    
}