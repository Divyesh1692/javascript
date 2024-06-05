let list = [];
function add() {
  let item = document.getElementById("1").value;

  list.push(item);
  console.log(list);
  let t = document.getElementById("t");
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  td.innerHTML = item;
  td.id = "td" + item;
  tr.append(td);
  tr.id = item;
  t.append(tr);
}

function rem() {
  let item = document.getElementById("rem").value;
  let row = document.getElementById(item);
  row.remove();
}

function Change() {
  let newVal = document.getElementById("n").value;
  let oldVal = document.getElementById("o").value;

  let row = document.getElementById(oldVal);
  row.id = newVal;
  let td = document.getElementById("td" + oldVal);
  td.innerHTML = newVal;
  td.id = "td" + newVal;
}
