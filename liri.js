require("dotenv").config();
//variables//
let axios = require("axios");
let moment = require("moment");
let Spotify = require('node-spotify-api');
let keys = require("./keys.js");
let fs = require('fs');
let spotify = new Spotify(keys.spotify);
let input = process.argv[2;
let searchType = process.argv.splice(3).join();

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
  let movieQuery = movie || "Tropic Thunder"

  axios.get("" + movieQuery + "").then(function(){
  let divider = "\n------------------------------------\n\n";
  let jsonData = response.data;

  if (jsonData.title != undefined){
  }
  else {
  }

  let movieData = [
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

function concertThis(concert) {
  let concertQueury = concert || "'Sweet Dreams' by the Eurythmics" //IF THERE IS NO USER INPUT, IT AUTOMATICALLY SEARCHES FOR THIS LET STATEMENT

  axios.get("--INSERT BANDS IN TOWN HERE") + concertQueury + "/events?app_id=codingbootcamp").then(function){
  let jsonData = response.data;
  for (let i = 0; i < jsonData.length; i++){
    let divider = "\n---------------------------------\n\n";
    let concertFind = [
      "\nVenue Name: " + jsonData[i].venue.name,
      "\nLocation: " + jsonData[i].venue.city,
      "\nDate of Concert: " + moment(jsonData[i].dateTime).format("L"),
    ].join("\n\n")

    fs.appendFile("log.txt", concertFind + divider, function(err){
      if(err) throw err;
      console.log(divider + concertFind);
    });
    console.log(divider + concertFind);
    // console.log(concertThis);
  }

});

}

//SPOTIFY//

function spotifyTrack(track);

spotify.search({type: 'track', query:track }, function(err, response){
  if (err){
    return console.log('Error occurred: ' + err);
  }
  let jsonData = response.tracks;
  console.log(jsonData);

  for (let i = 0; i < 5; i++){
    let divider = "\n--------------------------------------\n\n";
    let trackInfo = [
      "\nArtist: " + jsonData.items[i].artists[0].name,
      "\nTrack Name: " + jsonData.items[i].name,
      "\nAlbum Name: " + jsonData.items[i].album.name,
      "\nPreview Track: " + jsonData.items[i].preview_url,
      ]
    console.log(divider + trackInfo);

    fs.appendFile("log.txt", trackInfo + divider, function(err){
      if (err) throw err;
      console.log(divider + trackInfo);
    });
  }
})

//THIS ENDS THE SPOTIFY FUNCTION//

//THIS STARTS THE 'DO WHAT IT SAYS' FUNCTION//

function doWhatItSays(){
  fs.readFile("random.txt", "utf8", function (err, response){
    if (err) throw err

    let responseArr = response.split(',');
    console.log('');
    console.log('---CONTENT---');
    console.log('');

    for (let i = 0; i < responseArr.length; i++){
      if (responseArr[i] === 'movie-this'){
        movieThis(searchType);
      }else if (responseArr[i] === 'spotify-this-song'){
        spotifyTrack(searchType);
      }else if (responseArr[i] === 'concert-this'){
        concertThis(searchType);
      }else{
        console.log("Input not valid");
      }
    }
  })
}

//ENDS THE DO WHAT IT SAYS FUNCTION//

