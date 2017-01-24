var text = "";
var i;
for (i = 1; i <= 100 ; i++)
{
  if (i%2 == 0){
  text += i + ". Genap" + "<br>";
}
else {
  text += i + ". Ganjil" + "<br>";
}
}

document.getElementById("demo").innerHTML = text;
