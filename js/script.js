const options = {
  rock: "/assets/Rock.png",
  paper: "/assets/Paper.png",
  scissors: "/assets/Scissors.png",
};

let SCORE = 0;

const pickUserHand = (hand) => {
  console.log(`${hand} is picked!`);

  let hands = document.querySelector(".hand__signs");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // setting the hand that user picked
  console.log((document.getElementById("userPickImage").src = options[hand]));

  pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
  let hands = ["rock", "paper", "scissors"];
  let computerHand = hands[Math.floor(Math.random() * hands.length)];

  //setting computer choose image
  console.log(
    (document.getElementById("computerPickImage").src = options[computerHand])
  );

  refree(hand, computerHand);
};

const refree = (userHand, computerHand) => {
  if (userHand == "paper" && computerHand == "scissors") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "paper" && computerHand == "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "paper" && computerHand == "paper") {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && computerHand == "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "rock" && computerHand == "paper") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "rock" && computerHand == "rock") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && computerHand == "scissors") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && computerHand == "rock") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "scissors" && computerHand == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
};

const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".hand__signs");
  hands.style.display = "flex";
};

const setDecision = (decision) => {
  console.log((document.querySelector(".decision h1").innerText = decision));
};

const setScore = (newScore) => {
  SCORE = newScore;
  document.querySelector(".score h1").innerText = newScore;
};
