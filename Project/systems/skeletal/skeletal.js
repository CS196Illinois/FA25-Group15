
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
    boneText.innerHTML = `<b>Possible Consequence ⚠️:</b> Periodontis/Gum disease <br> <b>Cause 🔍:</b> Buildup of bacteria under gums causing large layers of plaque and gingivitis to develop on top of teeth <br> 
    <b>Symptoms 🤒:</b> Teeth falling out, red/swollen gums, tooth discoloration (yellow/brown due to nicotine/tobacco tar) <br> 
    <b>More:</b> Smoking<b>*</b> more cigarettes and at a longer duration will increase gum disease, weakening your immune system, and it puts you 2x at risk for gum-disease compared to non-smokers. It's time to stop! <br> 
    <b>*Here, smoking refers to both vapes and cigarettes</b>`;
  }

  if ("vitdef") {
    const toBeHidden = document.getElementById("bhalf");
    toBeHidden.style.visibility = 'hidden';
    const toShow = document.getElementById("bowlegs");
    toShow.style.visibility = "visible";
    boneText.style.display = 'block';
    boneText.innerHTML = `<b>Possible Consequence ⚠️:</b> Hypocalcemia or Osteomalacia/Rickets
                        <br> <b>Cause 🔍:</b> Consuming too little Vitamin D can result in a vitamin D deficiency, which hinders your body's ability to absorb calcium. 
                        This can result in: <br> 
                        <ol> 
                        <li> <b>Hypocalcemia:</b> low calcium levels in your blood stream </li> 
                        <li> <b>Hyperparathyroidism:</b> overactive parathyroid glands </li> 
                        <li> <b>Osteomalacia/Rickets:</b> soft bones in adults or children, respectively, resulting in a bowed leg shape </li> 
                        </ol> <br> 
                        <b>Symptoms 🤒:</b> Muscle weakness/cramps, fatigue, depression <br> 
                        <b>Suggestions:</b> 
                        <ol> 
                        <li> If you're an adult (19-70 yrs.), take 600 IU/day, and if you are 70 yrs+, take 800 IU/day</li>
                        <li> Consume Vitamin D rich foods such as: (oily fish) 🐟 salmon, tuna, mackerel, or milk 🥛, cereal 🥣, or orange juice 🍊 </li>
                        <li> Make sure to go outside daily, especially on sunny days </li>
                        `;
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