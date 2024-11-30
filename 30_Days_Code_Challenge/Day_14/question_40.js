"use strict";
// Question 40: Album: Create objects for music albums.
function make_Album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_Album("Shah Jahan", "Bewafa", '43')); // Direct function call 
let album1 = make_Album("Kamran", "hawa"); // Variable declared and then get output
console.log(album1);
