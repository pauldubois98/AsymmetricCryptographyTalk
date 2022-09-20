const mod_input = document.getElementById("mod");
const n_input = document.getElementById("n");
const simpl_input = document.getElementById("simpl");
const x_input = document.getElementById("x");
const y_input = document.getElementById("y");
const mult_input = document.getElementById("mult");
const z_input = document.getElementById("z");
const e_input = document.getElementById("e");
const pow_input = document.getElementById("pow");
const a_input = document.getElementById("a");
const inv_input = document.getElementById("inv");
const mods = document.querySelectorAll(".mod");
var mod = 0;

function no_output() {
  simpl_input.value = "";
  mult_input.value = "";
  pow_input.value = "";
  inv_input.value = "";
}
function update_mod() {
  mod = Number(mod_input.value);
  if (mod !== 0 && mod > 1) {
    for (const m of mods) {
      m.innerHTML = "[" + mod + "]";
    }
  } else {
    for (const m of mods) {
      m.innerHTML = "[mod]";
    }
    no_output();
  }
}
update_mod();

function update_simpl() {
  if (mod > 1) {
    n = Number(n_input.value);
    simpl_input.value = n % mod;
  }
}

function update_mult() {
  if (mod > 1) {
    x = Number(x_input.value);
    y = Number(y_input.value);
    mult_input.value = (x * y) % mod;
  }
}

function update_pow() {
  if (mod > 1) {
    z = Number(z_input.value);
    e = Number(e_input.value);
    var p = 1;
    for (let i = 0; i < e; i++) {
      p = (p * z) % mod;
    }
    pow_input.value = p;
  }
}

function update_inv() {
  if (mod > 1) {
    a = Number(a_input.value);
    var a_i = 0;
    for (let i = 1; i < mod; i++) {
      if ((a * i) % mod == 1) {
        a_i = i;
      }
    }
    inv_input.value = a_i;
  }
}
