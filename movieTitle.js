var Input = require("./input.js");

function MovieTitle(movieTitle) {
    this.movieTitle = movieTitle;
    this.inputs = [];
    this.found = false;

    // create array of inputs from each movieTitle
    this.getInputs = function () {
        this.movieTitle.split("").forEach((value, index) => {
            var myInput = new Input(value);
            this.inputs.push(myInput);
        });
    }
    this.inputGuessed = function (guessedInput) {
        var isInMovieTitle = false;
        this.inputs.forEach((value, index) => {
            if (value.input === guessedInput) {
                value.inputFound = true;
                isInMovieTitle = true
            }
        });
        return isInMovieTitle;
    }
    this.movieTitleGuessed = function () {
        var movieTitleFound = false;
        if (this.inputs.every(inputFoundTrue)) {
            movieTitleFound = true;
            return movieTitleFound;
        }
    
        function inputFoundTrue(value, index, array) {
            if (value.inputFound === true) {
                return true;
            } else {
                return false;
            }
        }
    }
    // display movieTitle in terminal
    this.displayMovieTitle = function () {
        var display = "";

        for (var i = 0; i < this.inputs.length; i++) {
            display += this.inputs[i].displayInput();

        }
        return display;
    }

}

// export MovieTitle
module.exports = MovieTitle;