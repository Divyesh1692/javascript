// Load products from localStorage or set default products
let products = JSON.parse(localStorage.getItem("products")) || [
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

function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
}

function displayProducts(filteredProducts = products) {
  const productContainer = document.getElementById("product-list");
  productContainer.innerHTML = "";

  filteredProducts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
            <p>Category: ${product.category}</p>
            <button onclick="editProduct(${product.id})">Edit</button>
            <button onclick="deleteProduct(${product.id})">Delete</button>
        `;
    productContainer.appendChild(productElement);
  });
}

function showAddProductForm() {
  document.getElementById("product-id").value = "";
  document.getElementById("product-title").value = "";
  document.getElementById("product-price").value = "";
  document.getElementById("product-image").value = "";
  document.getElementById("product-category").value = "";
  document.getElementById("form-title").textContent = "Add Product";
  document.getElementById("product-form-section").classList.remove("hidden");
}

function hideProductForm() {
  document.getElementById("product-form-section").classList.add("hidden");
}

function submitProductForm(event) {
  event.preventDefault();

  const id = document.getElementById("product-id").value;
  const title = document.getElementById("product-title").value;
  const price = document.getElementById("product-price").value;
  const image = document.getElementById("product-image").value;
  const category = document.getElementById("product-category").value;

  if (id) {
    const productIndex = products.findIndex((product) => product.id == id);
    products[productIndex] = {
      id: parseInt(id),
      title,
      price: parseFloat(price),
      image,
      category,
    };
  } else {
    const newId = products.length
      ? Math.max(...products.map((p) => p.id)) + 1
      : 1;
    products.push({
      id: newId,
      title,
      price: parseFloat(price),
      image,
      category,
    });
  }

  saveProducts();
  displayProducts();
  hideProductForm();
}

function editProduct(id) {
  const product = products.find((product) => product.id == id);
  document.getElementById("product-id").value = product.id;
  document.getElementById("product-title").value = product.title;
  document.getElementById("product-price").value = product.price;
  document.getElementById("product-image").value = product.image;
  document.getElementById("product-category").value = product.category;
  document.getElementById("form-title").textContent = "Edit Product";
  document.getElementById("product-form-section").classList.remove("hidden");
}

function deleteProduct(id) {
  products = products.filter((product) => product.id != id);
  saveProducts();
  displayProducts();
}

function sortProductsByPrice() {
  const sortBy = document.getElementById("sort-price").value;
  if (sortBy) {
    products.sort((a, b) =>
      sortBy === "asc" ? a.price - b.price : b.price - a.price
    );
  }
  displayProducts();
}

function sortProductsByCategory() {
  const category = document.getElementById("sort-category").value;
  if (category) {
    displayProducts(
      products.filter((product) => product.category === category)
    );
  } else {
    displayProducts();
  }
}

function searchProducts() {
  const query = document.getElementById("search").value.toLowerCase();
  displayProducts(
    products.filter((product) => product.title.toLowerCase().includes(query))
  );
}

// Initial display
displayProducts();
