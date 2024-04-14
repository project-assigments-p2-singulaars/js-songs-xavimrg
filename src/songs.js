/*Exercise 1: Get the array of all Artists. 6 features like map, filter, reduce, 
sort and ternary operators (It's mandatory to use them to manipulate arrays) for, 
forEach and if/else*/
function getAllArtists(songs){
    const artist = songs.map((song) => songs.artist);
    console.log(artist);
   
};

//Exercise 2: Get the songs of a certain artist
//function getSongsFromArtist(songs, artist){
  //  const concretesong = songs.find((songs => songs);
   // console.log(title)
//};

function getSongsFromArtist(array, artist){
    let result = array.filter((song) => song.artist === artist);

    return result
};

//Exercise 3: Alphabetic order by title
function orderByTitleAlphabetically(songs) {
    const orderedAlphabetically = songs.sort((a, b) => a.title.localeCompare(b.title));
    return orderedAlphabetically;
};


//Exercise 4: Order by year, ascending
function orderByYear(songs) {
    const orderedByYear = songs.sort((a, b) => a.year - b.year);
    return orderedByYear;
    //Write your code here
};

//Exercise 5: Filter songs by genre


function songsByGenre(songs, genreFilter) {
    const filteredSongs = songs.filter((song) => song.genre.includes(genreFilter));
    return filteredSongs;
}

const rockSongs = songsByGenre(songs, "Rock");
console.log(rockSongs);

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds(songs, duration) {

    //Write your code here
};

//Exercise 7: Get the longest song
function getLongestSong(){
    //Write your code here
};

//Exercise 8: Get the shortest song
//Write the getShortestSong() function




export { getAllArtists, getSongsFromArtist, orderAlphabetically, orderByYear, songsByGenre, minutsToSeconds, getLongestSong } from "./data";
