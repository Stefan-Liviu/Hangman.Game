const wordsList = ['money', 'first', 'car', 'bike', 'cake', 'summer', 'jackpot', 'wellcode', 'chocolate','about',
'army', 'anyone', 'bless', 'laugh', 'string', 'age', 'frost', 'warm', 'funny', 'raise', 'garden', 'clock', 'balloon',
'grass', 'move', 'prize', 'crazy', 'dollar', 'lose', 'driving', 'piece', 'clear', 'point', 'bedtime', 'round', 'school'];
let word =wordsList[Math.floor(Math.random() * wordsList.length)];
let life = 0;
let lettersLeft = 0;
let foundLetter = 0;
let hiddenWord = new Array(word.length);
let bodyMan = document.getElementsByClassName("hangman");

function newGame() {    
    let firstLetter = word[0], lastLetter = word[word.length - 1];
    for (let i = 0; i < word.length; ++i) {
        if (word[i] == firstLetter) {
            hiddenWord[i] = firstLetter + " ";
        } else if (word[i] == lastLetter) {
            hiddenWord[i] = lastLetter + " ";
        } else {
            hiddenWord[i] = "_ ";
        }
    }
    document.getElementById("guessedLetters").innerHTML = hiddenWord.join(" ");
}

document.addEventListener("keydown", function(event) {
    foundLetter = 0;
	for (let i = 0; i < word.length; ++i) {
        if (word[i] == event.key) {
            hiddenWord[i] = word[i] + " ";
            foundLetter = 1;
        }
    }    
    document.getElementById("guessedLetters").innerHTML = hiddenWord.join(" ");
    displayBodyMan();
    checkLettersLeft();
    checkLifes();
});

function checkLettersLeft() {
    lettersLeft = 0;
    for (let i = 0; i < word.length; ++i) {
        if (hiddenWord[i] == "_ ") {
            ++lettersLeft;
        }
    }
}

function displayBodyMan() {
    if (foundLetter == 0) {
        bodyMan[life].style.display = "block";
        ++life
    }
}

function checkLifes() {
    if (life == 6) {
        document.getElementById("displayResult").innerHTML = "You Lost!";
    } 
    if (lettersLeft == 0){
        document.getElementById("displayResult").innerHTML = "You Won!";
    }
}