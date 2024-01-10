// select elements
let spin = document.querySelector(".btn");
let result = document.querySelector(".result");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

// Write a function that will check the values of the 2 random numbers and compare them and return a winner
let winner = () => {
  // create two random numbers with the range of 1 to 6
  let player1 = Math.ceil(Math.random() * 6);
  let player2 = Math.ceil(Math.random() * 6);
 //Display results when the clicks the spin button   
  let resultText = "";
  if (player1 > player2) {
    resultText = "Player 1 won";
  } else if (player1 < player2) {
    resultText = "Player 2 won";
  } else {
    resultText = "Draw";
  }
  result.innerText = resultText;
  // set the image attribute to change when the random number changes
  img1.setAttribute("src", `images/dice${player1}.png`);
  img2.setAttribute("src", `images/dice${player2}.png`);
};

// add event listner
document.addEventListener("click", winner);
