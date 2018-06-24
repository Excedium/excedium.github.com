function doInputOutput()
{
    var h = parseFloat(document.getElementById("high").innerHTML);
    var l = parseFloat(document.getElementById("low").innerHTML);    
    var s = parseFloat(document.getElementById("speed").innerHTML);
    var temp = (h + l) / 2;
    var f = 35.74 + 0.6215 * temp - 35.75 * Math.pow(s, 0.16) + 0.4275 * temp * Math.pow(s, 0.16);
    document.getElementById("output").innerHTML = Math.round(f * 1)/1;
}
