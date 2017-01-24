var text = "";
var i;
var ii = 5;
for (i = 1; i <= 100 ; i+=5)
{
  if (i%6 == 0)
  {
    text += i + ". KELIPATAN 6"+ "<br>";
    } else
  {
  text += '' + "<br>";
  }
}
document.getElementById("demo").innerHTML = text;
