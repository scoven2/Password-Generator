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
        choices = character.concat(number, letter, letter2);
    }

    //3 yes and 1 no
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, letter2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, letter);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(letter, letter2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(letter, letter2);
    }

    //2 yes and 2 no
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);
    }
    else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(letter);
    }
    else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(letter2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = letter.concat(number);
    }
    else if (confirmLowercase && confirmUppercase) {
        choices = letter.concat(letter2);
    }
    else if (confirmNumber && confirmUppercase) {
        choices = number.concat(letter2);
    }

    //1 yes and 3 no
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = letter;
    }
    else if ( confirmUppercase) {
        choices = space.concat(letter2);
    };

    let password = [];
    
    //randomized all variable
    for (let i = 0; i < enter; i++) {
        let pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }

    let ps = password.join("");
    UserInput(ps);
    return ps;
}

//puts password in textbox
function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}

//copies password when clicking on textbox
document.getElementById("password").onclick = function() {
    this.select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}