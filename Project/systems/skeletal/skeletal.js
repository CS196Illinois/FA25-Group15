
const boneText = document.getElementById("skinfo");
const boneText2 = document.getElementById("skinfo2");

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
  if ("drinksmoke") {
    const toBeHidden = document.getElementById("head");
    toBeHidden.style.visibility = 'hidden';
    const toShow = document.getElementById("badteeth");
    toShow.style.visibility = "visible";
    boneText.style.display = 'block';
    boneText.innerHTML = "<b>Possible Consequence ⚠️:</b> Periodontis/Gum disease <br> <b>Cause 🔍:</b> Buildup of bacteria under gums causing large layers of plaque and gingivitis to develop on top of teeth <br> <b>Symptoms 🤒:</b> Teeth falling out, red/swollen gums, tooth discoloration (yellow/brown due to nicotine/tobacco tar) <br> <b>More:</b> Smoking<b>*</b> more cigarettes and at a longer duration will increase gum disease, weakening your immune system, and it puts you 2x at risk for gum-disease compared to non-smokers. It's time to stop! <br> <b>*Here, smoking refers to both vapes and cigarettes</b>";
  }
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