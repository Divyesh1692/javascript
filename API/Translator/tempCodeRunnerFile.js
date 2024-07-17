const url =
    "https://translate-all-languages.p.rapidapi.com/detect?text=If%20you%20don%E2%80%99t%20know%20what%20language%20the%20text%20is%20written%20in%2C%20our%20API%20will%20detect%20the%20language%20of%20the%20original%20request.";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "a6862656a1msh8a59c1ba83f8a63p1bb3c5jsn6e8a436419e3",
      "x-rapidapi-host": "translate-all-languages.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });