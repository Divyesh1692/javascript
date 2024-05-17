function even()
{
    let n = parseInt(document.getElementById("n").value) ;
    let res = 0;
    for(let i=1;i<=n;i++)
        {
            if(i%2==0)
            { 
                res += i;
            }
        }    
    document.getElementById("r").innerHTML = res;
}