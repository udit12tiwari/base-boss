Color Guess Game

A tiny static HTML color-guessing game. Open `index.html` in a browser to play.

How to run

- Open the project folder and double-click `index.html`, or serve it with a static server.

Windows (PowerShell) quick serve using Python 3:

```powershell
# from the project root
python -m http.server 8000; Start-Process "http://localhost:8000"
```

Color Guess Game

A tiny static HTML color-guessing game. Open `index.html` in a browser to play.

Getting started (recommended: Visual Studio Code + Live Server)

- Open the project folder (`F:/GitProjects/base-boss`) in Visual Studio Code.
- Install the "Live Server" extension (search for "Live Server" in the Extensions view).
- Open `index.html` and either:
	- Click the "Go Live" button in the bottom-right status bar, or
	- Right-click inside `index.html` and choose "Open with Live Server", or
	- Open the Command Palette (Ctrl+Shift+P) and run "Live Server: Open with Live Server".
- Live Server will open a browser tab at a local address (default: `http://127.0.0.1:5500/`). If the game doesn't appear, try `http://127.0.0.1:5500/index.html`.

Why use Live Server
- Auto-reloads the page when you edit files.
- Works well for static HTML/CSS/JS projects and integrates into VS Code.

Quick alternative (PowerShell)

If you don't want to use Live Server, you can use Python's simple HTTP server from PowerShell:

```powershell
# from the project root
python -m http.server 8000; Start-Process "http://localhost:8000"
```

What the game does

- Shows an RGB value and a set of colored tiles.
- Click the tile that matches the RGB value.
- "Easy" mode uses 3 tiles, "Hard" uses 6.
- Tracks Attempts, current Streak, and Best streak.

Troubleshooting
- If Live Server doesn't start, check the Extensions view and verify it is enabled.
- If the page doesn't auto-reload after edits, try stopping and restarting Live Server.
- If your firewall blocks the port, allow localhost connections for your browser/VS Code.

Files in this folder

- `index.html` — game UI
- `css/style.css` — styling
- `js/game.js` — game logic
- `README.md` — this file

Next improvements (optional)

- Persist high score / best streak to `localStorage`.
- Improve keyboard accessibility and ARIA labels.
- Add tests or a tiny demo page with explanations.
