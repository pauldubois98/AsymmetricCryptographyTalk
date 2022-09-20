var mod_input = document.getElementById("mod");
var n_input = document.getElementById("n");
var simpl_input = document.getElementById("simpl");
var x_input = document.getElementById("x");
var y_input = document.getElementById("y");
var mult_input = document.getElementById("mult");
var z_input = document.getElementById("z");
var e_input = document.getElementById("e");
var pow_input = document.getElementById("pow");
var a_input = document.getElementById("a");
var inv_input = document.getElementById("inv");
const mods = document.querySelectorAll(".mod");

function update_mods() {
  for (const mod of mods) {
    mod.innerHTML = "[" + mod_input.value + "]";
  }
}
function no_output() {
  simpl_input.value = "";
  mult_input.value = "";
  pow_input.value = "";
  inv_input.value = "";
}
