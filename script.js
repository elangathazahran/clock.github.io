function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12; // Jam 12 format
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (360 / 12) * hours + (360 / 12 / 60) * minutes;
    const minuteDeg = (360 / 60) * minutes + (360 / 60 / 60) * seconds;
    const secondDeg = (360 / 60) * seconds;

    document.querySelector('.hour').style.transform = `rotate(${hourDeg}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector('.second').style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); // Panggil pertama kali
