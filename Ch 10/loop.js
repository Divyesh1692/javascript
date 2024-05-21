function loop()
{
    let s = parseInt(document.getElementById('n1').value);
    let e = parseInt(document.getElementById('n2').value);

    repeat(s,e);
}
function repeat(s,e)
{
    let res = document.getElementById('res');
    res.innerHTML += s+ " ";
    if(s>e)
        { s--;}
    else 
    { s++ ;}
    if(s != e)
        {
            repeat(s,e);
        }
    else{
        res.innerHTML += s+ " ";
    }
}