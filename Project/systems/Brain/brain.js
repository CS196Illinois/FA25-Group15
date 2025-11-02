// Toggle sidebar dropdown
function toggleSidebarDropdown() {
  const habitsList = document.getElementById('sidebarHabitsList');
  const toggle = document.getElementById('sidebarToggle');
  
  habitsList.classList.toggle('open');
  toggle.classList.toggle('open');
}
function showInfoPanel(htmlForInfo, htmlForInfo2) {
  const info = document.getElementById('info');
  const info2 = document.getElementById('info2');

  if (info) {
    info.innerHTML = htmlForInfo || '';
    
  }
  if (info2) {
    info2.innerHTML = htmlForInfo2 || '';
  } 
  

  if (typeof hs === 'function') {
    hs('info');
    hs('info2');
  } else {
    if (info) info.style.display = 'block';
    if (info2) info2.style.display = 'block';
  }
}

// Handle habit selection
function selectHabit(habit) {
  console.log('Selected habit:', habit);
  const brainImage = document.getElementById('brainImage');
  const prefrontalImage = document.getElementById('prefrontalImage');
  const nervousImage = document.getElementById('nervousImage');
  const info = document.getElementById('info');
  const info2 = document.getElementById('info2');

  

  // hide all organ images first (use display to match initial HTML)
  if (brainImage) brainImage.style.display = 'none';
  if (nervousImage) nervousImage.style.display = 'none';
  if (prefrontalImage) prefrontalImage.style.display = 'none';

    // clear info panels
  

  // switch on habit
  if (habit === 'sedentary') {
    if (nervousImage) nervousImage.style.display = 'block';
    info.style.display = 'block';
    info.innerHTML = '<b>Possible Consequence ⚠️:</b> Cognitive decline<br><b>Cause 🔍:</b> Reduced blood flow and oxygen to the brain due to low physical activity<br><b>Symptoms 🤒:</b> Memory problems, difficulty concentrating, slowed thinking.<br><b>More:</b> Regular physical activity (≈150 min/week) supports brain health.';
  } else if (habit === 'alcohol') {
    if (prefrontalImage) prefrontalImage.style.display = 'block';
    info.style.display = 'block';
    info.innerHTML = '<b>Possible Consequence ⚠️:</b> Prefrontal impairment<br><b>Cause 🔍:</b> Heavy alcohol use affects decision-making and impulse control regions.';
  } else if (habit === 'chronic-pressure') {
    if (brainImage) brainImage.style.display = 'block';
    info.style.display = 'block';
    info.innerHTML = '<b>Possible Consequence ⚠️:</b> Stress-related cognitive effects<br><b>Cause 🔍:</b> Chronic pressure/stress alters neural function and cortisol regulation.';
  } else if (habit === 'poor-sleep') {
    if (prefrontalImage) prefrontalImage.style.display = 'block';
    info.style.display = 'block';
    info.innerHTML = '<b>Possible Consequence ⚠️:</b> Impaired memory and executive function<br><b>Cause 🔍:</b> Sleep deprivation disrupts memory consolidation.';
  } else if (habit === 'addiction to digital devices') {
    if (brainImage) brainImage.style.display = 'block';
    info.style.display = 'block';
    info.innerHTML = '<b>Possible Consequence ⚠️:</b> Disrupted attention/sleep<br><b>Cause 🔍:</b> Excessive stimulation from devices can impair sleep and attention.';
  } else {
    if (brainImage) brainImage.style.display = 'block';
    info.style.display = 'block';
    info.innerHTML = '<b>Possible Consequence ⚠️:</b> General brain health impact<br><b>Cause 🔍:</b> Various lifestyle habits can affect brain function and structure over time.';

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

  // Bind page buttons (if present) to the same selectHabit handler used by the sidebar
  const btnMap = {
    smbutton: 'chronic-pressure',
    abutton: 'alcohol',
    slbutton: 'sedentary',
    psbutton: 'poor-sleep',
    ecbutton: 'addiction to digital devices'
  };

  Object.keys(btnMap).forEach(function(id) {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        selectHabit(btnMap[id]);
      });
    }
  });

});
