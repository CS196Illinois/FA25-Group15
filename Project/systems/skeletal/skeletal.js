const boneText = document.getElementById("skinfo");
const boneText2 = document.getElementById("skinfo2");
var toShow;
var toShow2;
var toShow3;
var toShow4;
var toBeHidden;
var toBeHidden2;
var toBeHidden3;
var head = document.getElementById("sk");
var mainBody = document.getElementById("mainb");
var partb = document.getElementById("bones");
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
  
  if (habit == "vitdef") {
    toShow = document.getElementById("blargh");
    toShow.style.visibility = 'visible';
    toBeHidden = document.getElementById("bones");
    toBeHidden.style.visibility = 'hidden';
    boneText.style.display = 'block';
    boneText.innerHTML = `<b>Possible Consequence ⚠️: </b> Osteomalacia & Rickets <br>
    <b>Cause 🔍:</b> Hypocalcemia (low calcium levels in blood stream) leads to hyperparathyroidism (overactive parathyroid glands) <br>
    resulting in soft bones in adults (osteomalacia) or in children (rickets) <br> 
    <b>Symptoms 🤒:</b> Muscle weakness/cramps, fatigue, depression <br>`
    /*<b>Recommendations:</b> <br>
    <b>Adults (ages 19 - 70):</b> Take 600 IU/day <br>
    <b>Adults (ages 71+):</b> Take 800 IU/day <br>
    <b>Consume</b> Vitamin D rich foods such as:
    <ol> (oily fish) salmon, tuna, mackerel, 
    or milk, cereal, or orange juice*/;
  } 
  if (habit == "caldef") {
    toShow2 = document.getElementById("osteo");
    toShow2.style.visibility = 'visible';
    boneText.style.display = 'block';
    boneText.innerHTML = `<b>Possible Consequences ⚠️: </b> <br> Hypocalcemia & Osteoporosis <br>
    <b>Cause 🔍:</b> Too little calcium due to a calcium deficient diet can lead to weak bones,
    or result in bone fractures <br> 
    <b>Symptoms 🤒:</b> Muscle cramps (specifically in back/legs, dry/scaly skin, brittle nails) <br> 
    `;
    /*<b>Recommendations:</b> <br>
    <b> Adults (ages 19-50, men 51 -70): </b> 1000 mg of calcium/day <br>
    <b> Women & Men (ages 51+ | 71+ ):</b> 1200 mg of calcium/day (according to *RDA) <br>
    <b> Consume: </b>
    Calcium-rich foods: <br>
    Dairy 🥛,  turnips 🍠, salmon/canned salmon w/ bones 🍣, sardines 🐟, <br>
    tuna 🐟, soy products (e.g. tofu) 🥜*/
  }
  if (habit == "drinksmoke") {
    toShow3 = document.getElementById("ickyteeth");
    toShow3.style.visibility = 'visible';
    toBeHidden3 = document.getElementById("sk");
    toBeHidden3.style.visibility = 'hidden';
    boneText.style.display = 'block';
    boneText.innerHTML = 
    `<b>Possible Consequence ⚠️: <br> </b> Periodontis/Gum disease <br> 
    <b>Cause 🔍:</b> Buildup of bacteria under gums causing large layers of plaque and gingivitis to develop on top of teeth <br> 
    <b>Symptoms 🤒:</b> Teeth falling out, red/swollen gums, tooth discoloration (yellow/brown due to nicotine/tobacco tar) <br> 
    <b>More:</b> Smoking<b>*</b> more cigarettes and at a longer duration will increase gum disease, weakening your immune system, and it puts you 2x at risk for gum-disease compared to non-smokers. It's time to stop! <br>
     <b>*Here, smoking refers to both vapes and cigarettes</b>`;
  } 
  if (habit == "exercise") {
    toShow4 = document.getElementById("atr");
    toShow4.style.visibility = 'visible';
    mainBody.style.visibility = 'hidden';
    head.style.visibility = 'hidden';
    partb.style.visibility = 'hidden';
    boneText.style.display = 'block';
    boneText.innerHTML = `<b>Possible Consequence ⚠️: </b> <br> Muscle atrophy <br>
    <b>Cause 🔍:</b> Too little exercise leads to weakened muscles and bones <br> 
    <b>Symptoms 🤒:</b> Facial paralysis, muscle difference/weakness, numbmess/tingling in arms/legs, gradual memory loss <br> 
    `;
    /*<b>Suggested exercises:</b> <br>
    <ol>
    <li> Walking 🚶🏼</li> <br>
    <li> Running 🏃</li> <br>
    <li>Dancing 💃</li> <br>
    <li>Soccer ⚽</li><br>
    <li>Tennis 🎾</li><br>
    <li>Pickleball 🏓</li><br>
    <li>Stair exercises 𓊍</li><br>
    </ol>*/
  }
  /*
  if (habit == "caldef") {
    toShow4 = document.getElementById("osteo");
    toShow4.style.visibility = 'visible';
    toBeHidden4 = document.getElementById("skel");
    toBeHidden4.style.visibility = 'hidden';
    boneText.style.display = 'block';
    boneText.innerHTML = `<b>Possible Consequences ⚠️: </b> <br> Hypocalcemia & Osteoporosis <br>
    <b>Cause 🔍:</b> Too little calcium due to a calcium deficient diet can lead to weak bones,
    or result in bone fractures <br> 
    <b>Symptoms 🤒:</b> Muscle cramps (specifically in back/legs, dry/scaly skin, brittle nails) <br> 
    `;
    /*<b>Recommendations:</b> <br>
    <b> Adults (ages 19-50, men 51 -70): </b> 1000 mg of calcium/day <br>
    <b> Women & Men (ages 51+ | 71+ ):</b> 1200 mg of calcium/day (according to *RDA) <br>
    <b> Consume: </b>
    Calcium-rich foods: <br>
    Dairy 🥛,  turnips 🍠, salmon/canned salmon w/ bones 🍣, sardines 🐟, <br>
    tuna 🐟, soy products (e.g. tofu) 🥜*/
  /*}*/
  // You can add functionality here to show organ effects for the selected habit
  // For example: highlight organs, show info boxes, etc.
  
}

function resetBones() {
  boneText.style.display = "none";
  if (toBeHidden.style.visibility == 'hidden' && toShow.style.visibility == 'visible') {
    toShow.style.visibility = 'hidden'; 
    toBeHidden.style.visibility = 'visible';
  } else if (toShow2.style.visibility == 'visible') {
    toShow2.style.visibility = 'hidden';
  } else if (toBeHidden3.style.visibility == 'hidden' && toShow3.style.visibility == 'visible') {
    toShow3.style.visibility = 'hidden';
    toBeHidden3.style.visibility = 'visible';
  } else if (toShow4.style.visibility == 'visible') {
    toShow4.style.visibility = 'hidden';
    mainBody.style.visibility = 'visible';
    head.style.visibility = 'visible';
    partb.style.visibility = 'visible';
  }
  console.log('Reset to normal skeleton');
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