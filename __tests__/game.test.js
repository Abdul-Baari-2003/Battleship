const Game = require("../game");
const Player = require("../player");

test('initialize game with two player', () => {
    const game = Game();
    expect(game.getHumanPlayer().getBoard()).toBeDefined();
    expect(game.getComputerPlayer().getBoard()).toBeDefined();
});


test('ships are placed on both boards', () => {
    const game = Game();
    const humanBoard = game.getHumanPlayer().getBoard();
    const computerBoard = game.getComputerPlayer().getBoard();
    expect(humanBoard.getShips().length).toBeGreaterThan(0);
    expect(computerBoard.getShips().length).toBeGreaterThan(0);
});

test('human attack computer board', () => {
    const game = Game();
    const computerBoard = game.getComputerPlayer().getBoard();
    game.playTurn([0, 0]);
    const shipHits = computerBoard.getShips()[0].ship.hits;
    const misses = computerBoard.getMissedAttacks();
    expect(shipHits === 1 || misses.length > 0).toBe(true);
});

test('turns alternate between human and computer', () => {
    const game = Game();
    const humanBoard = game.getHumanPlayer().getBoard();
    const computerBoard = game.getComputerPlayer().getBoard();
    game.playTurn([0, 0]); // Human attacks, triggers computer turn
    expect(computerBoard.getShips()[0].ship.hits).toBe(1); // Human hit
    expect(humanBoard.getMissedAttacks().length > 0 || humanBoard.getShips()[0].ship.hits > 0).toBe(true); // Computer attacked
  });

test('game end when all ships are sunk', () => {
    const game = Game();
    const humanBoard = game.getHumanPlayer().getBoard();
    const computerBoard = game.getComputerPlayer().getBoard();
    game.playTurn([0, 0]);
    game.playTurn([1, 0]);
    expect(humanBoard.allSunk() || computerBoard.allSunk()).toBe(true);
});