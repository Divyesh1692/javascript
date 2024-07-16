let productsData = Array();
const loadData = async () => {
  const url =
    "https://aliexpress-datahub.p.rapidapi.com/shipping_detail?itemId=3256804591426248&quantity=1&ext=bVkg9vW8ihgAMt4XYtZhMB3rnoY6MGI8Sk1gfrl4IGWuBdZZb0gRv5vgI1r5DIn8Rj7mxVzOKbKpyHkmBItRm_k2dtJ1j_gHLTu5zNN9jXHeQploYHEajpnygmD_xKGbi9I_HzxO8TtoIpwdvl5ZfH6o_x5qCBy5D1cUo6t7LoDhx7UTHmFDiCHY0PpHokfJ";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "a6862656a1msh8a59c1ba83f8a63p1bb3c5jsn6e8a436419e3",
      "x-rapidapi-host": "aliexpress-datahub.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

loadData();
