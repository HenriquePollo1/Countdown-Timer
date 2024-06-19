
 newYearDate = new Date(2025,0,1);




//document.getelementbyid
daysel     = document.getElementById("days-el");
hourel     = document.getElementById("hour-el");
minutesel  = document.getElementById("minutes-el");
secondsel  = document.getElementById("seconds-el"); 
function countdowntimer(){
    atualDate = new Date().getTime();
    current_date = newYearDate - atualDate;
    console.log(current_date)
    var days = Math.floor(current_date / (1000 * 60 * 60 * 24));
    var hours = Math.floor((current_date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((current_date % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((current_date % (1000 * 60)) / 1000);
    daysel.innerText = days;
    hourel.innerText = hours;
    minutesel.innerText = minutes;
    secondsel.innerText = seconds;


}

setInterval(countdowntimer, 1000);