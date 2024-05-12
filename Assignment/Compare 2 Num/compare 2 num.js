function comparetwonumbers()
{
    let a = parseInt(document.getElementById("n1").value);
    let b = parseInt(document.getElementById("n2").value);

    if(a>b)
        {
            document.getElementById("answer1").innerHTML = "True";
        }
    else
        {
            document.getElementById("answer1").innerHTML = "False";
        }
    if(b>a)
        {
            document.getElementById("answer2").innerHTML = "True";
        }
    else{
        document.getElementById("answer2").innerHTML = "False";

    }
    if(a==b)
        {
            document.getElementById("answer3").innerHTML = "True";
        }
    else{
        document.getElementById("answer3").innerHTML = "False";

    }
}