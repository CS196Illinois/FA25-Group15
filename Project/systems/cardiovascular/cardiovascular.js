// Heart images for each habit
const heartImages = {
  smoking: '../../images/heart-smoke.png',
  alcohol: '../../images/heart-alcohol.png',
  'poor-diet': '../../images/heart-unhealthy-diet.png',
  'poor-sleep': '../../images/heart-lackofsleep.png',
  normal: '../../images/heart-normal.png'
};

// Toggle sidebar dropdown
function toggleSidebarDropdown() {
  const habitsList = document.getElementById('sidebarHabitsList');
  const toggle = document.getElementById('sidebarToggle');
  
  habitsList.classList.toggle('open');
  toggle.classList.toggle('open');
}

// Handle habit selection and change heart image
function selectHabit(habit) {
  console.log('Selected habit:', habit);
  
  // Change the heart image based on selected habit
  const heartImage = document.getElementById('heartImage');
  if (heartImage && heartImages[habit]) {
    heartImage.src = heartImages[habit];
  }
}

// Reset to normal heart
function resetHeart() {
  console.log('Reset to normal heart');
  const heartImage = document.getElementById('heartImage');
  if (heartImage) {
    heartImage.src = heartImages.normal;
  }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
  const dropdown = document.querySelector('.habits-dropdown');
  if (dropdown && !dropdown.contains(event.target)) {
    const habitsList = document.getElementById('sidebarHabitsList');
    const toggle = document.getElementById('sidebarToggle');
    if (habitsList && toggle) {
      habitsList.classList.remove('open');
      toggle.classList.remove('open');
    }
  }
});

// Initialize with normal heart on page load
window.addEventListener('DOMContentLoaded', function() {
  const heartImage = document.getElementById('heartImage');
  if (heartImage) {
    heartImage.src = heartImages.normal;
  }
});