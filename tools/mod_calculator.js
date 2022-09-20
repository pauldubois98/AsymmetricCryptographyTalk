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

function update_mods() {
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
function no_output() {
  simpl_input.value = "";
  mult_input.value = "";
  pow_input.value = "";
  inv_input.value = "";
}

function update_simpl() {
  if (mod > 1) {
    n = Number(n_input.value);
    simpl_input.value = n % mod;
  }
}
