//Setting up global variables for players
//wins, losses, and ties are set for zero
//the RPS choice is left blank
var players = [{
    name:"",
    rpsChoice: "",
    winCount: 0,
    loseCount: 0,
    tieCount: 0
},{
    name:"",
    rpsChoice: "",
    winCount: 0,
    loseCount: 0,
    tieCount: 0
}];

//displays winner at the end of the game
var displayWinner = "";

//Initializing firebase
// Initialize Firebase
var config = {
    apiKey: "AIzaSyD1vqsK1X7mWCLUKv_VMOda3wCrI8_7OFo",
    authDomain: "rps-multiplayer-d1ee1.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-d1ee1.firebaseio.com",
    projectId: "rps-multiplayer-d1ee1",
    storageBucket: "",
    messagingSenderId: "612846133543"
  };
  firebase.initializeApp(config);

//references firebase:
var database = firebase.database();




