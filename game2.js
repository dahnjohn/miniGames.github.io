const words = ["apple", "banana", "cherry"];
let currentLevel = 0;

function scrambleWord(word) {
  let scrambledWord = "";
  let wordArray = word.split("");
  while (wordArray.length > 0) {
    let randomIndex = Math.floor(Math.random() * wordArray.length);
    scrambledWord += wordArray[randomIndex];
    wordArray.splice(randomIndex, 1);
  }
  return scrambledWord;
}

function getNextWord() {
  if (currentLevel >= words.length) {
    // alert("Congratulations! You completed all levels.");
    Swal.fire({
      title: 'Congratulations! You completed all levels.',
      width: 600,
      padding: '3em',
      color: '#716add',
      // background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("img/cat-space.gif")
        left top
        no-repeat
      `
    })



    return;
  }
  let word = words[currentLevel];
  let scrambledWord = scrambleWord(word);
  document.getElementById("scrambled-word").innerHTML = scrambledWord;
  document.getElementById("user-input").value = "";
  currentLevel++;
}

document.getElementById("submit-button").addEventListener("click", function() {
  let userInput = document.getElementById("user-input").value;
  if (userInput.toLowerCase() === words[currentLevel-1]) {
    // alert("Correct!");

    Swal.fire({
      // position: 'top-end',
      icon: 'success',
      title: 'Correct!',
      showConfirmButton: false,
      timer: 1500
    })

    getNextWord();
  } else {
    // alert("Incorrect. Please try again.");

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Incorrect. Please try again.',
    })

    

  }
});

getNextWord();
