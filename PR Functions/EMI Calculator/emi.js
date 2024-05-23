function emi()
{
    let p = parseInt(document.getElementById('p').value);
    let r = (parseInt(document.getElementById('r').value))/100/12;
    let t = (12)*(parseInt(document.getElementById('t').value));
    let e;
    console.log(t);
    console.log(r);
    e = parseInt(p*r*(((1+r)**t)/(((1+r)**t)-1)));
    console.log(e);
    document.getElementById('res').innerHTML = e;

}