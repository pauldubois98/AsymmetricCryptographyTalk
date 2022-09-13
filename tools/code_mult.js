var lines_canvas = document.getElementById("lines_corresp");
var k_input = document.getElementById("k");
var start_text = document.getElementById("start_text");
var end_text = document.getElementById("end_text");
var direction_btn = document.getElementById("direction");
const HEIGHT = lines_canvas.offsetHeight;
const WIDTH = lines_canvas.offsetWidth;
const ALPHABET_SIZE = 27;
const CHAR_HEIGHT = HEIGHT / ALPHABET_SIZE;
var k;
var i_k;
var direction = 0;
var lines_ctx = lines_canvas.getContext("2d");
lines_ctx.canvas.width = WIDTH;
lines_ctx.canvas.height = HEIGHT;

function get_k() {
  k = ((Number(k_input.value) % ALPHABET_SIZE) + ALPHABET_SIZE) % ALPHABET_SIZE;
  if (pgcd(k, ALPHABET_SIZE) == 1) {
    end_text.disabled = false;
    inverse_k();
  } else {
    end_text.disabled = true;
  }
}

function line(start, end) {
  lines_ctx.beginPath();
  lines_ctx.moveTo(0, (0.5 + start) * CHAR_HEIGHT);
  lines_ctx.lineTo(WIDTH, (0.5 + end) * CHAR_HEIGHT);
  lines_ctx.stroke();
}
function all_lines() {
  get_k();
  lines_ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < ALPHABET_SIZE; i++) {
    line(i, (((i * k) % ALPHABET_SIZE) + ALPHABET_SIZE) % ALPHABET_SIZE);
  }
}
all_lines();

function encode() {
  var txt = start_text.value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(" ", "@")
    .toUpperCase();
  start_text.value = txt.replace("@", " ");
  start_sequence = [];
  for (var i = 0; i < txt.length; i++) {
    start_sequence.push(txt[i].charCodeAt(0));
  }
  end_sequence = [];
  for (var i = 0; i < txt.length; i++) {
    c = start_sequence[i];
    if (c <= 90 && c >= 64) {
      d =
        (((((c - 64) * k) % ALPHABET_SIZE) + ALPHABET_SIZE) % ALPHABET_SIZE) +
        64;
    } else {
      d = c;
    }
    end_sequence.push(d);
  }
  end_text.value = String.fromCharCode(...end_sequence).replace("@", " ");
}
encode();

function pgcd(a, b) {
  while (b > 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
}
function inverse_k() {
  if (pgcd(k, ALPHABET_SIZE) == 1) {
    a = k;
    b = ALPHABET_SIZE;
    c = 1;
    n = 0;
    rn = 0;
    while (rn != 1) {
      n++;
      an = n * a;
      rn = an % b;
      qn = (an - rn) / b;
    }
    // u = n;
    // v = -qn;
    // k*u + ALPHABET_SIZE*v = c
    i_k = n;
  }
}
function decode() {
  if (pgcd(k, ALPHABET_SIZE) == 1) {
    var txt = end_text.value
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .replace(" ", "@")
      .toUpperCase();
    end_text.value = txt.replace("@", " ");
    end_sequence = [];
    for (var i = 0; i < txt.length; i++) {
      end_sequence.push(txt[i].charCodeAt(0));
    }
    start_sequence = [];
    for (var i = 0; i < txt.length; i++) {
      c = end_sequence[i];
      if (c <= 90 && c >= 64) {
        d =
          (((((c - 64) * i_k) % ALPHABET_SIZE) + ALPHABET_SIZE) %
            ALPHABET_SIZE) +
          64;
      } else {
        d = c;
      }
      start_sequence.push(d);
    }
    start_text.value = String.fromCharCode(...start_sequence).replace("@", " ");
  }
}

function translate() {
  if (direction == 0) {
    decode();
  } else {
    encode();
  }
}

function change_direction() {
  if (direction == 0) {
    direction_btn.innerText = "→";
    direction = 1;
  } else {
    direction_btn.innerText = "←";
    direction = 0;
  }
}
change_direction();
