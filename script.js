
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


//set target date
const newYear = '1 Jan 2025';

//function to calculate the time remaining until the target date
function countdown() {
    const newYearDate = new Date(newYear);

    //the current date and time
    const currentDate = new Date();

    /* This calculates the time difference between the target date & the current date in milliseconds. 
    It then divides by 1000 to convert it to seconds and stores it  */
    const totalSeconds = (newYearDate - currentDate) / 1000;

    //Calculate the time
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    //assign the calculated values to js variables and change the HTML content
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}

//to ensure that the times are displayed with leading zeros when the time value is less than 10.
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

/*a built-in JavaScript method that continues to call the countdown() function every second to update the countdown timer. */
setInterval(countdown, 1000);