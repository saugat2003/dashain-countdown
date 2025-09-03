// Audio handling for Dashain song
const audio = document.getElementById('dashainAudio');
const audioPrompt = document.getElementById('audioPrompt');
const audioStop = document.getElementById('audioStop');
let audioStarted = false;

// Function to start audio
function startAudio() {
    if (!audioStarted) {
        audio.play().then(() => {
            audioStarted = true;
            audioPrompt.style.display = 'none';
            audioStop.style.display = 'inline-block';
            console.log('Dashain music started!');
        }).catch((error) => {
            console.log('Audio play failed:', error);
        });
    }
}

// Function to stop audio
function stopAudio() {
    if (audioStarted) {
        audio.pause();
        audio.currentTime = 0; // Reset to beginning
        audioStarted = false;
        audioStop.style.display = 'none';
        audioPrompt.style.display = 'inline-block';
        console.log('Dashain music stopped!');
    }
}

// Add click event to audio prompt button
audioPrompt.addEventListener('click', startAudio);

// Add click event to audio stop button
audioStop.addEventListener('click', stopAudio);

// Try to start audio on any user interaction
document.addEventListener('click', function() {
    if (!audioStarted) {
        startAudio();
    }
}, { once: true });

// Try to start audio on page load (might not work due to browser policies)
window.addEventListener('load', function() {
    audio.play().then(() => {
        audioStarted = true;
        audioPrompt.style.display = 'none';
        audioStop.style.display = 'inline-block';
    }).catch(() => {
        // Auto-play blocked, show the prompt button
        audioPrompt.style.display = 'inline-block';
        audioStop.style.display = 'none';
    });
});

// Set Dashain Date (Example: Oct 11, 2025 Tika Day)
const dashainDate = new Date("October 11, 2025 00:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = dashainDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "<p class='text-2xl font-bold text-green-600'>Happy Dashain! 🎊</p>";
    }
}, 1000);
