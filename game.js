import Player from './player.js';
import Ship from './ship.js';
import { renderBoards, handleAttack } from './dom.js';

const Game = () => {
  const human = Player('human');
  const computer = Player('computer');
  let currentPlayer = human;
  let gameOver = false;

  human.getBoard().placeShip(Ship(2), [0, 0], 'horizontal');
  computer.getBoard().placeShip(Ship(2), [0, 0], 'horizontal');

  const game = {
    getHumanPlayer() {
      return human;
    },
    getComputerPlayer() {
      return computer;
    },
    isGameOver() { 
      console.log("Game over status:", gameOver);
      return gameOver;
    },
    playTurn(coords) {
      if (currentPlayer === human && !gameOver) {
        console.log("Human turn attacking:", coords);
        computer.getBoard().receiveAttack(coords);
        console.log("Enemy all sunk:", computer.getBoard().allSunk());
        if (computer.getBoard().allSunk()) {
          gameOver = true;
          document.body.classList.add('game-over');
          document.getElementById('game-status').textContent = "You win!";
        }
        renderBoards(human.getBoard(), computer.getBoard());
        if (!gameOver) {
          currentPlayer = computer;
          console.log("Computer turn");
          const computerAttack = computer.randomAttack(human.getBoard());
          console.log("Computer attacking at:", computerAttack);
          human.getBoard().receiveAttack(computerAttack);
          console.log("Human all sunk:", human.getBoard().allSunk());
          if (human.getBoard().allSunk()) {
            gameOver = true;
            alert("Computer wins!");
          }
          renderBoards(human.getBoard(), computer.getBoard());
          currentPlayer = human;
        }
      }
    },
    start() {
      renderBoards(human.getBoard(), computer.getBoard());
    }
  };

  return game;
};

export default Game;