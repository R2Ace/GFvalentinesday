document.getElementById('heartButton').onclick = function() {
    showConfetti(); // This function will trigger the confetti effect
    setTimeout(showSweetMessage, 5000); // Wait for 5 seconds before showing the message
};

function showConfetti() {
    // Placeholder for confetti effect
    // Since we can't use external libraries, consider simple animations or CSS effects
    alert("Confetti!");
}

function showSweetMessage() {
    // You can create a modal or use an alert for simplicity
    alert("Every moment with you is magical. Here's to many more together. I love you!");
}

function showConfetti() {
    for (let i = 0; i < 1000; i++) { // Creates 100 pieces of confetti
        var confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`; // Randomize the starting position
        confetti.style.background = getRandomColor(); // Randomize color
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`; // Randomize the animation duration
        confetti.style.opacity = Math.random(); // Randomize the opacity
        confetti.style.transform = `scale(${Math.random()})`; // Randomize the scale
        document.body.appendChild(confetti);
        
        // Remove confetti after it falls to keep the DOM clean
        setTimeout(() => document.body.removeChild(confetti), 5000);
    }
}

function getRandomColor() {
    var colors = ['#ff1493', '#ff69b4', '#ffd1dc', '#ffb6c1', '#ffcccc']; // Array of colors
    return colors[Math.floor(Math.random() * colors.length)];
}

function showSweetMessage() {
    var modal = document.createElement('div');
    modal.className = 'modal';
    var modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    var closeButton = document.createElement('span');
    closeButton.innerHTML = '&times;';
    closeButton.onclick = function() {
        modal.style.display = 'none';
        document.body.removeChild(modal);
    };
    modalContent.appendChild(closeButton);
    var message = document.createElement('p');
    message.textContent = "Every moment with you is magical. Here's to many more together, 👩🏾‍❤️‍👨🏽 + ♾️.";
    modalContent.appendChild(message);
    modal.appendChild(modalContent);

    document.body.appendChild(modal);
    modal.style.display = 'block';
}
