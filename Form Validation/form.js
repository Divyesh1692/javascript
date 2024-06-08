function validation() {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let pass = document.querySelector("#pass").value;

  // name validation
  if (name == null || name == "") {
    document.querySelector("#nameerror").innerHTML = "Please Enter Name";
    document.querySelector("#nameerror").style.color = "Red";
  } else {
    document.querySelector("#nameerror").innerHTML = "";
  }

  // Email Validation
  if (email == null || email == "") {
    document.querySelector("#emailerror").innerHTML = "Please Enter Email";
    document.querySelector("#emailerror").style.color = "Red";
  } else {
    // Use Reg Expression
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let checkemail = reg.test(email);
    if (checkemail) {
      document.querySelector("#emailerror").innerHTML = "";
    } else {
      document.querySelector("#emailerror").innerHTML =
        "Enter Email Id In Valid Format. Example : abc123@gmail.com";
      document.querySelector("#emailerror").style.color = "Red";
    }
  }

  // Password Validation
  if (pass == null || pass == "") {
    document.querySelector("#passerror").innerHTML = "Please Enter Password";
    document.querySelector("#passerror").style.color = "Red";
  } else {
    // Use Reg Expression
    let reg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    let checkpass = reg.test(pass);
    if (checkpass) {
      document.querySelector("#passerror").innerHTML = "";
    } else {
      document.querySelector("#passerror").innerHTML =
        "Password must contain Capital & Small Letters, Special Characters, numbers & Symbols";
      document.querySelector("#passerror").style.color = "Red";
    }
  }
}
