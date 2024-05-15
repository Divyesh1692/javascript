function palindrome()
{
    let n = parseInt(document.getElementById("n1").value);
    let res="",i,rem,rev=0,a;
    for(i=1;i<=n;i++)
        {  a=i;
            while(i!=0)
            { rem = parseInt(i%10);
              rev = parseInt(rev*10) + parseInt(rem);
              i=parseInt(i/10);
            }
            if(a==rev)
            {	res = res +" "+ a;
            }
        }
    document.getElementById("r").innerHTML = res;
}