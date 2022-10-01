const p_select = document.getElementById("p");
const q_select = document.getElementById("q");
const n_input = document.getElementById("n");
const phi_n_input = document.getElementById("phi_n");
const e_select = document.getElementById("e");
const d_input = document.getElementById("d");
const c_input = document.getElementById("c");
const m_input = document.getElementById("m");
const n_sender_input = document.getElementById("n_sender");
const e_sender_input = document.getElementById("e_sender");
const m_sender_input = document.getElementById("m_sender");
const c_sender_input = document.getElementById("c_sender");
var p = Number(p_select.value);
var q = Number(q_select.value);
var n;
var phi_n;
var e;
var d;
var c;
var m;
var n_sender;
var e_sender;
var m_sender;
var c_sender;

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
  var nb_options = 0;
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
      nb_options += 1;
      options_e += '<option value="' + k + '">' + k + "</option>";
    }
    if (nb_options > 500) {
      k = phi_n;
    }
  }
  e_select.innerHTML = options_e;
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

function calc_m() {
  c = Number(c_input.value);
  var a = c;
  for (let i = 1; i < d; i++) {
    a = (a * c) % n;
  }
  m = a;
  m_input.value = m;
}

function calc_sender_c() {
  n_sender = Number(n_sender_input.value);
  e_sender = Number(e_sender_input.value);
  m_sender = Number(m_sender_input.value);
  var a = m_sender;
  for (let i = 1; i < e_sender; i++) {
    a = (a * m_sender) % n;
  }
  c_sender = a;
  c_sender_input.value = c_sender;
}

calc_n();
calc_phi_n();
calc_options_e();
calc_d();
calc_sender_c();
calc_m();
