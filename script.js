document.addEventListener('DOMContentLoaded', () => {
    const countDate = new Date("Dec 31, 2024 00:00:00").getTime() / 1000;
    new FlipDown(countDate, 'flipdown').start();

    const updatePersonPosition = () => {
        const now = new Date().getTime();
        const gap = countDate * 1000 - now;
        const totalDuration = countDate * 1000 - new Date("Jan 1, 2024 00:00:00").getTime();
        const progress = (totalDuration - gap) / totalDuration;
        const person = document.querySelector('.person');
        person.style.left = `calc(${progress * 100}% - 25px)`;
        person.style.bottom = `calc(${progress * 100}% - 25px)`;
    };

    setInterval(updatePersonPosition, 1000);
});
