function fib()
{
    let n = parseInt(document.getElementById("n1").value);
    let i,a=0,b=1,c,res=" ";
    for(i=1;i<=n;i++)
        {
            res = res + " " + a;
            c = a+b;
            a=b;
            b=c;
        }
        document.getElementById("r").innerHTML = res;
}