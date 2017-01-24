var text = "";
var i;
var ii = 9;
for (i = 1; i <= 100 ; i++)
{
  if (i%10 == 0)
  {
    text += i + ". KELIPATAN 10"+ "<br>";
    } else
  {
  text += '' + "<br>";
  }
}

document.getElementById("demo").innerHTML = text;
