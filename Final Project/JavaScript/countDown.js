//Script provided by https://mindgrader.com/tutorials/1-how-to-create-a-simple-javascript-countdown-timer

function countdown()
{
// set the date we're counting down to
var target_date = new Date("Jan 01, 2014").getTime();
// variables for time units
var days, hours, minutes, seconds;
// get tag element
var countdown = document.getElementById("countdown");
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
//I added this part for the alert functionality.
alert("There are " + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds left until game day! Go Green!");
}