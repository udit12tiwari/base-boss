// Simple Color Guess Game
(() => {
  const container = document.getElementById('container');
  const colorDisplay = document.getElementById('colorDisplay');
  const message = document.getElementById('message');
  const resetButton = document.getElementById('reset');
  const easyBtn = document.getElementById('easy');
  const hardBtn = document.getElementById('hard');
  const header = document.getElementById('header');

  let numSquares = 6;
  let colors = [];
  let pickedColor = '';
  let attempts = 0;
  let bestStreak = 0;
  let currentStreak = 0;

  function init() {
    setupModeButtons();
    setupResetButton();
    createSquares(numSquares);
    reset();
  }

  function setupModeButtons() {
    easyBtn.addEventListener('click', () => {
      easyBtn.classList.add('selected');
      hardBtn.classList.remove('selected');
      numSquares = 3; recreateSquares();
      reset();
    });
    hardBtn.addEventListener('click', () => {
      hardBtn.classList.add('selected');
      easyBtn.classList.remove('selected');
      numSquares = 6; recreateSquares();
      reset();
    });
  }

  function setupResetButton() {
    resetButton.addEventListener('click', reset);
  }

  function recreateSquares() {
    // clear and recreate squares to match numSquares
    container.innerHTML = '';
    createSquares(numSquares);
  }

  function createSquares(n) {
    for (let i = 0; i < n; i++) {
      const sq = document.createElement('div');
      sq.className = 'square';
      const inner = document.createElement('div');
      inner.className = 'square-inner';
      sq.appendChild(inner);
      container.appendChild(sq);

      sq.addEventListener('click', function () {
        const clickedColor = inner.style.backgroundColor;
        attempts++;
        if (clickedColor === pickedColor) {
          message.textContent = 'Correct!';
          changeColors(pickedColor);
          header.style.background = pickedColor;
          currentStreak++;
          bestStreak = Math.max(bestStreak, currentStreak);
          resetButton.textContent = 'Play Again?';
        } else {
          this.classList.add('hidden');
          message.textContent = 'Try Again';
          currentStreak = 0;
        }
        updateMessageFooter();
      });
    }
  }

  function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = rgbString(pickedColor);
    message.textContent = '';
    resetButton.textContent = 'New Colors';
    header.style.background = '#2c3e50';
    const squares = document.querySelectorAll('.square');
    squares.forEach((sq, i) => {
      const inner = sq.querySelector('.square-inner');
      if (colors[i]) {
        inner.style.backgroundColor = colors[i];
        sq.classList.remove('hidden');
        sq.style.display = '';
      } else {
        sq.style.display = 'none';
      }
    });
    attempts = 0;
    updateMessageFooter();
  }

  function changeColors(color) {
    const inners = document.querySelectorAll('.square-inner');
    inners.forEach(inner => inner.style.backgroundColor = color);
  }

  function pickColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  function generateRandomColors(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(randomColor());
    }
    return arr;
  }

  function randomColor() {
    // returns rgb(r, g, b) string
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function rgbString(colorStr) {
    // colorStr is already like 'rgb(r, g, b)'
    return colorStr.toUpperCase();
  }

  function updateMessageFooter() {
    message.textContent = message.textContent + (message.textContent ? ' • ' : '') + `Attempts: ${attempts}  Streak: ${currentStreak}  Best: ${bestStreak}`;
  }

  init();
})();
