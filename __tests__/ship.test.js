const Ship = require("../ship");

test('create a ship with the right length', () => {
    const ship = Ship(3);
    expect(ship.length).toBe(3);
});

test('ship starts with 0 hits', () => {
    const ship = Ship(3);
    expect(ship.hits).toBe(0);
});

test('ship is hit once', () => {
    const ship = Ship(3);
    ship.hit();
    expect(ship.hits).toBe(1);
});

test('ship has sunk', () => {
    const ship = Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});