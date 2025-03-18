const renderBoards = (humanBoard, computerBoard) => {
  const humanGrid = document.getElementById('human-board');
  const computerGrid = document.getElementById('computer-board');
  if (!humanGrid || !computerGrid) {
    console.error("Grid elements not found!");
    return;
  }
  humanGrid.innerHTML = '';
  computerGrid.innerHTML = '';

  const size = 10;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const humanCell = document.createElement('div');
      humanCell.classList.add('cell');
      const computerCell = document.createElement('div');
      computerCell.classList.add('cell');
      computerCell.dataset.x = j; // Column
      computerCell.dataset.y = i; // Row

      humanBoard.getMissedAttacks().forEach(([x, y]) => {
        if (x === j && y === i) humanCell.classList.add('miss');
      });
      computerBoard.getMissedAttacks().forEach(([x, y]) => {
        if (x === j && y === i) computerCell.classList.add('miss');
      });

      humanBoard.getShips().forEach(({ ship, coords }) => {
        coords.forEach(([x, y]) => {
          if (x === j && y === i) humanCell.classList.add(ship.isSunk() ? 'sunk' : 'ship');
        });
      });
      computerBoard.getShips().forEach(({ ship, coords }) => {
        coords.forEach(([x, y]) => {
          if (x === j && y === i && computerBoard.getAttackedCoords().some(([attX, attY]) => attX === j && attY === i)) {
            computerCell.classList.add(ship.isSunk() ? 'sunk' : 'hit');
          }
        });
      });

      humanGrid.appendChild(humanCell);
      computerGrid.appendChild(computerCell);
    }
  }
};

const handleAttack = (game) => {
  const computerGrid = document.getElementById('computer-board');
  computerGrid.addEventListener('click', (e) => {
    const cell = e.target.closest('.cell');
    if (cell && !cell.classList.contains('hit') && !cell.classList.contains('miss') && !game.isGameOver()) { // Use game.isGameOver()
      const x = parseInt(cell.dataset.x);
      const y = parseInt(cell.dataset.y);
      console.log("Clicked cell at:", [x, y]);
      if (!isNaN(x) && !isNaN(y)) {
        game.playTurn([x, y]);
      }
    }
  });
};

export { renderBoards, handleAttack };