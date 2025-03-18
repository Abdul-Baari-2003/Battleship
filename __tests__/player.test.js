const Player = require("../player");
const Gameboard = require("../gameboard");

test('initialize player with a gameboard', () => {
  const player = Player('human');
  const board = player.getBoard();
  expect(board).toBeDefined();
  expect(typeof board.placeShip).toBe('function');
  expect(typeof board.getShips).toBe('function');
});

test('computer player makes a random attack', () => {
    const computer = Player('computer');
    const attack = computer.randomAttack();
    expect(attack).toHaveLength(2);
});

test('computer does not repeat attacks', () => {
    const computer = Player('computer');
    const enemyBoard = Gameboard();
    const attacks = new Set();
    for (let i = 0; i < 10; i++){
        const attack = computer.randomAttack(enemyBoard);
        const key = attack.join(',');
        expect(attacks.has(key)).toBe(false);
        attacks.add(key);
        enemyBoard.receiveAttack(attack);
    }
});