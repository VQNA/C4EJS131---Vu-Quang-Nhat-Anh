// - Xây dựng hệ thống yêu cầu người dùng nhập vào ngày tháng năm rồi in ra ngày tháng năm kế tiếp
let prompt = require("prompt-sync")({ sigint: true })


function calendar() {

    let long = [1, 3, 5, 7, 8, 10, 12];
    let date
    do {
        date = parseInt(prompt("> date: ", 0));
    } while (0 >= date || date >= 32);
    let month 
    let state_1 = true
    while (state_1) {
        month = parseInt(prompt("> month: ", 0));
        if (1 <= month && month <= 12) {
            switch (date) {
                case 31:
                    if (long.includes(month) == true) {
                        state_1 = false
                        break
                    }
                    else {
                        console.log(long.includes(month))
                        console.log("month invalid")
                        continue
                    }
                case 30:
                    if (month != 2) {
                        state_1 = false
                        break
                    }
                    else if (month == 2) {
                        console.log("month invalid")
                        continue
                    }
                default:
                    state_1 = false
                    break
            }

        }
        else {
            console.log("month invalid")
            continue
        }
    }
    let year
    let state_2 = true
    while (state_2) {
        year = parseInt(prompt("> year: "));
        if (year >= 0) {
            if (date == 29 && month == 2) {
                    if ((year % 4 == 0 && year % 100 == 0 && year % 400 == 0) || (year % 4 == 0 && year % 100 !== 0)){
                        state_2 = false
                    }
                    else {
                        console.log("year invalid")
                        continue
                    }
                
            }
            else {
                state_2 = false
            }
        }
        else {
            console.log("invalid")
            continue

        }
    }




    switch (date) {
        case 31:
            if (month == 12){
                console.log("tomorrow is 1 / 1 /", (year + 1))
            }
            else{
                console.log("tomorrow is 1 / ", (month + 1), "/", year )
            }
            break
        case 30:
            if (long.includes(month)){
                console.log("tomorrow is", (date +1), "/", month, "/", year)
            }
            else{
                console.log("tomorrow is 1 /", (month + 1), "/", year )
            }
            break

        case 29:
            if (month !== 2){
                console.log("tomorrow is", (date +1), "/", month, "/", year)
            }
            else{
                console.log("tomorrow is 1 /", (month + 1), "/", year )
            }
            break
        
        case 28:
            if (month !== 2){
                console.log("tomorrow is", (date +1), "/", month, "/", year)
            }
            else {
                if ((year % 4 == 0 && year % 100 == 0 && year % 400 == 0) || (year % 4 == 0 && year % 100 !== 0)){
                    console.log("tomorrow is", (date +1), "/", month, "/", year)
                }
                else{
                    console.log("tomorrow is 1 /", (month + 1), "/", year )
                }
            }
            break
        default:
            console.log("tomorrow is", (date +1), "/", month, "/", year)
        }
            
    }
calendar()