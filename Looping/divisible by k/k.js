function div()
{
    let n = parseInt(document.getElementById("n").value) ;
    let k = parseInt(document.getElementById("k").value) ;
    let res = "";
    for(let i=1;i<=n;i++)
        {
            if(i%k==0)
            { 
                res += i+"<br>";
            }
        }    
    document.getElementById("r").innerHTML = res;
}