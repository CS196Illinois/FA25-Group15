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
<<<<<<< HEAD
  
  if (habit === 'smoking') {
    imagePath = '../../images/lung-smoke.png';
  } else if (habit === 'alcohol') {
    imagePath = '../../images/lung-alcohol.png';
  } else if (habit === 'drugs') {
    imagePath = '../../images/lung-drugs.png';
=======
  let title = '';
  let description = '';
  
  if (habit === 'drugs') {
    imagePath = '../../images/assets-lung/lung-drugs.png';
    title = '💊 Drug use';
    description = 'Smoking marijuana clearly damages the human lung. Research shows that smoking marijuana causes chronic bronchitis and marijuana smoke has been shown to injure the cell linings of the large airways, which could explain why smoking marijuana leads to symptoms such as chronic cough, phlegm production, wheeze, and acute bronchitis.';
  } else if (habit === 'alcohol') {
    imagePath = '../../images/assets-lung/lung-alcohol.png';
    title = '🍺 Alcohol';
    description = 'Normally, the fine hairs (i.e., cilia) on the cells that line the respiratory tract work with the mucociliary apparatus—which is basically the body’s first line of cellular defense against various pathogens that lead to infection. Together, they remove inhaled particles, toxins, and debris from the body. However, chronic alcohol consumption alters the function of this apparatus.3 Thus, those with an alcohol use disorder (AUD) have increased susceptibility to respiratory pathogens, which can lead to various infections such as pneumonia, tuberculosis, Respiratory Syncytial Virus (RSV).'
  } else if (habit === 'smoking') {
    imagePath = '../../images/assets-lung/lung-smoke.png';
    title = '🚬 Smoking';
    description = 'Cigarette smoking is the leading preventable cause of lung disease. Smoke chronically inflames and thickens airways, producing chronic bronchitis, while toxic chemicals destroy alveoli, leading to emphysema and impaired gas exchange. This progression defines COPD. Smoking also raises lung cancer risk manyfold and worsens asthma outcomes. Vaping, though marketed as safer, still exposes the lungs to heated aerosols and flavoring chemicals. Studies link vaping to airway irritation, oxidative stress, and in some cases severe EVALI (e-cigarette lung injury). While long-term cancer risk is still being studied, vaping clearly contributes to respiratory inflammation and worsens asthma or bronchitis symptoms. Both smoking and vaping impair mucociliary clearance, raising infection risk.Lungs of a smoker will look Gray or black, hyperinflated, have patches of inflammation, diaphragm muscle loss';
  } else if (habit === 'doomscrolling') {
    imagePath = '../../images/assets-lung/lung-smoke.png';
    title = '📱 Doomscrolling';
    description = 'its bad';
  } else if (habit === 'lowmovement') {
    imagePath = '../../images/assets-lung/lung-smoke.png';
    title = '🛏️ Low Movement';
    description = 'its bad';
  } else if (habit === 'overeating') {
    imagePath = '../../images/assets-lung/lung-smoke.png';
    title = '🍽️ Overeating';
    description = 'its bad';
  } else if (habit === 'sleep') {
    imagePath = '../../images/assets-lung/lung-smoke.png';
    title = '💤 Lack of Sleep';
    description = 'its bad';
>>>>>>> a615e284e4896812134a973b767c6d3c5c5f301b
  }
  
  console.log('Setting image path to:', imagePath);
  damagedLung.src = imagePath;
<<<<<<< HEAD
=======

  //add description box
  descriptionTitle.textContent = title;
  descriptionText.textContent = description;
>>>>>>> a615e284e4896812134a973b767c6d3c5c5f301b
  
  damagedLung.classList.add('show');
  //make normal lung disappear
  normalLung.style.opacity = '0';
  damagedLung.classList.add('show');
<<<<<<< HEAD
=======
  //show description box
  descriptionBox.classList.add('show');
>>>>>>> a615e284e4896812134a973b767c6d3c5c5f301b
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
<<<<<<< HEAD
=======

  //Reset description box
  descriptionTitle.textContent = 'Select a Habit';
  descriptionText.textContent = 'Click on a habit to see how it affects the respiratory system.';
>>>>>>> a615e284e4896812134a973b767c6d3c5c5f301b
}

document.addEventListener('DOMContentLoaded', function() {
  // Add click event to main habit buttons
<<<<<<< HEAD
  const smokingBtn = document.getElementById('smbutton');
  const alcoholBtn = document.getElementById('abutton');
  const drugsBtn = document.getElementById('dsbutton');
  
  if (smokingBtn) {
    smokingBtn.addEventListener('click', function() {
      showDamagedLung('smoking');
    });
  }
  
=======
  const drugsBtn = document.getElementById('dsbutton');
  const alcoholBtn = document.getElementById('abutton');
  const smokingBtn = document.getElementById('smbutton');
  const DoomScrollingBtn = document.getElementById('dmbutton');

  if (drugsBtn) {
    drugsBtn.addEventListener('click', function() {
      showDamagedLung('drugs');
    });
  }

>>>>>>> a615e284e4896812134a973b767c6d3c5c5f301b
  if (alcoholBtn) {
    alcoholBtn.addEventListener('click', function() {
      showDamagedLung('alcohol');
    });
  }
  
<<<<<<< HEAD
  if (drugsBtn) {
    drugsBtn.addEventListener('click', function() {
      showDamagedLung('drugs');
=======
  if (smokingBtn) {
    smokingBtn.addEventListener('click', function() {
      showDamagedLung('smoking');
    });
  }

  if (DoomScrollingBtn) {
    smokingBtn.addEventListener('click', function() {
      showDamagedLung('smoking');
>>>>>>> a615e284e4896812134a973b767c6d3c5c5f301b
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