# Rock Paper Scissors ✊✋✌️

A simple browser-based Rock Paper Scissors game.

## Features

- Play Rock, Paper, or Scissors against the computer using emoji buttons
- Live score tracking (Wins / Losses / Ties) persisted with `localStorage`
- **AutoPlay** mode — the game plays itself automatically every second
- Reset button to clear scores and start fresh
- Dark-themed, responsive UI

## How to Play

1. Open `index.html` in any modern web browser.
2. Click ✊ (Rock), ✋ (Paper), or ✌️ (Scissors) to make your move.
3. The computer picks a random move and the result is shown instantly.
4. Your running score is displayed at the top of the page.
5. Click **AutoPlay** to let the game play on its own — click it again to stop.
6. Click **Reset** to zero out the scores.

## Project Structure

```
rockpaperscissors/
├── index.html   # Game markup and button layout
├── app.js       # Game logic, score tracking, and autoplay
└── styles.css   # Dark-theme styling
```

## Getting Started

No build step or dependencies required. Just open the file directly:

```bash
open index.html   # macOS
# or
start index.html  # Windows
# or double-click index.html in your file manager
```

## License

This project is open source and available under the [MIT License](LICENSE).
