var text = "";
var i;
for (i = 1; i <= 100 ; i+=2)
{
  if (i%3 == 0)
  {
    text += i + ". KELIPATAN 3"+ "<br>";
    } else
  {
  text += i + "<br>";
  }
}

document.getElementById("demo").innerHTML = text;
