let user = JSON.parse(window.localStorage.getItem("currentUser"));
let cartProducts =
  JSON.parse(window.localStorage.getItem(`${user}-cart`)) || [];

function displayCart() {
  let mainDiv = document.getElementById("My-Cart");
  cartProducts = JSON.parse(window.localStorage.getItem(`${user}-cart`)) || [];
  if (cartProducts.length == 0) {
    mainDiv.innerHTML = `<h2>Your Cart Is Empty!!!</h2>`;
    displayCart();
  } else {
    mainDiv.innerHTML = cartProducts.map((x, i) => {
      let { id, title, price, thumbnail, qty } = x;
      return `
        <div id=prodcut-id-${id}>
                   <img src= '${thumbnail}' alt='' />
                   <div>
                          <h3>${title}</h3>
                          <p>$${price} </p>
                          <button onclick="minus('${id}')">-</button>
                          <input type="text" id="${id}-qty" value="${qty}">
                          <button onclick="plus('${id}')">+</button><br><br>
                          <button onclick ="updateQty('${id}')">Update Quantity </button>
                          <button onclick ="remove('${id}')">Remove </button>
                   </div>
               </div>
        `;
    });
    let totalDiv = document.getElementById("Total");
    totalDiv.innerHTML = `<h3>Use Coupon FLAT10 for 10% OFF</h3>
    <input type="text" id="coupon" placeholder="Enter Coupon">
    <button onclick ="coupon()">Apply Coupon </button><br>
    <span id="save"></span>
    <h2 id="total"></h2>`;
    total();
  }
}

function plus(id) {
  // console.log("plus");
  console.log(id);
  let Id = id;
  cartProducts = JSON.parse(window.localStorage.getItem(`${user}-cart`)) || [];
  for (let i = 0; i < cartProducts.length; i++) {
    if (cartProducts[i].id == Id) {
      let qty = parseInt(document.getElementById(`${id}-qty`).value);
      // qty = cartProducts[i].qty;
      Qty = qty + 1;
      console.log(Qty);
      document.getElementById(`${id}-qty`).value = Qty;
      cartProducts[i].qty = Qty;
      window.localStorage.setItem(`${user}-cart`, JSON.stringify(cartProducts));
    }
  }
  displayCart();
  window.localStorage.setItem(`${user}-cart`, JSON.stringify(cartProducts));
}

function minus(id) {
  let Id = id;
  cartProducts = JSON.parse(window.localStorage.getItem(`${user}-cart`)) || [];
  for (let i = 0; i < cartProducts.length; i++) {
    if (cartProducts[i].id == Id) {
      let qty = parseInt(document.getElementById(`${id}-qty`).value);
      // qty = cartProducts[i].qty;
      if (qty == 1) {
        remove(id);
      } else {
        Qty = qty - 1;
        console.log(Qty);
        document.getElementById(`${id}-qty`).value = Qty;
        cartProducts[i].qty = Qty;
      }
      window.localStorage.setItem(`${user}-cart`, JSON.stringify(cartProducts));
    }
  }
  displayCart();
  window.localStorage.setItem(`${user}-cart`, JSON.stringify(cartProducts));
}

displayCart();

function remove(id) {
  cartProducts = cartProducts.filter((x) => x.id != id);
  window.localStorage.setItem(`${user}-cart`, JSON.stringify(cartProducts));
  total();
  displayCart();
}

function updateQty(id) {
  let Id = id;
  cartProducts = JSON.parse(window.localStorage.getItem(`${user}-cart`)) || [];
  for (let i = 0; i < cartProducts.length; i++) {
    if (cartProducts[i].id == Id) {
      let Qty = parseInt(document.getElementById(`${id}-qty`).value);
      cartProducts[i].qty = Qty;
    }
    window.localStorage.setItem(`${user}-cart`, JSON.stringify(cartProducts));
  }
  total();
  displayCart();
}

function calculate() {
  cartProducts = JSON.parse(window.localStorage.getItem(`${user}-cart`)) || [];
  let total = 0,
    price,
    Qty,
    amount;
  for (let i = 0; i < cartProducts.length; i++) {
    price = parseFloat(cartProducts[i].price);
    Qty = parseInt(cartProducts[i].qty);
    amount = price * Qty;
    total = total + amount;
  }
  return total;
  // let dis = document.getElementById("coupon").value;
  // if (dis == "FLAT10") {
  //   save = parseFloat((total * 10) / 100);
  //   total = total - save;
  //   document.getElementById(
  //     "save"
  //   ).innerHTML = `<b><i>You Saved : $ ${save.toFixed(2)}</i></b>`;
  // }
}

function total() {
  total = calculate();
  document.getElementById("total").innerHTML =
    "Total Price : $" + total.toFixed(2);
}
document.getElementById("total").innerHTML =
  "Total Price : $" + total.toFixed(2);

function coupon() {
  // cartProducts = JSON.parse(window.localStorage.getItem(`${user}-cart`)) || [];
  // let total = 0,
  //   price,
  //   Qty,
  //   amount,
  //   save = 0;
  // for (let i = 0; i < cartProducts.length; i++) {
  //   price = parseFloat(cartProducts[i].price);
  //   Qty = parseInt(cartProducts[i].qty);
  //   amount = price * Qty;
  //   total = total + amount;
  // }
  let total = calculate();
  let dis = document.getElementById("coupon").value;
  if (dis == "FLAT10") {
    save = parseFloat((total * 10) / 100);
    total = total - save;
    document.getElementById(
      "save"
    ).innerHTML = `<b><i>You Saved : $ ${save.toFixed(2)}</i></b>`;
  } else {
    document.getElementById("save").innerHTML = `Please Enter Valid Coupon`;
  }
  document.getElementById("total").innerHTML =
    "Total Price : $" + total.toFixed(2);
}
