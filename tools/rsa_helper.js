const p_select = document.getElementById("p");
const q_select = document.getElementById("q");
const n_input = document.getElementById("n");
const phi_n_input = document.getElementById("phi_n");
const e_select = document.getElementById("e");
const d_input = document.getElementById("d");
var p = Number(p_select.value);
var q = Number(q_select.value);
var n;
var phi_n;
var e;
var d;

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
function calc_options_e() {
  var divisors = [];
  for (let k = 2; k < Math.sqrt(phi_n); k++) {
    if (phi_n % k == 0) {
      divisors.push(k);
    }
  }
  var options_e = "";
  for (let k = 1; k < phi_n; k++) {
    var ok = true;
    for (let i = 0; i < divisors.length; i++) {
      const d = divisors[i];
      if (k % d == 0) {
        ok = false;
      }
    }
    if (ok) {
      options_e += '<option value="' + k + '">' + k + "</option>";
    }
    e_select.innerHTML = options_e;
  }
}
function calc_d() {
  e = Number(e_select.value);
  for (let k = 1; k < phi_n; k++) {
    if ((e * k) % phi_n == 1) {
      d = k;
      k = phi_n;
    }
  }
  d_input.value = d;
}

calc_n();
calc_phi_n();
calc_options_e();
