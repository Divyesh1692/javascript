let st = document.getElementById("start");
let stp = document.getElementById("stop");
let Res = document.getElementById("reset");

let h = 0;
let m = 0;
let s = 0;
let ms = 0;

st.addEventListener("click", function () {
  time = true;
  stopWatch();
});

stp.addEventListener("click", function () {
  time = false;
});

Res.addEventListener("click", function () {
  time = false;
  h = 0;
  m = 0;
  s = 0;
  ms = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("mn").innerHTML = "00";
  document.getElementById("sc").innerHTML = "00";
  document.getElementById("ms").innerHTML = "00";
});

function stopWatch() {
  console.log(time);

  if (time) {
    ms++;
    if (ms == 100) {
      s++;
      ms = 0;
    }
    if (s == 60) {
      m++;
      s = 0;
    }

    if (m == 60) {
      h++;
      m = 0;
      s = 0;
    }

    let hour = h;
    let min = m;
    let sec = s;
    let milisec = ms;

    if (h < 10) {
      hour = "0" + hour;
    }

    if (m < 10) {
      min = "0" + min;
    }

    if (s < 10) {
      sec = "0" + sec;
    }
    if (ms < 10) {
      milisec = "0" + milisec;
    }

    document.getElementById("hr").innerHTML = hour;
    document.getElementById("mn").innerHTML = min;
    document.getElementById("sc").innerHTML = sec;
    document.getElementById("ms").innerHTML = milisec;
    setTimeout(stopWatch, 10);
  }
}
