let api = "https://dummyjson.com/products?limit=20";
let myData = Array();
const loadData = async () => {
  await fetch(api)
    .then((res) => {
      console.log(res.products);
      return res.json();
    })
    .then((data) => {
      myData = data.products;
      displayData();
    })
    .catch((e) => {
      console.log(e);
    });
  console.log(myData);
};
loadData();

function displayData() {
  let Table = document.getElementById("table");

  myData.forEach((e, i) => {
    let tRow = document.createElement("tr");
    tRow.align = "center";
    tRow.innerHTML = `<td><img src="${e.thumbnail}"></td>
    <td><b>${e.title}<b></td><td><b>$${e.price}<b></td>
    `;
    Table.append(tRow);
  });
}
