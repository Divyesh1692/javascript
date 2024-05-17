function display()
{
    let res="";
    let num = document.getElementById("n").value;
    for( let i=1;i<=num;i++)
    {
        res += "Red and White<br/>";
    }
    document.getElementById("r").innerHTML= res;
}
