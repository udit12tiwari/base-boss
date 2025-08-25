Color Guess Game

A tiny static HTML color-guessing game. Open `index.html` in a browser to play.

How to run

- Open the project folder and double-click `index.html`, or serve it with a static server.

Windows (PowerShell) quick serve using Python 3:

```powershell
# from the project root
python -m http.server 8000; Start-Process "http://localhost:8000"
```

What it does

- Shows an RGB value and a set of color tiles.
- Click the tile that matches the RGB value.
- Easy mode uses 3 tiles, Hard uses 6.
- Tracks simple attempts and streaks.

Files added

- `index.html` — game UI
- `css/style.css` — styling
- `js/game.js` — game logic
- `README.md` — usage notes
