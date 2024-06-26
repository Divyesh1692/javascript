let data = JSON.parse(window.localStorage.getItem("data")) || [];

function signUp() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  if (data.some((u) => u.user == user)) {
    alert("Username already exists.");
  } else {
    data.push({
      user: user,
      pass: pass,
    });
    window.localStorage.setItem("data", JSON.stringify(data));
    alert("Signup successful!");
    window.location.href = "login.html";
  }
}

function Login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let data = JSON.parse(window.localStorage.getItem("data")) || [];

  let u = data.find((u) => u.user == user && u.pass == pass);

  if (u) {
    alert("Login successful!");
    // document.getElementById("welcome").innerHTML = user;
    window.location.href = "home.html";
  } else {
    alert("Invalid username or password.");
  }
}
