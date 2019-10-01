# liri-node

The Liri-Node-App is a command that the user inputs to retrieve information on film and music. Utilizing Spotify and OMDB APIs to retrieve said information.

The app is organized starting with OMDB, THIS BAND SEARCH then SPOTIFY.

To run the app, open terminal in VS code or Webstorm and type in: "node" '(space)' liri.js followed by the commands of 

-'movie-this' + 'movie title' (of user's choosing)<br />
-'spotify-this-song' + 'song title' (of user's choosing)<br />
-'concert-this' + 'band name/ song' (of user's choosing)<br />

-The terminal will then return the values of the user's input. Additionally to view it externally, the user can open this in a web browser and run the function there.


DEPLOYED LINK TO GITHUB: https://gravehaus.github.io/liri-node/

Technologies used in assignment:
-Webstorm<br />
-Axios, OMDB, Spotify, Moment, DotEnv node packages

Created by Julia Graves

SCREENSHOTS OF COMMANDS

////////////////////////////////////////SPOTIFY THIS COMMAND////////////////////////////////////////////////////////////
<img width="1212" alt="start-process" src="https://user-images.githubusercontent.com/54043578/65983915-7215b100-e433-11e9-870e-89be195a5648.png">

ENTER IN TERMINAL:node liri.js spotify-this-song '[ENTER TOURING ARTIST OR SONG HERE]' <br />
-WILL RETURN ARTIST INFORMATION

<img width="1440" alt="spotify-this" src="https://user-images.githubusercontent.com/54043578/65983941-835ebd80-e433-11e9-990b-61cb4004ea74.png">
<img width="1433" alt="sweet-dreams" src="https://user-images.githubusercontent.com/54043578/65983959-8bb6f880-e433-11e9-9c43-2266abf836c0.png">
<img width="1422" alt="sweet-dreams-response" src="https://user-images.githubusercontent.com/54043578/65983976-94a7ca00-e433-11e9-89f6-ec011a30e820.png">
<img width="1434" alt="sweet-dreams-r2" src="https://user-images.githubusercontent.com/54043578/65983988-996c7e00-e433-11e9-8853-83d163d23e1a.png">

////////////////////////////////////////MOVIE-THIS COMMAND///////////////////////////////////////////////////////////////

ENTER IN TERMINAL:node liri.js movie-this '[ENTER FILM HERE]' <br />
  -WILL RETURN MOVIE INFORMATION

<img width="1436" alt="tropic-thunder-command" src="https://user-images.githubusercontent.com/54043578/65985421-9fb02980-e436-11e9-8194-02ebd9f5a804.png">
<img width="1430" alt="tropic-thunder-response" src="https://user-images.githubusercontent.com/54043578/65985427-a343b080-e436-11e9-9aa0-273dd8fc454f.png">
<img width="1434" alt="tropicthunder-res-2" src="https://user-images.githubusercontent.com/54043578/65985431-a50d7400-e436-11e9-85cf-d16de5682aa9.png">


////////////////////////////////////////CONCERT-THIS COMMAND///////////////////////////////////////////////////////////////

ENTER IN TERMINAL:node liri.js concert-this '[ENTER TOURING ARTIST HERE]' <br />
  -WILL RETURN PERFORMER-DATES INFORMATION

<img width="1212" alt="start-process" src="https://user-images.githubusercontent.com/54043578/65984122-e8b2ae80-e433-11e9-9ba7-48bf0e06415c.png">
<img width="1440" alt="Screen Shot 2019-10-01 at 9 58 52 AM" src="https://user-images.githubusercontent.com/54043578/65984349-75f60300-e434-11e9-97fb-61b4994cd9b1.png">
<img width="1288" alt="concert-this-response" src="https://user-images.githubusercontent.com/54043578/65984201-1dbf0100-e434-11e9-92bf-15013d3be86d.png">
<img width="1424" alt="concert-response" src="https://user-images.githubusercontent.com/54043578/65984219-257ea580-e434-11e9-8b9d-0e2a7dcd6111.png">


