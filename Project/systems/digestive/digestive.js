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

// Handle habit selection
function selectHabit(habit) {
  console.log('Selected habit:', habit);
  // You can add functionality here to show organ effects for the selected habit
  if (habit === 'smoking') {
    habitText.style.display = 'block';
    newp.textContent = "Drug indulgence is a destructive habit that takes a severe toll on both the body and mind. Many substances, including stimulants, opioids, and marijuana, cause long-term damage to vital organs and systems." +  
    "Stimulants like cocaine and meth can cause internal issues such as ulcers, tissue death" + 
    "in the intestines (ischemia), and severe weight loss from malnutrition. Opioids, on the other hand, slow down the body’s natural processes—causing opioid-induced bowel dysfunction (OIBD), depressed breathing that deprives organs of oxygen, and" +  
    "an overall breakdown in health. Over time, drug abuse can cause tooth decay, bowel irregularities, cramps, and a weakened" + 
    "immune system, all while eroding mental stability and self-control.";
  
    habitText.append(newp);
  }
  
  if (habit === "alcohol") {
    habitText.style.display = 'block';
    newp.textContent = "Drinking alcohol might seem harmless or even relaxing at first, but it’s actually a habit that takes a serious toll on nearly every part of your body. Long-term alcohol use can lead to cancers of the esophagus, throat, larynx, liver, colon," +
    "and even the rectovaginal area. It damages vital organs like the liver and kidneys, raises blood pressure, and irritates the stomach lining while inflaming the pancreas. It also disrupts metabolism, causes malnutrition and weight loss, and even damages your DNA — harm that can’t easily be undone." +
    " Over time, drinking doesn’t make you happy; it just keeps you from feeling worse. In this way, alcohol steals your natural sense of joy," + 
    "trapping you in a cycle where you need it just to feel normal.";
    habitText.append(newp);
  }
  
  if (habit === "doomscrolling") {
    habitText.style.display = 'block';
    newp.textContent = "Doomscrolling-a habit of endlessly consuming negative or distressing content online—can take a serious toll on both mental and physical health. Prolonged screen time, especially among children and teens, has been linked to disruptions in metabolism" + 
    "and an increased risk of developing metabolic syndrome, which includes conditions such as high cholesterol, high blood pressure, elevated blood sugar, and high triglyceride levels. These health problems often stem from extended periods of inactivity" +
    "while scrolling, as people tend to move even less than they would when reading a book or watching TV. In addition to metabolic issues, doomscrolling often encourages “mindless eating,” where " +
    "individuals snack without awareness while focused on their screens, contributing to obesity and poor digestion. Over time, this combination of inactivity and unhealthy eating can also lead to gut-related problems, such as inflammatory bowel " +
    "disorders or other stomach issues. Together, these effects make doomscrolling not just a mentally draining habit, but a physically harmful one that can disrupt the body’s natural balance and long-term well-being.";
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

