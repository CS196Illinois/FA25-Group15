// Toggle sidebar dropdown
function toggleSidebarDropdown() {
  const habitsList = document.getElementById('sidebarHabitsList');
  const toggle = document.getElementById('sidebarToggle');
  
  habitsList.classList.toggle('open');
  toggle.classList.toggle('open');
}
// Function to show damaged lung based on habit
function showDamagedLung(habit) {
  console.log('showDamagedLung called with:', habit);
  const damagedLung = document.getElementById('damagedLung');
  
  let imagePath = '';
  
  if (habit === 'smoking') {
    imagePath = '../../images/lung-smoke.png';
  } else if (habit === 'alcohol') {
    imagePath = '../../images/lung-alcohol.png';
  } else if (habit === 'drugs') {
    imagePath = '../../images/lung-drugs.png';
  }
  
  console.log('Setting image path to:', imagePath);
  damagedLung.src = imagePath;
  
  damagedLung.classList.add('show');
  //make normal lung disappear
  normalLung.style.opacity = '0';
  damagedLung.classList.add('show');
}

// Handle habit selection
function selectHabit(habit) {
  // Show the damaged lung for the selected habit
  showDamagedLung(habit.toLowerCase());
}

// Reset to normal lung
function resetLungs() {
  const damagedLung = document.getElementById('damagedLung');
  const normalLung = document.getElementById('normalLung');
  
  // Show normal lung and hide damaged lung
  normalLung.style.opacity = '1';
  damagedLung.classList.remove('show');
  
  console.log('Reset to normal lungs');
}

document.addEventListener('DOMContentLoaded', function() {
  // Add click event to main habit buttons
  const smokingBtn = document.getElementById('smbutton');
  const alcoholBtn = document.getElementById('abutton');
  const drugsBtn = document.getElementById('dsbutton');
  
  if (smokingBtn) {
    smokingBtn.addEventListener('click', function() {
      showDamagedLung('smoking');
    });
  }
  
  if (alcoholBtn) {
    alcoholBtn.addEventListener('click', function() {
      showDamagedLung('alcohol');
    });
  }
  
  if (drugsBtn) {
    drugsBtn.addEventListener('click', function() {
      showDamagedLung('drugs');
    });
  }
  
  // Add click event to sidebar habit items
  const sidebarItems = document.querySelectorAll('.sidebar-habit-item');
  sidebarItems.forEach(item => {
    item.addEventListener('click', function() {
      const habit = this.getAttribute('data-habit');
      if (habit) {
        showDamagedLung(habit);
      }
    });
  });
});

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