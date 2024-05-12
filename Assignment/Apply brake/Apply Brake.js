function applybrake()
{
    let d = parseInt(document.getElementById("n1").value);
    let t = parseInt(document.getElementById("n2").value);
    let s = d/t;
    if(s>40)
        {
            document.getElementById("answer1").innerHTML = "Speed : "+s;
            document.getElementById("answer2").innerHTML = "Apply Break";
        }
    else 
        {
            document.getElementById("answer1").innerHTML = "Speed : "+s;
            document.getElementById("answer2").innerHTML = "Keep Going";
        }
}