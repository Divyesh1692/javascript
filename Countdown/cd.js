const quotes = [
  {
    text: "If you want to shine like a sun, first burn like a sun",
    Author: "- APJ Abdul Kalam",
  },
  {
    text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    Author: "- Albert Einstein",
  },
  {
    text: "First, solve the problem. Then, write the code.",
    Author: "- John Johnson",
  },
  {
    text: "Code is like humor. When you have to explain it, it’s bad.",
    Author: "- Cory House",
  },
];

let i = 0;

function showQuote() {
  let quote = document.getElementById("t");
  let aut = document.getElementById("a");
  let timer = document.getElementById("timer");
  let sec = 30;
  function time() {
    timer.innerHTML = sec;
    --sec;
    if (sec == -1) {
      showQuote();
    }
  }
  setInterval(time, 1000);
  quote.innerHTML = quotes[i].text;
  aut.innerHTML = quotes[i].Author;
  i++;
  if (i == quotes.length) {
    i = 0;
  }
}

showQuote();
// setInterval(showQuote, 3000);
