function palindrome()
{
    let n = parseInt(document.getElementById("n1").value);
    let res1=" ",i,rem,rev=0,a1,a2;
    for(i=1;i<=n;i++)
    {  a1=i;
        console.log(a1);
        a2 =i;
        console.log(a2);
            while(a1!=0)
            { rem = parseInt(a1%10);
                console.log(rem);
                rev = parseInt(rev*10+rem);
                console.log(rev);
              a1 = parseInt(a1/10);
              console.log(a1);
            }
            if(rev==a2)          
            {	res = a2+res1;
            console.log(res);
            }      
        }
    document.getElementById("r").innerHTML = res;
}