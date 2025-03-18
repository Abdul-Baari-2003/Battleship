import Gameboard from './gameboard.js';

const Player = (type) => {
  const board = Gameboard();
  const attackedCoords = new Set();

  return {
    getBoard() {
      return board;
    },
    randomAttack(enemyBoard) {
      if (type !== 'computer') return null;
      const size = 10;
      let x, y, key;
      do {
        x = Math.floor(Math.random() * size);
        y = Math.floor(Math.random() * size);
        key = `${x},${y}`;
      } while (attackedCoords.has(key));
      attackedCoords.add(key);
      enemyBoard.receiveAttack([x, y]);
      return [x, y];
    }
  };
};

export default Player;
