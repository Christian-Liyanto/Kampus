    var ctr = 0;
    var ctr2 = document.getElementById("ctr");
    function plus()
    {
        ctr++;
        ctr2.value = ctr;
        checker();
    }
    function minus()
    {
        if(ctr > -10)
        {
            ctr--;
            ctr2.value = ctr;
        }
        else
        {
            alert("Back to Home Again");
            location.href = "home.html";
        }
        checker();
    }

function checker()
{
    if(ctr2.value > 5)
        {
            document.getElementById("ctr").style.backgroundColor ="#99ff99";
        }
        if(ctr2.value >= 0 && ctr2.value <= 5)
        {
            document.getElementById("ctr").style.backgroundColor ="lightgray";
        }
        if(ctr2.value >= -5 && ctr2.value <= -1)
        {
            document.getElementById("ctr").style.backgroundColor ="#ffff99";
        }
        if(ctr2.value < -5)
        {
            document.getElementById("ctr").style.backgroundColor ="#ff66ff";
        }
}