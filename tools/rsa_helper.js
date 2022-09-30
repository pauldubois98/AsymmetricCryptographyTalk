const p_select = document.getElementById("p");
const q_select = document.getElementById("q");
const n_input = document.getElementById("n");
var p = Number(p_select.value);
var q = Number(q_select.value);
var n;

function calc_n() {
  p = Number(p_select.value);
  q = Number(q_select.value);
  n = p * q;
  n_input.value = n;
}

calc_n();
