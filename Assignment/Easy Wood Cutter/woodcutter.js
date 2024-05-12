function wood() 
{
    let a = parseInt(document.getElementById("n1").value);
    if(a%3==0)
        {
            document.getElementById("answer").innerHTML = "Yes";
        }
    else
        {
            document.getElementById("answer").innerHTML = "No";
        }

}