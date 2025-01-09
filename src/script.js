// Countdown Timer Logic
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    const targetDate = new Date("February 14, 2025 00:00:00"); // Target date for countdown
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
        countdownElement.innerHTML = "Happy Valentine's Day!";
        clearInterval(countdownInterval); // Stop countdown
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
