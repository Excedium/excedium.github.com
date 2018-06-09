function doInputOutput()
{
    var h = get("high").value;
    var l = get("low").value;    
    var s = get("speed").value;
    var temp = (h+l)/2
    var f = windChill(temp, speed);
    document.getElementById("output").innerHTML = Math.round(f * 100)/100 + " Fahrenheit";
}

function windChill(t, s)
{
var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
return f;
}

