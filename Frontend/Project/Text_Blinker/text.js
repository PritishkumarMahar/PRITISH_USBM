let blinkInterval;

document.getElementById('startButton').addEventListener('click', function() {
    const textElement = document.getElementById('blinkingText');
    let isVisible = true;

    blinkInterval = setInterval(function() {
        textElement.style.opacity = isVisible ? '0' : '1';
        isVisible = !isVisible;
    }, 500); // Set to 500 milliseconds for faster blinking
});

document.getElementById('stopButton').addEventListener('click', function() {
    clearInterval(blinkInterval); // Stop the blinking
    document.getElementById('blinkingText').style.opacity = '1'; // Ensure text is visible when stopped
});