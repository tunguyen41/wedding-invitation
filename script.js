// Music Player
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const musicIcon = musicToggle.querySelector('i');
const musicText = musicToggle.querySelector('.music-text');

// Function to toggle music
function toggleMusic() {
    if (bgMusic.paused) {
        bgMusic.play();
        musicIcon.classList.remove('fa-music');
        musicIcon.classList.add('fa-pause');
        musicText.textContent = 'Pause Music';
    } else {
        bgMusic.pause();
        musicIcon.classList.remove('fa-pause');
        musicIcon.classList.add('fa-music');
        musicText.textContent = 'Play Music';
    }
}

// Function to attempt autoplay
function attemptAutoplay() {
    const playPromise = bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            // Autoplay started
            musicIcon.classList.remove('fa-music');
            musicIcon.classList.add('fa-pause');
            musicText.textContent = 'Pause Music';
        })
        .catch(error => {
            // Autoplay was prevented
            console.log('Autoplay prevented:', error);
            musicIcon.classList.add('fa-music');
            musicText.textContent = 'Play Music';
        });
    }
}

// Add click event to music toggle button
musicToggle.addEventListener('click', toggleMusic);

// Try to autoplay when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Set volume to 50%
    bgMusic.volume = 0.5;
    
    // Try to autoplay
    attemptAutoplay();
    
    // Also try autoplay when user interacts with the page
    document.addEventListener('click', () => {
        attemptAutoplay();
    }, { once: true });
});

// Countdown Timer
function updateCountdown() {
    const weddingDate = new Date('2024-06-15T11:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown').innerHTML = '<h3>The wedding has begun!</h3>';
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// RSVP Modal
const modal = document.getElementById('rsvpModal');
const btn = document.getElementById('rsvpBtn');
const span = document.getElementsByClassName('close')[0];
const form = document.getElementById('rsvpForm');

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

form.onsubmit = function(e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your RSVP!');
    modal.style.display = 'none';
    form.reset();
}

// Add some animation effects
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.invitation-card > *');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}); 