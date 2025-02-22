const countdown = () => {
    const countDate = new Date("Apr 14, 2025 23:59:59").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Calculate the position of the person
    const totalDuration = countDate - new Date("Jan 1, 2024 00:00:00").getTime();
    const progress = (totalDuration - gap) / totalDuration;
    const person = document.querySelector('.person');
    person.style.left = `calc(${progress * 100}% - 25px)`;
    person.style.bottom = `calc(${progress * 100}% - 25px)`;
};

setInterval(countdown, 1000);
