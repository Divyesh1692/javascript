function AusvsEng()
{
    let a = parseInt(document.getElementById("n1").value);
    let e = parseInt(document.getElementById("n2").value);
    if(a>e)
        {
            document.getElementById("answer").innerHTML = "Australia";
        }
    else if(e>a)
        {
            document.getElementById("answer").innerHTML = "England";
        }
    else
        {
            document.getElementById("answer").innerHTML = "Tie";
        }
        
}