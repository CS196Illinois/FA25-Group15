// Toggle sidebar dropdown
function toggleSidebarDropdown() {
  const habitsList = document.getElementById('sidebarHabitsList');
  const toggle = document.getElementById('sidebarToggle');
  
  habitsList.classList.toggle('open');
  toggle.classList.toggle('open');
}

// Handle habit selection
function selectHabit(habit) {
  console.log('Selected habit:', habit);
  // You can add functionality here to show organ effects for the selected habit
  // For example: highlight organs, show info boxes, etc.
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

// Ensure event listeners are attached after the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('sidebarToggle');
  const habitsList = document.getElementById('sidebarHabitsList');

  if (!toggle) {
    console.debug('[brain.js] sidebarToggle element not found');
  }
  if (!habitsList) {
    console.debug('[brain.js] sidebarHabitsList element not found');
  }

  // If the HTML used an inline onclick="toggleSidebarDropdown()" this will still work,
  // but we also attach a listener here so tools that remove inline handlers still behave.
  if (toggle) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation(); // don't let the document click handler immediately close it
      toggleSidebarDropdown();
    });
  }

  // Delegate clicks for habit items. Expected markup: elements with class `habit-item` and
  // optional `data-habit="..."`. Fallback to textContent when data attribute is missing.
  const habitsContainer = document.querySelector('.habits-dropdown');
  if (habitsContainer) {
    habitsContainer.addEventListener('click', function (e) {
      const item = e.target.closest('.habit-item');
      if (item) {
        const habitName = item.dataset && item.dataset.habit ? item.dataset.habit : item.textContent.trim();
        selectHabit(habitName);
        // close the dropdown after selection
        if (habitsList && toggle) {
          habitsList.classList.remove('open');
          toggle.classList.remove('open');
        }
      }
    });
  } else {
    console.debug('[brain.js] habits-dropdown container not found for delegation');
  }
});