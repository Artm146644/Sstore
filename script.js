function startCountdown() {
    const fiveDays = 5 * 24 * 60 * 60 * 1000;
    const now = new Date();
    const countdownDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0).getTime() + fiveDays;

    function updateTimer() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown-timer").innerHTML = `${days} дні : ${hours} год : ${minutes} хв : ${seconds} сек`;
        document.getElementById("footer-timer").innerHTML = `${days} дні : ${hours} год : ${minutes} хв : ${seconds} сек`;

        if (distance < 0) {
            clearInterval(timerInterval);
            startCountdown(); // Restart countdown
        }
    }

    const timerInterval = setInterval(updateTimer, 1000);
}

startCountdown();