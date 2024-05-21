function Button(data) 
{
    let dis = document.getElementById("dis");
    let value = document.getElementById("dis").innerHTML;
    
  if (data == "=") {
    dis.innerHTML = eval(value);
  } 
  else if (data == "+")
  {
    dis.innerHTML += data;
  }
  else if (data == "-")
    {
      dis.innerHTML -= data;
    }
  else if (data == "*")
  {
    dis.innerHTML *= data;
  }
  else if (data == "/")
    {
      dis.innerHTML /= data;
    } 
 else if (data == "%")
  {
    dis.innerHTML %= data;
  }    
  else {
    dis.innerHTML += data;
  }
}