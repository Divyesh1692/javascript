function oneToN()
{
    let n = document.getElementById("n").value ;
    let res = "";
    for(let i =1;i<=n;i++)
        {
            res += i+"<br>";
        }
    document.getElementById("r").innerHTML = res;
}