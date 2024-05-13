function armstrong()
{
    let a = document.getElementById("n").value;
    let sum =0, l,res,n;
    n=a;
    while(a!=0)
        {
            l = a%10;
            console.log(l);
            l= l**3;
            console.log(l);
            sum = (sum + l);
            console.log(sum);
            a = parseInt(a/10);
            console.log(a);
        }
    if (sum == n)
        {
            res = "It Is An Armstrong Number";
        }
    else{
        res = "It's Not An Armstrong Number";
    }
    console.log(res);
    document.getElementById("res").innerHTML = res;

}