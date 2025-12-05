// Toggle sidebar dropdown
function toggleSidebarDropdown() {
  const habitsList = document.getElementById('sidebarHabitsList');
  const toggle = document.getElementById('sidebarToggle');
  
  habitsList.classList.toggle('open');
  toggle.classList.toggle('open');
};


const habitText = document.getElementById("info");
const newp = document.createElement('p');
const newp2 = document.createElement('p');

//digestive system images
const doomdigImg = document.querySelector('.doomdig');
const healthydigImg = document.querySelector('.healthydig');
const alcdigImg = document.querySelector('.alcdig');
const drugdigImg = document.querySelector('.drugdig');

//hide all images initially except healthy
function hideAllImages() {
  doomdigImg.style.display = 'none';
  healthydigImg.style.display = 'none';
  alcdigImg.style.display = 'none';
  drugdigImg.style.display = 'none';
}
hideAllImages();
healthydigImg.style.display = 'block';
habitText.style.display = 'block';
habitText.innerHTML = '<strong style="font-size: 24px;">Select a habit</strong><p>Choose a habit from the sidebar to learn about its effects on your digestive system.</p>'
habitText.style.marginTop = '100px';

// Handle habit selection
function selectHabit(habit) {
  console.log('Selected habit:', habit);
  hideAllImages();
  habitText.innerHTML = '';
  // You can add functionality here to show organ effects for the selected habit
  if (habit === 'smoking') {

    drugdigImg.style.display = 'block';

    habitText.style.display = 'block';
    newp.textContent = "𝐏𝐨𝐬𝐬𝐢𝐛𝐥𝐞 𝐂𝐨𝐧𝐬𝐞𝐪𝐮𝐞𝐧𝐜𝐞 ⚠️: Long-term damage to vital organs and body systems; overall breakdown of physical health; decline in mental stability and self-control. 𝐂𝐚𝐮𝐬𝐞 🔍: Stimulant use (cocaine, meth); opioid use; chronic drug abuse disrupting normal bodily functions. 𝐒𝐲𝐦𝐩𝐭𝐨𝐦𝐬 🤒: Ulcers and intestinal tissue death (ischemia); severe weight loss from malnutrition; opioid-induced bowel dysfunction (OIBD); depressed breathing; tooth decay; bowel irregularities and cramps; weakened immune system.";

;
  
    habitText.append(newp);
  }
  
  if (habit === "alcohol") {

    alcdigImg.style.display = 'block';

    habitText.style.display = 'block';
    newp.textContent =  "𝐏𝐨𝐬𝐬𝐢𝐛𝐥𝐞 𝐂𝐨𝐧𝐬𝐞𝐪𝐮𝐞𝐧𝐜𝐞 ⚠️: Long-term organ damage; increased cancer risk; disrupted metabolism; malnutrition; weakened emotional well-being and loss of natural joy. 𝐂𝐚𝐮𝐬𝐞 🔍: Long-term alcohol use affecting the liver, kidneys, stomach lining, pancreas, and DNA. 𝐒𝐲𝐦𝐩𝐭𝐨𝐦𝐬 🤒: Increased risk of cancers (esophagus, throat, larynx, liver, colon, rectovaginal area); high blood pressure; inflamed pancreas; stomach irritation; weight loss; damaged DNA; dependence that blocks natural happiness and emotional stability.";

    habitText.append(newp);
  }
  
  if (habit === "doomscrolling") {

    doomdigImg.style.display = 'block';

    habitText.style.display = 'block';
    newp.textContent = "𝐏𝐨𝐬𝐬𝐢𝐛𝐥𝐞 𝐂𝐨𝐧𝐬𝐞𝐪𝐮𝐞𝐧𝐜𝐞 ⚠️: Metabolic disruption; increased risk of metabolic syndrome (high cholesterol, high blood pressure, elevated blood sugar, high triglycerides); obesity; gut issues such as inflammatory bowel disorders; long-term imbalance in overall health. 𝐂𝐚𝐮𝐬𝐞 🔍: Excessive doomscrolling; prolonged screen time; extended inactivity while scrolling; mindless eating triggered by constant online engagement. 𝐒𝐲𝐦𝐩𝐭𝐨𝐦𝐬 🤒: Disrupted metabolism; unhealthy snacking";

    habitText.append(newp);
  }

  // For example: highlight organs, show info boxes, etc.
};

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
//reset digestive to normal
function resetDig() {
  console.log('Reset to normal digestive');
  hideAllImages();
  healthydigImg.style.display = 'block';
  habitText.innerHTML = '<strong style="font-size: 24px;">Select a habit</strong><p>Choose a habit from the sidebar to learn about its effects on your digestive system.</p>'
  habitText2.innerHTML = '';
  habbitText.style.display = 'block';
  habbitText2.style.display = 'none';
}


button3.addEventListener("click", function() {
  habitText.style.display = 'block';
  habitText2.style.display = 'block';
  newp.textContent = 'doomscrolling bad for your liver';
  habitText.appendChild(newp);
  newp2.textContent = 'doomscrolling bad for your small intestine';
  habitText2.appendChild(newp2);
  /**habitText.textContent = `
  Doomscrolling—a habit of endlessly consuming negative or distressing content online—can take a serious toll on both mental and physical health. Prolonged screen time, especially among children and teens, has been linked to disruptions in metabolism 
  and an increased risk of developing metabolic syndrome, which includes conditions such as high cholesterol, high blood pressure, elevated blood sugar, and high triglyceride levels. These health problems often stem from extended periods of inactivity 
  while scrolling, as people tend to move even less than they would when reading a book or watching TV. In addition to metabolic issues, doomscrolling often encourages “mindless eating,” where 
  individuals snack without awareness while focused on their screens, contributing to obesity and poor digestion. Over time, this combination of inactivity and unhealthy eating can also lead to gut-related problems, such as inflammatory bowel 
  disorders or other stomach issues. Together, these effects make doomscrolling not just a mentally draining habit, but a physically harmful one that can disrupt the body’s natural balance and long-term well-being.
  `; **/
});

