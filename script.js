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
