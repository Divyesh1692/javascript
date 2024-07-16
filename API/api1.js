let productsData = Array();
const loadData = async () => {
  const url =
    "https://real-time-amazon-data.p.rapidapi.com/search?query=Phone&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "a6862656a1msh8a59c1ba83f8a63p1bb3c5jsn6e8a436419e3",
      "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    productsData = result.data;
    // window.localStorage.setItem("productsData", JSON.stringify(productsData));

    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

loadData();

// function displayData() {
//   let productRow = " ";

//   productsData.forEach((e) => {
//     productRow = `<td><img src="${e.product_photo}" ><td>
//                     <td>${e.title}</td>`;
//   });
//   document.getElementById("tableRow").innerHTML = productRow;
//   console.log(productRow);
// }
// displayData();
