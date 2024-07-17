let btn = document.getElementById("btn");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  let country = document.getElementById("inp").value;

  const url = `https://covid-19-data.p.rapidapi.com/country?name=${country}&format=json`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "a6862656a1msh8a59c1ba83f8a63p1bb3c5jsn6e8a436419e3",
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    },
  };
  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      let table = document.getElementById("c-data");
      table.innerHTML = "";
      let ctr = document.createElement("tr");
      let cctr = document.createElement("tr");
      let rctr = document.createElement("tr");
      let crtr = document.createElement("tr");
      let dtr = document.createElement("tr");
      let lastUpd = document.createElement("tr");
      ctr.innerHTML = `<th>Country</th>
      <td>${data[0].country}</td>`;
      cctr.innerHTML = `<th>Confirmed Case</th>
      <td>${data[0].confirmed}</td>`;
      rctr.innerHTML = `<th>Recovered Case</th>
      <td>${data[0].recovered}</td>`;
      crtr.innerHTML = `<th>Critical Case</th>
      <td>${data[0].critical}</td>`;
      dtr.innerHTML = `<th>Deaths</th>
      <td>${data[0].deaths}</td>`;
      lastUpd.innerHTML = `<th>Last Updated</th>
      <td>${data[0].lastUpdate}</td>`;

      table.append(ctr, cctr, rctr, crtr, dtr, lastUpd);
    });
});
