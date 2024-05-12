function comparenumbers()
{
    let a = parseInt(document.getElementById("n1").value);
    let b = parseInt(document.getElementById("n2").value);
    let c = parseInt(document.getElementById("n3").value);

    if(a>b)
        {
            document.getElementById("answer1").innerHTML = "True";
        }
    else
        {
            document.getElementById("answer1").innerHTML = "False";
        }
    a +=c;
    if(a>b)
        {
            document.getElementById("answer2").innerHTML = "True";
        }
    else{
        document.getElementById("answer2").innerHTML = "False";

    }
}