// script untuk Random Hex
genNew()
function genNew()
{
  var symbol,color;
  symbol = "0123456789ABCDEF";
  color = "#";
  for(var i=0; i<6; i++)
  {
    color = color + symbol[Math.floor(Math.random()* 16)];
  }
  document.body.style.background = color;
  document.getElementById("color").innerHTML =  color;
}

function home()
{
  alert("Back to Home Again");
  location.href = "home.html";
}