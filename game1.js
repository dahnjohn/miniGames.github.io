// generate random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 10) + 1;

// get elements from HTML
const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const message = document.getElementById("message");

// listen for submit button click
submitButton.addEventListener("click", function() {
  // get user's guess
const userGuess = parseInt(guessInput.value);

    // compare user's guess to the random number
    if (userGuess === randomNumber) {
        // message.innerHTML = "Congratulations! You guessed the number!";
        // message.style.color = "green";

        guessInput.disabled = true;
        submitButton.disabled = true;
        message.innerHTML = "";

        Swal.fire({
            title: 'Congratulations! You guessed the number!',
            width: 600,
            padding: '3em',
            color: '#716add',
            backdrop: `
              rgba(0,0,123,0.4)
              url("img/cat-space.gif")
              left top
              no-repeat
            `
          })

    } else if (userGuess < randomNumber) {
        message.innerHTML = "Too low! Guess again.";
        message.style.color = "red";
    } else if (userGuess > randomNumber) {
        message.innerHTML = "Too high! Guess again.";
        message.style.color = "red";
    }
});
