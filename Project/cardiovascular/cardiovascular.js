// Heart images for each habit
const habitImages = {
    smoking: '../images/cardiovascular/heart-smoke.png',
    alcohol: '../images/cardiovascular/heart-alcohol.png',
    'poor-diet': '../images/cardiovascular/heart-unhealthy-diet.png',
    //sedentary:
    'poor-sleep': '../images/cardiovascular/heart-lackofsleep.png',
    //caffeine:
    normal: '../images/cardiovascular/heart-normal.png'
};

// Toggle dropdown menu open/close
function toggleDropdown() {
    const habitsList = document.getElementById('habitsList');
    const toggle = document.getElementById('toggle');
    
    habitsList.classList.toggle('open');
    toggle.classList.toggle('open');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.habits-dropdown');
    if (!dropdown.contains(event.target)) {
        document.getElementById('habitsList').classList.remove('open');
        document.getElementById('toggle').classList.remove('open');
    }
});

// Initialize with normal heart on page load
window.addEventListener('DOMContentLoaded', function() {
    const heartImage = document.getElementById('heartImage');
    heartImage.src = habitImages.normal;
    
    // Add click listeners to habit items
    document.querySelectorAll('.habit-item').forEach(item => {
        item.addEventListener('click', function() {
            const habit = this.getAttribute('data-habit');
            changeHeartImage(habit);
        });
    });
});

// Change the heart image based on selected habit
function changeHeartImage(habit) {
    const heartImage = document.getElementById('heartImage');
    heartImage.src = habitImages[habit] || habitImages.normal;
}