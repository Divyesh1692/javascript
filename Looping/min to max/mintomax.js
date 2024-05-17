function mintomax()
{
    let n1 = parseInt(document.getElementById("n1").value) ;
    let n2 = parseInt(document.getElementById("n2").value) ;
    let res = "";
    for(let i =n1;i<=n2;i++)
        {
            res += i+"<br>";
        }
    document.getElementById("r").innerHTML = res;
}