// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Date of the last fight
    const lastFightDate = new Date("2024-03-17"); // Update this with your last fight date

    // Function to calculate the number of days between two dates
    function getDaysSinceLastFight() {
        const currentDate = new Date();
        const differenceInTime = currentDate.getTime() - lastFightDate.getTime();
        const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
        return differenceInDays;
    }

    // Function to update the countdown display
    function updateCountdown() {
        const countdownElement = document.getElementById("countdown");
        const daysSinceLastFight = getDaysSinceLastFight();
        countdownElement.textContent = `Days Since Last Fight: ${daysSinceLastFight}`;
    }

    // Initial call to update the countdown
    updateCountdown();
});
