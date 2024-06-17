class StringManipulator {
  cleanString(str) {
    return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  }
}

class PalindromeChecker extends StringManipulator {
  isPalindrome(str) {
    const cStr = this.cleanString(str);
    const revStr = cStr.split("").reverse().join("");
    console.log(revStr);
    return revStr == cStr;
  }
}

function CheckPalindrome() {
  const inpstr = document.getElementById("instr").value;
  const PalCheck = new PalindromeChecker();
  let result = "";
  if (PalCheck.isPalindrome(inpstr)) {
    result += "String Is Palindrome";
  } else {
    result += "String Is Not Palindrome";
  }
  document.getElementById("ans").innerHTML = result;
}
