let music = {
    1: {
        album_title: null,
        artist: null,
        tracks: ['track 1', 'track 2', 'track 3']
    }
}

function crud() {

    let state_0 = true;
    while (state_0) {
        let response = parseInt(prompt('What do you want?'))
        // create

        if (response == 1) {
            let ckey = parseInt(prompt('Name of new key:'));
            let calbum = prompt('Name of new album:');
            let cartist = prompt('Name of new album:');
            let state_1 = true;
            let ctracks = [];
            while (state_1) {
                let ctrack = prompt("Name of new track")
                if (ctrack == null || ctrack == "") {
                    state_1 = false
                }
                else {
                    ctracks.push(ctrack)
                    continue
                }
            }
            music[ckey] = { album_title: calbum, artist: cartist, tracks: ctracks }

        }

        // read
        else if (response == 2) {
            let state_2 = true
            while (state_2) {
                let read_choice = parseInt(prompt("1-all or 2-your choice?"))
                if (read_choice == 1) {
                    console.log(music)
                    state_2 = false

                }
                else if (read_choice == 2) {
                    read_choice_one = prompt("primary key:")
                    console.log(music[read_choice_one])
                    state_2 = false
                }
                else {
                    console.log("Try again")
                    continue
                }
            }
        }

        // update 
        else if (response == 3) {
            let state_3 = true
            let state_3_1 = true
            while (state_3) {
                let update_choice_1 = prompt("Key to be updated:")
                console.log(music[update_choice_1])
                if (update_choice_1 in music) {
                    while (state_3_1) {
                        let update_choice_2 = prompt("What do you want to change? \n 1 - album_title \n 2 - artist \n 3 - tracks \n 4 - Cancel")
                        if (update_choice_2 == 2) {
                            let update_choice_2_2 = prompt("Name of new artist:")
                            music[update_choice_1]["artist"] = update_choice_2_2
                        }
                        if (update_choice_2 == 1) {
                            let update_choice_2_1 = prompt("Name of new album title:")
                            music[update_choice_1]["album_title"] = update_choice_2_1
                        }
                        if (update_choice_2 == 3) {
                            let update_choice_2_3 = prompt("Name of new tracks:")
                            music[update_choice_1]["tracks"] = update_choice_2_3
                        }
                        if (update_choice_2 == 4) {
                            state_3_1 = false

                        }
                        else {
                            console.log("Invalid input")
                            continue
                        }
                    }

                }
                if (update_choice_1 == ""){
                    state_3 = false
                }

            }

        }


        // delete
        else if (response == 4) {
            let state_4 = true
            while (state_4) {
                let delete_choice = prompt("Key to be delete:")
                if (delete_choice in music) {
                    delete music[delete_choice];
                    state_4 = false;
                }
                else if (delete_choice = ""){
                    console.log("canceling...")
                    state_4 = false;
                }
                else {
                    console.log("key does not exist / please try again")
                }
            }
        }

        else if (response == 5) {
            console.log("Exiting...")
            state_0 = false
        }

        else {
            console.log("Try again")
        }
    }
}
crud()