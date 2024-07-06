// Time&Day
function updateTimeAndDay() {
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');

    const now = new Date();
    const options = { weekday: 'long' };
    const currentDay = new Intl.DateTimeFormat('en-US', options).format(now);
    const currentTime = now.toUTCString().split(' ')[4];

    currentTimeElement.textContent = `Current Time (UTC): ${currentTime}`;
    currentDayElement.textContent = `Current Day: ${currentDay}`;
}

updateTimeAndDay();
setInterval(updateTimeAndDay, 1000);


// Handle Form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
    // You can add further form submission logic here
});


