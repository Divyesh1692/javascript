let btn = document.getElementById("sbm");
// let inpText = document.getElementById("inp-text").value;
// let inpLang = document.getElementById("inp-lang").value;

document.getElementById("sbm").addEventListener("click", function (event) {
  event.preventDefault();

  let text = document.getElementById("inp-data").value;
  let target = document.getElementById("inp-lang").value;

  const url = "https://text-translator2.p.rapidapi.com/translate";
  const data = new FormData();
  data.append("source_language", "en");
  data.append("target_language", target);
  data.append("text", text);

  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": "2e59e3a545mshd803fd1ed71a23cp1eb9c0jsne0d6a0bc95b6",
      "x-rapidapi-host": "text-translator2.p.rapidapi.com",
    },
    body: data,
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      document.getElementById("res").innerHTML = data.data.translatedText;
    });
});

const loadLanguages = async () => {
  const url = "https://text-translator2.p.rapidapi.com/getLanguages";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "2e59e3a545mshd803fd1ed71a23cp1eb9c0jsne0d6a0bc95b6",
      "x-rapidapi-host": "text-translator2.p.rapidapi.com",
    },
  };

  let allLangBtns = document.getElementById("all-lang");

  allLangBtns.innerHTML = "";

  allLangBtns.style.display = "flex";
  allLangBtns.style.width = "500px";

  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let langs = Array();

      langs = data.data.languages;

      langs.forEach((e) => {
        let btn = document.createElement("button");

        btn.innerHTML = e.name;

        btn.addEventListener("click", function (event) {
          event.preventDefault();

          document.getElementById("inp-lang").value = e.code;
        });

        allLangBtns.append(btn);
      });
    });
};

loadLanguages();
