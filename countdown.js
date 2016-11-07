//Created by Edward Aubrey
//edward.aubrey@ejaudio.net
//Released under GNU Public License 3.0
var timeNow, timeLeft, endTime, count, hours, minutes, seconds, h, m, s;
//Calculate time left
function timeRemaining() {
    timeNow = new Date();
    //Maths Time! - Get the remaining Time
    timeLeft =  endTime.getTime() - timeNow.getTime();
    //To Round up the Hrs:Mins:Secs
    hours = Math.floor(timeLeft / (1000 * 60 * 60));
    minutes = Math.floor(timeLeft / (1000 * 60) - hours * 60);
    seconds = Math.floor(timeLeft / (1000) - (hours * 60 * 60) - (minutes * 60));
    //Append 0 if less than 10
    if (hours < 10) {
        h = "0" + hours;
    } else {
        h = hours;
    }
    if (minutes < 10) {
        m = "0" + minutes;
    } else {
        m = minutes;
    }
    if (seconds < 10) {
        s = "0" + seconds;
    } else {
        s = seconds;
    }
    //Return H, M, S
    return {hours: h, minutes: m, seconds: s};
}
//Write time left to document
function countDown() {
    count = timeRemaining();
    //If time left >= 00:00:00 write time left else write Done!
    if (count.hours >= 0 && count.minutes >= 0 && count.seconds >= 0) {
        document.getElementById("clock").innerHTML  = count.hours + ":" + count.minutes + ":" + count.seconds;
    } else {
        document.getElementById("clock").innerHTML  = "00:00:00";
    }
    //If hours left >= 00 write time left else write 00!
    if (count.hours >= 0 && count.minutes >= 0 && count.seconds >= 0) {
        document.getElementById("hours").innerHTML  = count.hours;
    } else {
        document.getElementById("hours").innerHTML  = "00";
    }
    //If hours left >= 00 write time left else write 00!
    if (count.hours >= 0 && count.minutes >= 0 && count.seconds >= 0) {
        document.getElementById("minutes").innerHTML  = count.minutes;
    } else {
        document.getElementById("minutes").innerHTML  = "00";
    }
    //If hours left >= 00 write time left else write 00!
    if (count.hours >= 0 && count.minutes >= 0 && count.seconds >= 0) {
        document.getElementById("seconds").innerHTML  = count.seconds;
    } else {
        document.getElementById("seconds").innerHTML  = "00";
    }
}
//Refresh clock display
setInterval(countDown, 1000);
