'use strict';

// document.querySelector('.message').textContent = 'Correct Number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// // console.log(document.querySelector('.guess').value);
let number = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = '?';

let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const restart = document.querySelector('.again');

restart.addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing . . .');

  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';

  guess = Number((document.querySelector('.guess').value = ''));
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  ///when there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');
  }
  //when player wins
  else if (guess === number) {
    displayMessage('Correct Number');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').textContent = number;

    document.querySelector('.number').style.width = '40rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guess is wrong
  else {
    if (score > 1) {
      displayMessage(guess > number ? 'Number Too High!' : 'Number Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
