function ff() 
{
    let n= document.getElementById("age").value;
    let dist;
    if(n<13)
        {
            dist = "1 Kms";
        }
    else if(n>=13 && n<18)
        {
            dist = "5 Kms";
        }
    else if(n>=18 && n<30)
        {
            dist = "10 Kms";
        }
    else { dist = "Anywhere";}
    document.getElementById("dist").innerHTML = "You Can Have Friends From " + dist;

    
}