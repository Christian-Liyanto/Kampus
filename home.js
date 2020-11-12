function toggle()
{
    var x = document.getElementById("hide");
    if(x.style.display ==="none")
    {
        x.style.display = "block";    
    }
    else
    {
        x.style.display = "none";
    }
    togglepopup();
}
function togglepopup()
{
    document.getElementById("popup-1").classList.toggle("active");
}
function programcounter()
{
    location.href = "counterprogram.html";
}
function hexcolor()
{
    location.href = "randomhex.html";
}
function aboutme()
{
    location.href = "aboutme.html";
}
