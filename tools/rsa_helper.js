const p_select = document.getElementById("p");
const q_select = document.getElementById("q");
const n_input = document.getElementById("n");
const phi_n_input = document.getElementById("phi_n");
var p = Number(p_select.value);
var q = Number(q_select.value);
var n;
var phi_n;

function calc_n() {
  p = Number(p_select.value);
  q = Number(q_select.value);
  n = p * q;
  n_input.value = n;
}
function calc_phi_n() {
  p = Number(p_select.value);
  q = Number(q_select.value);
  phi_n = (p - 1) * (q - 1);
  phi_n_input.value = phi_n;
}

calc_n();
calc_phi_n();
