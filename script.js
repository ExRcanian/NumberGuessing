'use strict';

function start() {
  let correctNumber = Math.floor(Math.random() * 20) + 1;
  let score = 20;
  document.querySelector('.score').innerHTML = score;
  document.querySelector('.number').innerHTML = 0;
  document.querySelector('.guess').value = 0;
  console.log(correctNumber);

  let button = document.querySelector('.check');
  button.addEventListener('click', () => {
    let guess = Number(document.querySelector('.guess').value);
    document.querySelector('.number').innerHTML = guess;
    checkGuess();
  });

  function checkGuess() {
    let number = Number(document.querySelector('.number').innerHTML);
    console.log(number);
    document.querySelector('body').style.backgroundColor = '#222';
    if (number == correctNumber) {
      document.querySelector('.message').innerHTML = 'Correct!!!';
      if (
        document.querySelector('.score').innerHTML >
        document.querySelector('.highscore').innerHTML
      ) {
        document.querySelector('.highscore').innerHTML =
          document.querySelector('.score').innerHTML;
      }
      document.querySelector('.guess').innerHTML = '';
      document.querySelector('.number').innerHTML = '';
      document.querySelector('body').style.backgroundColor = 'lightgreen';
      start();
    } else if (number < correctNumber) {
      document.querySelector('.message').innerHTML = 'Too low!!!';
      score = score - 1;
      document.querySelector('.score').innerHTML = score;
    } else {
      document.querySelector('.message').innerHTML = 'Too high!!!';
      score = score - 1;
      document.querySelector('.score').innerHTML = score;
    }

    if (score == 0) {
        restart();
        document.querySelector('.message').innerHTML = 'You lost!!!'
        document.querySelector('body').style.backgroundColor = 'darkred'
    }
  }

  function restart() {
    document.querySelector('.highscore').innerHTML = 0;
    start();
  }

  document.querySelector('.again').addEventListener('click', () => {
    restart();
    document.querySelector('body').style.backgroundColor = '#222';
  });
}

start();
