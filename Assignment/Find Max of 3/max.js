function Largest() 
{
    let a = parseInt(document.getElementById("n1").value);
    let b = parseInt(document.getElementById("n2").value);
    let c = parseInt(document.getElementById("n3").value);
    let max;
    if(a>b)
        {
            if(a>c)
                {
                    max = a;
                }
            else{ max = c;}
        }
    else
        {
            if(b>c)
                {
                    max = b;
                }
            else { max =c; }
        }
    
    document.getElementById("max").innerHTML = "Largest Of Three Numbers is " + max;

}