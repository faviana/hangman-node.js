function Input(input) {
    this.input = input;
    this.placeholder = ' - ';
    this.inputFound = false;

    this.displayInput = function () {
        if (this.inputFound === false) {
            return this.placeholder; 
        } else {
            return this.input.toUpperCase(); 
        }
    }
} 

// export Input
module.exports = Input;