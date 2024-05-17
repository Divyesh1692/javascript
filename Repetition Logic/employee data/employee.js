function salary()
{
    let s1 = parseInt(document.getElementById("s1").value);
    let s2 = parseInt(document.getElementById("s2").value);
    let s3 = parseInt(document.getElementById("s3").value);
    let s4 = parseInt(document.getElementById("s4").value);
    let s5 = parseInt(document.getElementById("s5").value);
    let sum = s1+s2+s3+s4+s5;
    document.getElementById("sal").innerHTML = "Total Salary : "+sum;

}
