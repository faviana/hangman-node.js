// require prompt
var prompt = require('prompt'); 
prompt.start();

var MovieTitle = require('./movieTitle.js');
var movieTitles = ["shrek", "twilight", "tangled", "armageddon", "ratatouille", "milk", "jumanji", "hook"];
var currentMovieTitle = "";
var guessesRemaining = 10;

function startGame(movieTitle) {
    var selectMovieTitle = movieTitles[Math.floor(Math.random() * movieTitles.length)];
    currentMovieTitle = new MovieTitle(selectMovieTitle);
    currentMovieTitle.getInputs();
    console.log("*****************************************************");
    console.log("Welcome to Hangman Node.js version!");
    console.log("*****************************************************");
    console.log("");
    console.log("Here is your new word: " + currentMovieTitle.displayMovieTitle());
    console.log(" ");
    playGame();
}

function playGame() {
    currentMovieTitle.displayMovieTitle();

    //
    var schema = {
        properties: {
            input: {
                pattern: /^[a-zA-Z]+$/,
                message: 'Can only input letters',
                required: true
            },
        }
    };

    prompt.get(schema, function (err, result) {
        guessedInput = result.input;
        console.log("");
        console.log("You Guessed: " + guessedInput);
        var playerGuess = currentMovieTitle.inputGuessed(guessedInput);

        if (!playerGuess) {
            console.log("Incorrect, Try again!");
            console.log("");
            guessesRemaining -= 1;
            console.log("Guesses remaining: " + guessesRemaining);
            if (guessesRemaining > 0) {
                playGame();
            } else {
                if (guessesRemaining === 0) {
                    console.log("Game Over");
                    return 0;
                } else {
                    console.log(currentMovieTitle.displayMovieTitle());
                }
            }
        } else {
            console.log("Correct, keep guessing!");
            console.log("");
            if (currentMovieTitle.movieTitleGuessed()) {
                console.log("You Win!");
                return 1;
            } else {
                console.log(displayMovieTitle());
                playGame();
            }
        }
    });
}

startGame();

// *********************************
//             Fix
//   1. When letter is guessed correctly error message is thrown
//      displayMovieTile is not defined
// *********************************