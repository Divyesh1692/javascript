let btn = document.getElementById("sbm");
// let inpText = document.getElementById("inp-text").value;
// let inpLang = document.getElementById("inp-lang").value;

document.getElementById("sbm").addEventListener("click", function (event) {
  event.preventDefault();

  let text = document.getElementById("inp-data").value;
  let target = document.getElementById("inp-lang").value;
  let source = document.getElementById("source-lang").value;

  const url = "https://text-translator2.p.rapidapi.com/translate";
  const data = new FormData();
  data.append("source_language", source);
  data.append("target_language", target);
  data.append("text", text);

  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": "a6862656a1msh8a59c1ba83f8a63p1bb3c5jsn6e8a436419e3",
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
      "x-rapidapi-key": "a6862656a1msh8a59c1ba83f8a63p1bb3c5jsn6e8a436419e3",
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

function detectLang() {
  let text = document.getElementById("inp-data").value;
  let source = document.getElementById("source-lang");
  const url = `https://translate-all-languages.p.rapidapi.com/detect?text=${text}`;
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
      source.value = data.langDetect;
    });
}
