# ⚓ Battleship v1.0 🚢

![Battleship Game](https://img.shields.io/badge/Battleship-v1.0-blue?style=for-the-badge)  
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=flat-square)  
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

🎮 **Sink the enemy fleet in this classic naval combat game!**  
Welcome to **Battleship v1.0**, a single-player JavaScript implementation of the timeless strategy game. Face off against a cunning computer opponent, fire your shots, and aim to sink their ships before they sink yours. Built with modern ES6 modules, this project is a sleek foundation for an evolving game—version 1.0 is just the beginning! 🚀

![Battleship Gameplay](screenshot.png)  
*Sink the enemy ship and claim victory in Battleship v1.0!*

---

## 🌟 Features

- ⚔️ **Single-Player Action**: Challenge a computer opponent that strikes back with random attacks.
- 🛠️ **Modular Design**: Cleanly separated logic using ES6 modules for easy maintenance and scalability.
- 📊 **Interactive Grids**: Two 10x10 boards show your fleet and the enemy’s, with clear visual feedback:
  - 🟢 Gray for your ships.
  - 🟠 Orange for hits.
  - ⚪ White for misses.
  - 🔴 Red for sunk ships.
- 🔄 **Turn-Based Gameplay**: Alternate turns with the computer, keeping the tension high.
- 🏆 **Win Detection**: Celebrate victory with a "You win!" message when you sink the enemy fleet (or face defeat if they sink yours first).
- 🚫 **Post-Game Lock**: Clicks are disabled after the game ends, ensuring a clean finish.
- 🎨 **DOM-Driven UI**: Win messages are displayed elegantly in the DOM—no more pesky alerts!

---

## 🚀 Getting Started

Ready to command your fleet? Follow these steps to set up Battleship v1.0 on your local machine.

### Prerequisites

- A modern web browser (Chrome, Firefox, etc.).
- A local server to handle ES6 modules (e.g., [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code, or `http-server` via Node.js).

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/battleship.git
   cd battleship
   ```

2. **Launch a Local Server**:

   - **Option 1: VS Code with Live Server**  
     Open the project in VS Code, right-click `index.html`, and select "Open with Live Server".

   - **Option 2: Node.js with `http-server`**  
     Install `http-server` globally:

     ```bash
     npm install -g http-server
     http-server
     ```

     Then visit `http://localhost:8080` in your browser.

3. **Start Playing**:

   Open the URL provided by your server (e.g., `http://localhost:3000`) and dive into the game!

---

## 🎮 How to Play

1. **Your Fleet**: Your 2-cell ship is placed at `[0, 0]` to `[0, 1]` (gray cells on "Your Board").
2. **Enemy Fleet**: The computer’s ship is hidden at `[0, 0]` to `[0, 1]` (you’ll need to find it!).
3. **Take Your Shot**: Click a cell on the "Enemy Board" to attack:
   - 🟠 Orange for a hit.
   - ⚪ White for a miss.
   - 🔴 Red when the ship is fully sunk.
4. **Computer’s Turn**: The enemy fires back at random locations on your board.
5. **Victory or Defeat**: The first to sink all opponent ships wins!

---

## 🛠️ Technologies Used

- **JavaScript (ES6 Modules)** - Game logic and UI interactions
- **HTML & CSS** - Layout and styling

---

## 📜 License

This project is licensed under the **MIT License**. Feel free to modify and distribute it as you like.

---

## 🤝 Contributing

Contributions are welcome! If you have ideas for improvements, feel free to fork the repo and submit a pull request.

---

## 📞 Contact

For any questions or suggestions, reach out via [GitHub Issues](https://github.com/your-username/battleship/issues).

Happy gaming! 🚢🔥