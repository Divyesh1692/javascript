function oddeven() 
{
    let a = parseInt(document.getElementById("n1").value);
    if(a%2==0)
        {
            document.getElementById("answer").innerHTML = "Even Number ";
        }
    else
        {
            document.getElementById("answer").innerHTML = "Odd Number ";
        }

}