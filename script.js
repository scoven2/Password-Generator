//different input variables
let enter;
let confirmCharacter;
let confirmNumber;
let confirmUppercase;
let confirmLowercase;

//password values
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];

//yes or no decisions
let choices;

//makes lowercase letters uppercase
let toUpper = function (x) {
    return x.toUpperCase();
};

//uppercase conversion variable
letter2 = letter.map(toUpper);

let get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// generate password function
function generatePassword() {
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    if (!enter) {
        alert("Please enter a value");
    } else if (enter < 8 || enter > 128) {
        //validates that right value is entered
        enter = parseInt(prompt("You must choose between 8 and 128"));
    //once validated asking yes or no to other options
    } else {
        confirmCharacter = confirm("Will this contain special characters?");
        confirmNumber = confirm("WIll this contain numbers?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?")
    };
    
    // 4 no
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose criteria");
    }

    //4 yes
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        choices = character.concat(number, letter2);
    }

    //3 yes
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, letter2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, letter);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = charactefr.concat(letter, letter2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(letter, letter2);
    }
}