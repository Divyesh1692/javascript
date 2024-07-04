const loadData = () => {
  let user = JSON.parse(window.localStorage.getItem("currentUser"));

  document.getElementById("welcome").innerHTML = user;
};
loadData();

let allProducts = JSON.parse(window.localStorage.getItem("allProducts")) || [];
let user = JSON.parse(window.localStorage.getItem("currentUser"));
let cartProducts =
  JSON.parse(window.localStorage.getItem(`${user}-cart`)) || [];

//Display Product On Home Page
function displayProducts() {
  let mainDiv = document.getElementById("allData");
  let allProducts =
    JSON.parse(window.localStorage.getItem("allProducts")) || [];
  mainDiv.innerHTML = allProducts.map((x, i) => {
    let { id, title, price, thumbnail } = x;
    return `
    <div id=prodcut-id-${id}>
               <img src= '${thumbnail}' alt='' />
               <div class='product_info' >
                      <h3>${title}</h3>
                      <p>$${price} </p>

                       <button onclick ="addTocart('${id}','${thumbnail}','${title}','${price}')">Add to Cart </button>
               </div>
           </div>
    `;
  });
}

displayProducts();

//Add Products In Cart
function addTocart(id, thumbnail, title, price) {
  cartProducts = JSON.parse(window.localStorage.getItem(`${user}-cart`)) || [];
  let Id = id;
  let p = false;
  for (let i = 0; i < cartProducts.length; i++) {
    if (cartProducts[i].id == Id) {
      p = true;
    }
  }
  if (p) {
    alert("Product Is Alredy Present in Cart!!!");
  } else {
    let qty = 1;
    let cartP = {
      id: id,
      thumbnail: thumbnail,
      title: title,
      price: price,
      qty: qty,
    };
    cartProducts.push(cartP);
    window.localStorage.setItem(`${user}-cart`, JSON.stringify(cartProducts));
    alert("Product Added To Cart");
  }
}
