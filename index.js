let computerScore = 0;
let playerScore = 0;
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');
const choices = ["fas fa-hand-rock", "fas fa-hand-paper", "fas fa-hand-scissors"];
const text = document.getElementById('message');

const game = () => {
  buttons.forEach(btn => {
    btn.addEventListener('click', e => {
      let clickedButton = e.target.className;
      showIcon.className = clickedButton;
      let randomNumber = Math.floor(Math.random() * choices.length);
      computerShowIcon.className = choices[randomNumber];

      // tie
      if (showIcon.className === computerShowIcon.className) {
        pScore.innerHTML = pScore.innerHTML;
        cScore.innerHTML = cScore.innerHTML;
        text.innerHTML = "It's a tie!";
        text.style.color = "#b3b6bd";
      }

      // someone wins
      // player rock + computer scissors
      else if (showIcon.className === choices[0] && computerShowIcon.className === choices[2]) {
        playerScore++;
        pScore.innerHTML = playerScore;
        text.innerHTML = "You win!";
        text.style.color = "#b0ebb0";
      }
      // player rock + computer paper
      else if (showIcon.className === choices[0] && computerShowIcon.className === choices[1]) {
        computerScore++;
        cScore.innerHTML = computerScore;
        text.innerHTML = "You lost!";
        text.style.color = "#f5a4a4";
      }
      // player paper + computer scissors
      else if (showIcon.className === choices[1] && computerShowIcon.className === choices[2]) {
        computerScore++;
        cScore.innerHTML = computerScore;
        text.innerHTML = "You lost!";
        text.style.color = "#f5a4a4";
      }
      // player paper + computer rock
      else if (showIcon.className === choices[1] && computerShowIcon.className === choices[0]) {
        playerScore++;
        pScore.innerHTML = playerScore;
        text.innerHTML = "You win!";
        text.style.color = "#b0ebb0";
      }
      // player scissors + computer rock
      else if (showIcon.className === choices[2] && computerShowIcon.className === choices[0]) {
        computerScore++;
        cScore.innerHTML = computerScore;
        text.innerHTML = "You lost!";
        text.style.color = "#f5a4a4";
      }
      // player scissors + computer paper
      else if (showIcon.className === choices[2] && computerShowIcon.className === choices[1]) {
        playerScore++;
        pScore.innerHTML = playerScore;
        text.innerHTML = "You win!";
        text.style.color = "#b0ebb0";
      }
    });
  });
}

game();