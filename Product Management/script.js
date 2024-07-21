let pData = JSON.parse(window.localStorage.getItem("pData")) || [
  {
    id: 1,
    title: "Laptop",
    price: 999,
    image:
      "https://m.media-amazon.com/images/I/81T5jRKDkvL._AC_UY327_FMwebp_QL65_.jpg",
    category: "electronics",
  },
  {
    id: 2,
    title: "T-Shirt",
    price: 19,
    image:
      "https://m.media-amazon.com/images/I/51gORFALQGL._AC_UL480_FMwebp_QL65_.jpg",
    category: "fashion",
  },
  {
    id: 3,
    title: "Book",
    price: 12,
    image: "https://m.media-amazon.com/images/I/91xafByFlLL._SY466_.jpg",
    category: "books",
  },
];

function displayProducts(filteredProducts = pData) {
  let mainDiv = document.getElementById("mainDiv");
  mainDiv.innerHTML = "";
  //   pData = JSON.parse(window.localStorage.getItem("pData"));
  filteredProducts.forEach((e, i) => {
    let Div = document.createElement("div");
    Div.innerHTML = "";
    Div.innerHTML = `
    <h3>${e.title}</h3>
            <img src="${e.image}" width = "200px">
            <p>Price: $${e.price}</p>
            <p>Category: ${e.category}</p>
            <button onclick="editProduct(${e.id})">Edit</button>
            <button onclick="deleteProduct(${e.id})">Delete</button>
            <br><hr>
        `;
    mainDiv.appendChild(Div);
  });
}

function addProduct() {
  let Id = parseInt(pData.length + 1);
  let T = document.getElementById("t").value;
  let P = document.getElementById("p").value;
  let I = document.getElementById("i").value;
  let C = document.getElementById("c").value;
  pData = JSON.parse(window.localStorage.getItem("pData"));
  let p = {
    id: Id,
    title: T,
    price: P,
    image: I,
    category: C,
  };
  pData.push(p);
  window.localStorage.setItem("pData", JSON.stringify(pData));
  document.getElementById("Id").value = "";
  document.getElementById("t").value = "";
  document.getElementById("p").value = "";
  document.getElementById("i").value = "";
  document.getElementById("c").value = "";
  document.getElementById("search").value = "";
  displayProducts();
}

function editProduct(id) {
  let Id = id;
  let product = pData.findIndex((product) => product.id == Id);
  console.log(product);
  document.getElementById("h").innerHTML = "Edit Product Details";
  document.getElementById("Id").value = pData[product].id;
  document.getElementById("Id").style = "display: none;";
  document.getElementById("t").value = pData[product].title;
  document.getElementById("p").value = pData[product].price;
  document.getElementById("i").value = pData[product].image;
  document.getElementById("c").value = pData[product].category;

  document.getElementById("addP").style = "display: none;";
  document.getElementById("updateP").style = "display:inline ;";
}

function updateProduct() {
  let Id = document.getElementById("Id").value;
  console.log(Id);
  let product = pData.findIndex((product) => product.id == Id);
  let T = document.getElementById("t").value;
  let P = document.getElementById("p").value;
  let I = document.getElementById("i").value;
  let C = document.getElementById("c").value;
  pData = JSON.parse(window.localStorage.getItem("pData"));
  let p = {
    id: Id,
    title: T,
    price: P,
    image: I,
    category: C,
  };
  pData.splice(product, 1, p);
  window.localStorage.setItem("pData", JSON.stringify(pData));
  document.getElementById("h").innerHTML = "Add New Product";
  document.getElementById("addP").style = "display:inline ;";
  document.getElementById("updateP").style = "display: none;";
  document.getElementById("Id").value = "";
  document.getElementById("t").value = "";
  document.getElementById("p").value = "";
  document.getElementById("i").value = "";
  document.getElementById("c").value = "";
  document.getElementById("search").value = "";
  displayProducts();
}
function deleteProduct(id) {
  pData = pData.filter((product) => product.id != id);
  window.localStorage.setItem("pData", JSON.stringify(pData));
  displayProducts();
}

function sortP() {
  let sort = document.getElementById("sortP").value;
  console.log(sort);
  if (sort == "asc") {
    pData.sort((a, b) => a.price - b.price);
  } else if (sort == "desc") {
    pData.sort((a, b) => b.price - a.price);
  }
  window.localStorage.setItem("pData", JSON.stringify(pData));
  document.getElementById("search").value = "";
  displayProducts();
}

function sortC() {
  let C = document.getElementById("sortC").value;
  if (C) {
    displayProducts(pData.filter((e) => e.category == C));
    console.log(C);
  } else {
    displayProducts();
  }
}

function searchP() {
  let search = document.getElementById("search").value.toLowerCase();
  displayProducts(pData.filter((e) => e.title.toLowerCase().includes(search)));
}
displayProducts();
