document.addEventListener("DOMContentLoaded", function() {
    // Date of the last fight
    const lastFightDate = new Date("2024-03-23"); // Update this with your last fight date

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
        countdownElement.textContent = `Number of Days: ${daysSinceLastFight}`;
    }

    // Initial call to update the countdown
    updateCountdown();

    // Function to open details page in a new tab
    function openDetailsPage() {
        // Replace 'https://example.com' with the URL you want to open
        const detailsPageUrl = 'https://docs.google.com/spreadsheets/d/1L8zycbdaQCWh37uybB4V3ijCujTerRL4hMeYhxHTcIc/edit#gid=0';
        window.open(detailsPageUrl, '_blank');
    }
 // Attach click event listener to the button
    const detailsButton = document.getElementById('detailsButton');
    detailsButton.addEventListener('click', openDetailsPage);

    });
