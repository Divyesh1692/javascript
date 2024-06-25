let data = JSON.parse(window.localStorage.getItem("data")) || [];
isUpdating = false;

function addData() {
  if (isUpdating) {
    update();
  } else {
    let id = document.getElementById("inp-id").value;
    let name = document.getElementById("inp-name").value;
    let age = document.getElementById("inp-age").value;

    data.push({
      id: id,
      name: name,
      age: age,
    });

    window.localStorage.setItem("data", JSON.stringify(data));

    displayData();
  }
}

function displayData() {
  let dataTable = document
    .getElementById("data")
    .getElementsByTagName("tbody")[0];
  data = JSON.parse(window.localStorage.getItem("data")) || [];

  dataTable.innerHTML = "";
  data.forEach((element, index) => {
    let row = document.createElement("tr");
    let tdId = document.createElement("td");
    let tdName = document.createElement("td");
    let tdAge = document.createElement("td");
    let tdUpd = document.createElement("td");
    let tdDlt = document.createElement("td");

    tdId.innerHTML = element.id;
    tdName.innerHTML = element.name;
    tdAge.innerHTML = element.age;
    tdUpd.innerHTML = `<input type="button" value="Update" onclick="updateData(${index})"/>`;
    tdDlt.innerHTML = `<input type="button" value="Delete" onclick="deleteData(${index})"/>`;

    row.append(tdId, tdName, tdAge, tdUpd, tdDlt);
    dataTable.append(row);
  });
}

function updateData(index) {
  isUpdating = true;
  let sbm = document.getElementById("submit");
  sbm.value = "Update";

  let inpId = document.getElementById("inp-id");
  let inpName = document.getElementById("inp-name");
  let inpAge = document.getElementById("inp-age");

  let inpIndex = document.createElement("input");
  inpIndex.id = "inp-index";
  inpIndex.type = "hidden";

  inpId.value = data[index].id;
  inpName.value = data[index].name;
  inpAge.value = data[index].age;
  inpIndex.value = index;

  let form = document.getElementById("form-data");
  form.append(inpIndex);
}

function update() {
  let inpId = document.getElementById("inp-id");
  let inpName = document.getElementById("inp-name");
  let inpAge = document.getElementById("inp-age");
  let index = document.getElementById("inp-index");

  data[index.value] = {
    id: inpId.value,
    name: inpName.value,
    age: inpAge.value,
  };

  window.localStorage.setItem("data", JSON.stringify(data));

  let sbm = document.getElementById("submit");
  sbm.value = "Submit";
  displayData();
}

function deleteData(index) {
  data = JSON.parse(window.localStorage.getItem("data")) || [];
  data.splice(index, 1);
  window.localStorage.setItem("data", JSON.stringify(data));
  displayData();
}

displayData();
