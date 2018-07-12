var winningNumber = Math.floor(Math.random() * 100) + 1;

var guess1 = parseInt(prompt("Guess a number between 1 and 100"));

if (guess1 === winningNumber) {
    alert("That's right! You win.");
} else if (guess1 < winningNumber) {
    var guess2 = parseInt(prompt("You guessed low. You have 4 more tries. What is your next guess?"));
} else if (guess1 > winningNumber) {
    var guess2 = parseInt(prompt("You guessed high. You have 4 more tries. What is your next guess?"));
} else {
    var guess2 = parseInt(prompt("Are you sure you guessed a number? Try again. You have 4 more tries. What is your next guess?"));
}

if (guess2 === winningNumber) {
    alert("That's right! You win.");
} else if (guess2 < winningNumber) {
    var guess3 = parseInt(prompt("You guessed low. You have 3 more tries. What is your next guess?"));
} else if (guess2 > winningNumber) {
    var guess3 = parseInt(prompt("You guessed high. You have 3 more tries. What is your next guess?"));
} else {
    var guess3 = parseInt(prompt("Are you sure you guessed a number? Try again. You have 3 more tries. What is your next guess?"));
}

if (guess3 === winningNumber) {
    alert("That's right! You win.");
} else if (guess3 < winningNumber) {
    var guess4 = parseInt(prompt("You guessed low. You have 2 more tries. What is your next guess?"));
} else if (guess3 > winningNumber) {
    var guess4 = parseInt(prompt("You guessed high. You have 2 more tries. What is your next guess?"));
} else {
    var guess4 = parseInt(prompt("Are you sure you guessed a number? Try again. You have 2 more tries. What is your next guess?"));
}

if (guess4 === winningNumber) {
    alert("That's right! You win.");
} else if (guess4 < winningNumber) {
    var guess5 = parseInt(prompt("You guessed low. You have 1 more try. What is your next guess?"));
} else if (guess4 > winningNumber) {
    var guess5 = parseInt(prompt("You guessed high. You have 1 more try. What is your next guess?"));
} else {
    var guess5 = parseInt(prompt("Are you sure you guessed a number? Try again. You have 1 more try. What is your next guess?"));
}

if (guess5 === winningNumber) {
    alert("That's right! You win.");
} else {
    alert("Sorry, that was your last try. The winning number was " + winningNumber +  ".");
}

