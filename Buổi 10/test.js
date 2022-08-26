let music = {
    1:{
        album_title: null,
        artist: null,
        tracks:['track 1', 'track 2', 'track 3']
    }
}

console.log(music)

delete music["1"]
console.log(music)