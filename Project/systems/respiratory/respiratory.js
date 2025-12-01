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
  let title = '';
  let description = '';
  
  if (habit === 'drugs') {
    imagePath = '../../images/assets-lung/lung-drugs.png';
    title = '💊 Drug use';
    description = `
    <p><strong>Possible Consequence ⚠️: </strong> Chronic bronchitis, lung infections, or acute lung injury </p>
    <p><strong>Cause 🔍: </strong> Inhaled drugs (like marijuana or cocaine) damage airway lining and immune cells, inflaming and scarring the lungs. </p>
    <p><strong>Symptoms 🤒: </strong> Persistent cough, mucus buildup, wheezing, chest pain, shortness of breath </p>
    <p><strong>More: </strong> Repeated inhalation weakens your lung defense and increases infection risk — every puff adds up! </p>
    <p><strong>*Here drug use refers to the excessive use of marijuana, cocaine and crack</strong></p>
    `;
  } else if (habit === 'alcohol') {
    imagePath = '../../images/assets-lung/lung-alcohol.png';
    title = '🍺 Alcohol';
    description = `
    <p><strong>Possible Consequence ⚠️: </strong> sPneumonia, lung inflammation, or ARDS (acute respiratory distress syndrome) </p>
    <p><strong>Cause 🔍: </strong> Alcohol weakens lung immunity, damages airway-clearing cells, and depletes antioxidants that protect lung tissue. </p>
    <p><strong>Symptoms 🤒: </strong> Frequent chest infections, heavy cough, shortness of breath </p>
    <p><strong>More: </strong> Heavy drinking doubles your risk of severe lung infections — protect your lungs by cutting back. </p>
    `;
  } else if (habit === 'smoking') {
    imagePath = '../../images/assets-lung/lung-smoke.png';
    title = '🚬 Smoking';
    description = `
    <p><strong>Possible Consequence ⚠️: </strong> COPD, emphysema, lung cancer, or “popcorn lung” (from vaping) </p>
    <p><strong>Cause 🔍: </strong> Smoke and vapor destroy lung tissue, paralyze airway cilia, and fill lungs with tar or chemical toxins. </p>
    <p><strong>Symptoms 🤒: </strong> something </p>
    <p><strong>More: </strong> CThe longer you smoke or vape, the faster your lungs deteriorate — quitting now can reverse early damage! </p>
    `;
  } else if (habit === 'doomscrolling') {
    imagePath = '../../images/assets-lung/lung-doomscrolling.png';
    title = '📱 Doomscrolling';
    description = `
    <p><strong>Possible Consequence ⚠️: </strong> Reduced lung capacity and fitness </p>
    <p><strong>Cause 🔍: </strong> Sitting for hours weakens breathing muscles, reduces deep breathing, and lowers oxygen efficiency. </p>
    <p><strong>Symptoms 🤒: </strong> Feeling winded, shallow breathing, poor stamina </p>
    <p><strong>More: </strong> Move every hour! Deep breathing and posture breaks keep lungs strong and active. </p>
    <p><strong>*This also applies to phone or gaming addiction.</strong></p>
    `;
  } else if (habit === 'lowmovement') {
    imagePath = '../../images/assets-lung/lung-lowmovement.png';
    title = '🛏️ Low Movement';
    description = `
    <p><strong>Possible Consequence ⚠️: </strong> Weakened lungs and higher infection risk </p>
    <p><strong>Cause 🔍: </strong> Lack of exercise reduces lung strength, limits oxygen intake, and slows mucus clearance. </p>
    <p><strong>Symptoms 🤒: </strong> Shortness of breath, chest tightness, low energy </p>
    <p><strong>More: </strong> Even light activity like walking or stretching can boost lung health daily! </p>
    <p><strong>Having a sedentary lifestyle can lead to the same consequences </strong></p>
    `;
  } else if (habit === 'overeating') {
    imagePath = '../../images/assets-lung/lung-overeating.png';
    title = '🍽️ Overeating/Undereating';
    description = `
    <p><strong>Possible Consequence ⚠️: </strong> Breathing problems or lung weakness </p>
    <p><strong>Cause 🔍: </strong> Overeating adds pressure on lungs, while undereating weakens respiratory muscles and immune function. </p>
    <p><strong>Symptoms 🤒: </strong> Shortness of breath, fatigue, more infections </p>
    <p><strong>More: </strong> Balanced meals help your lungs function smoothly — nourish, don't overload! </p>
    `;
  } else if (habit === 'sleep') {
    imagePath = '../../images/assets-lung/lung-sleep.png';
    title = '💤 Lack of Sleep';
    description = `
    <p><strong>Possible Consequence ⚠️: </strong> Weakened lung immunity and poor breathing control </p>
    <p><strong>Cause 🔍: </strong> Inadequate sleep increases inflammation, reduces repair time, and weakens respiratory response. </p>
    <p><strong>Symptoms 🤒: </strong> something </p>
    <p><strong>More: </strong> Sleep heals not your lungs as well as other organs, aim to have at least 7 hours of sleep every night. </p>
    `;
  }
  
  console.log('Setting image path to:', imagePath);
  damagedLung.src = imagePath;

  //add description box
  descriptionTitle.textContent = title;
  descriptionText.innerHTML = description;
  
  damagedLung.classList.add('show');
  //make normal lung disappear
  normalLung.style.opacity = '0';
  damagedLung.classList.add('show');
  //show description box
  descriptionBox.classList.add('show');
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

  //Reset description box
  descriptionTitle.textContent = 'Select a Habit';
  descriptionText.textContent = 'Click on a habit to see how it affects the respiratory system.';
}

document.addEventListener('DOMContentLoaded', function() {
  // Add click event to main habit buttons
  const drugsBtn = document.getElementById('dsbutton');
  const alcoholBtn = document.getElementById('abutton');
  const smokingBtn = document.getElementById('smbutton');
  const DoomScrollingBtn = document.getElementById('dmbutton');

  if (drugsBtn) {
    drugsBtn.addEventListener('click', function() {
      showDamagedLung('drugs');
    });
  }

  if (alcoholBtn) {
    alcoholBtn.addEventListener('click', function() {
      showDamagedLung('alcohol');
    });
  }
  
  if (smokingBtn) {
    smokingBtn.addEventListener('click', function() {
      showDamagedLung('smoking');
    });
  }

  if (DoomScrollingBtn) {
    smokingBtn.addEventListener('click', function() {
      showDamagedLung('smoking');
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