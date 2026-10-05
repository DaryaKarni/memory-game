# Memory Game

An interactive browser-based memory matching game. The objective is to find all matching pairs of cards in as few moves as possible.

---

## 🎮 Game Rules & Gameplay

1. **Game Start**: The game begins automatically upon loading or reloading the page.
   - The board consists of **16 cards** (8 pairs), randomly shuffled and laid face down.
   - The move counter is reset to `0`.
   - The matched pairs counter starts at `0 out of 8`.

2. **Making a Move**:
   - The player turns over one card, then a second card.
   - **One move** is counted whenever two different available cards are opened, regardless of whether they match.

3. **Matching Cards**:
   - If the images match, both cards remain face up for the rest of the game.
   - The matched pairs counter increases by 1.

4. **Mismatched Cards**:
   - If the images do not match, both cards stay visible for approximately one second and then flip back face down.
   - *Clicks on other cards are locked while mismatched cards are being displayed.*

5. **Victory**:
   - The game ends when all 8 pairs are found.
   - A victory modal automatically pops up, displaying the final move count alongside "Play Again" and "Close" buttons.

---

## 🛠 Interface & Controls

The header contains the primary controls:

* **"New Game"** — Resets the current progress, reshuffles the cards, and resets all counters.
* **"Leaderboard"** — Opens a modal window displaying saved top scores.

---

## 🚀 How to Run

No build tools or external dependencies are required to run the game.

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/memory-card-game.git](https://github.com/your-username/memory-card-game.git)