document.getElementById("sbm").addEventListener("click", function (event) {
  event.preventDefault();

  let city = document.getElementById("inp-city").value;
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=217d9466fcece181f108ef7574f237b4`;

  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("res").innerHTML =
        "Weather : " + data.weather[0].main;

      let icon = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="WEATHER ICON" id="icon" />`;

      // icon.src =
      //   "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

      document.getElementById("wi").innerHTML = icon;
    });
});
