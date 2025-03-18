import Ship from './ship.js';

const Gameboard = () => {
  const ships = [];
  const missedAttacks = [];
  const attackedCoords = [];

  return {
    placeShip(ship, coords, orientation) {
      const shipCoords = [];
      const [x, y] = coords;
      const size = 10;
      if (orientation === 'horizontal') {
        if (y + ship.length > size) throw new Error("Ship exceeds board horizontally");
        for (let i = 0; i < ship.length; i++) {
          shipCoords.push([x, y + i]);
        }
      } else if (orientation === 'vertical') {
        if (x + ship.length > size) throw new Error("Ship exceeds board vertically");
        for (let i = 0; i < ship.length; i++) {
          shipCoords.push([x + i, y]);
        }
      }
      ships.push({ ship, coords: shipCoords });
    },
    getShips() {
      return ships;
    },
    receiveAttack([x, y]) {
      attackedCoords.push([x, y]);
      console.log("Receiving attack at:", [x, y]);
      for (const { ship, coords } of ships) {
        if (coords.some(([cx, cy]) => cx === x && cy === y)) {
          console.log("Hit ship at:", [x, y]);
          ship.hit();
          return;
        }
      }
      console.log("Miss at:", [x, y]);
      missedAttacks.push([x, y]);
    },
    getMissedAttacks() {
      return missedAttacks;
    },
    getAttackedCoords() {
      return attackedCoords;
    },
    allSunk() {
      return ships.every(({ ship }) => ship.isSunk());
    }
  };
};

export default Gameboard;