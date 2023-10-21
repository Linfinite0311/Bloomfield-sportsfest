// Set the target date and time for the countdown (replace with your desired date)
const targetDate = new Date("2023-11-20 00:00:00").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
        clearInterval(countdownInterval); // Countdown is complete
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the HTML elements with the countdown values
    document.getElementById("days").querySelector(".box-number").textContent = days;
    document.getElementById("hours").querySelector(".box-number").textContent = hours;
    document.getElementById("minutes").querySelector(".box-number").textContent = minutes;
    document.getElementById("seconds").querySelector(".box-number").textContent = seconds;
}

// Initial update
updateCountdown();