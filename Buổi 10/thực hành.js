let music = {
    1:{
        album_title: null,
        artist: null,
        tracks:['track 1', 'track 2', 'track 3']
    }
}
console.log(music[1])

let two = Object.create(music[1])
console.log("this is: ", two)