let Fruits = Array();
window.localStorage.setItem("fList", JSON.stringify(Fruits));
function addFruits() {
  let f = JSON.parse(window.localStorage.getItem("fList"));
  let fru = document.getElementById("inp").value;
  f.push(fru);
  window.localStorage.setItem("fList", JSON.stringify(f));
  document.getElementById("op").innerHTML = f;
}
