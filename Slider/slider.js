let flag = 0;

function change(n) {
  flag = flag + n;
  Slider(flag);
}

Slider(flag);

function Slider(num) {
  let slides = document.getElementsByClassName("slide");

  if (num == slides.length) {
    flag = 0;
    num = 0;
  } else if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }

  for (let x of slides) {
    x.style.display = "none";
  }

  slides[num].style.display = "block";
}
setInterval(Slider, 1000);
