var lines_canvas = document.getElementById("lines_corresp");
var k_input = document.getElementById("k");
const HEIGHT = lines_canvas.offsetHeight;
const WIDTH = lines_canvas.offsetWidth;
const ALPHABET_SIZE = 27;
const CHAR_HEIGHT = HEIGHT / ALPHABET_SIZE;
var lines_ctx = lines_canvas.getContext("2d");
lines_ctx.canvas.width = WIDTH;
lines_ctx.canvas.height = HEIGHT;

function line(start, end) {
  lines_ctx.beginPath();
  lines_ctx.moveTo(0, (0.5 + start) * CHAR_HEIGHT);
  lines_ctx.lineTo(WIDTH, (0.5 + end) * CHAR_HEIGHT);
  lines_ctx.stroke();
}
function all_lines() {
  lines_ctx.clearRect(0, 0, WIDTH, HEIGHT);
  k = Number(k_input.value) % ALPHABET_SIZE;
  for (let i = 0; i < ALPHABET_SIZE; i++) {
    line(i, (((i * k) % ALPHABET_SIZE) + ALPHABET_SIZE) % ALPHABET_SIZE);
  }
}
all_lines();
