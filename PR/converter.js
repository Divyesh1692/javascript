function ftoc()
{
    let f = document.getElementById("tmp").value;
    let c = (f-32)/(9/5);
    document.getElementById("c").innerHTML = "Fahrenheit To Celsius : " + c;
}
function ctof()
{
    let c = document.getElementById("tmp").value;
    let f = c*(9/5)+32;
    document.getElementById("f").innerHTML = "Celsius To Fahrenheit : " + f;
}
function ktof()
{
    let k = document.getElementById("tmp").value;
    let f = (k-273.15)*(9/5) + 32;
    document.getElementById("f").innerHTML = "Kelvin To Fahrenheit : " + f;
}
function ctok()
{
    let c = parseInt(document.getElementById("tmp").value);
    let k = (c+273.15);
    document.getElementById("k").innerHTML = "Celsius To Kelvin : " + k;
}
function mtof()
{
    let m = document.getElementById("dist").value;
    let f = m*3.28084;
    document.getElementById("f").innerHTML = "Meter To Feet : " + f;
}
function ftom()
{
    let f = document.getElementById("dist").value;
    let m = f/3.28084;
    document.getElementById("m").innerHTML = "Feet To Meter : " + m;
}
function mtokm()
{
    let m = document.getElementById("dist").value;
    let km = m/1000;
    document.getElementById("km").innerHTML = "Meter To Kilo Meter : " + km;
}
function kmtof()
{
    let km = document.getElementById("dist").value;
    let f = km*3280.84;
    document.getElementById("f").innerHTML = "Kilo Meter To Feet : " + f;
}
function inrtousd()
{
    let inr = document.getElementById("cur").value;
    let usd = inr * 0.01198;
    document.getElementById("usd").innerHTML = "INR To USD : " + usd;
}
function usdtoinr()
{
    let usd = document.getElementById("cur").value;
    let inr = usd*83.47;
    document.getElementById("inr").innerHTML = "USD To INR : " + inr;
}
function inrtoeuro()
{
    let inr = document.getElementById("cur").value;
    let euro = inr * 0.011;
    document.getElementById("euro").innerHTML = "INR To EURO : " + euro;
}
function eurotoinr()
{
    let euro = document.getElementById("cur").value;
    let inr = euro * 89.70;
    document.getElementById("inr").innerHTML = "EURO To INR : " + inr;
}