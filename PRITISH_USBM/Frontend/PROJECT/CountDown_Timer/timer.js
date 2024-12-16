let countdownInterval;

document.getElementById('startButton').addEventListener('click', function() {
    let timeRemaining = parseInt(document.getElementById('secondsInput').value);
    if (isNaN(timeRemaining) || timeRemaining <= 0) {
        alert('Please enter a valid number of seconds.');
        return;
    }

    clearInterval(countdownInterval); // Clear any existing timer
    document.getElementById('timerDisplay').textContent = `Time Remaining: ${timeRemaining}s`;

    countdownInterval = setInterval(function() {
        timeRemaining--;
        document.getElementById('timerDisplay').textContent = `Time Remaining: ${timeRemaining}s`;

        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            alert('Time is up!');
        }
    }, 1000);
});

document.getElementById('resetButton').addEventListener('click', function() {
    clearInterval(countdownInterval); // Stop any ongoing countdown
    document.getElementById('secondsInput').value = ''; // Clear the input field
    document.getElementById('timerDisplay').textContent = 'Time Remaining: 0s'; // Reset the display
});
