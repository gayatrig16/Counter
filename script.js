let count = 0;
const display = document.getElementById("commitCount");

function updateDisplay() {
  display.textContent = count;
}

function increment() {
  count++;
  updateDisplay();
}

function decrement() {
  if (count > 0) {
    count--;
    updateDisplay();
  }
}

function reset() {
  count = 0;
  updateDisplay();
}
