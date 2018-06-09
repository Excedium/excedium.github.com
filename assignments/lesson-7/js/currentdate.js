 function dayName() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    document.getElementById("dayname").innerHTML = n;
}

function fullYear() {
    var d = new Date();
    document.getElementById("year").innerHTML = d.getFullYear();
}

function monthName() {
	var d = new Date();
       var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
       document.getElementById("monthname").innerHTML = months[d.getMonth()];
}

function numberDay() {
	var d = new Date();
	document.getElementById("numberday").innerHTML = d.getDate();
}
