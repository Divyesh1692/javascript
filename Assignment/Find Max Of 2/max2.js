function findmax() 
{
    let a = parseInt(document.getElementById("n1").value);
    let b = parseInt(document.getElementById("n2").value);
    if(a>b)
        {
            document.getElementById("answer").innerHTML = "Largest Of Two Numbers is " + a;
        }
    else if (b>a)
        {
            document.getElementById("answer").innerHTML = "Largest Of Two Numbers is " + b;
        }
    else document.getElementById("answer").innerHTML = "Both Numbers Are Equal ";

}