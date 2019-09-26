require("dotenv").config();
//variables//
var axios = require("axios");
var moment = require("moment");
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var fs = require('fs');
var spotify = new Spotify(keys.spotify);
var input = process.argv[2;
var searchType = process.argv.splice(3).join();

//If else statements for uer input//

//OMDB//

if (input === 'movie-this'){
  movieThis(searchType);
}
//BANDS IN TOWN//
else if (input=== 'concert-this'){
  concertThis(searchType);
}
//SPOTIFY//
else if(input === 'spotify-this-song'){
  spotifyTrack(searchType);
}
else if (input === 'do-what-it-says'){
  doWhatItSays(searchType);
}
else{
  console.log('Enter valid command');
}

//END ELSE IF STATEMENTS//

//START OMDB//
function movieThis(movie){
  var movieQuery = movie || "Tropic Thunder"

  axios.get("" + movieQuery + "").then(function(){
  var divider = "\n------------------------------------\n\n";
  var jsonData = response.data;

  if (jsonData.title != undefined){
  }
  else {
  }

  var movieData = [
    "Title: " + jsonData.Title,
    "Year: " + jsonData.Year,
    "imdb Rating: " + jsonData.imdbRating,
    "Country: " + jsonData.Country,
    "Language: " + jsonData.Language,
    "Plot: " + jsonData.Plot,
    "Cast: " + jsonData.Person,
  ].join("\n\n");

  fs.appendFile("log.txt", movieData + divider, function(err){
    if(err) throw err;
    console.log(divider + movieData);
  });
})

}
