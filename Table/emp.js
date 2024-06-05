// const data =
// {
//     id : document.getElementById('i').value,
//     name : document.getElementById('n').value,
//     designation : document.getElementById('des').value,
//     salary : document.getElementById('s').value,
// };

// Creating object
let emp = {
  id: 101,
  name: "Demo",
  designation: "Demo",
  salary: 100,
};

function d() {
  // Getting values
  emp.id = document.getElementById("i").value;
  obj.name = document.getElementById("n").value;
  obj.designation = document.getElementById("des").value;
  obj.salary = document.getElementById("s").value;

  // Table object
  let t = document.getElementById("op");

  // Creating elements
  let td_id = document.createElement("td");
  let td_name = document.createElement("td");
  let td_des = document.createElement("td");
  let td_sal = document.createElement("td");
  let tr = document.createElement("tr");

  // Assign data
  td_id.innerHTML = id;
  td_name.innerHTML = name;
  td_des.innerHTML = designation;
  td_sal.innerHTML = salary;

  // Adding in row
  tr.append(td_id, td_name, td_des, td_sal);

  // Adding in table
  t.append(tr);
}
