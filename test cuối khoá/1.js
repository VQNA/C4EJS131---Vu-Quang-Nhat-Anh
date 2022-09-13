const first_number = parseInt(prompt('Enter first number: '));
const second_number = parseInt(prompt('Enter second number: '));
let prime_number = [];
if (first_number < second_number){
for (let i = first_number; i <= second_number; i++) {
    let state_1 = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            state_1 = 1;
            break;
        }
    }

    if (i > 1 && state_1 == 0) {
        prime_number.push(i)
    }
}
}
else if (first_number > second_number){
    for (let i = second_number; i <= first_number; i++) {
        let state_1 = 0;
    
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                state_1 = 1;
                break;
            }
        }
    
        if (i > 1 && state_1 == 0) {
            prime_number.push(i)
        }
    }
    }
console.log("Prime numbers between", first_number," and", second_number, "are:");
console.log(prime_number)
