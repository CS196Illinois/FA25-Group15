// Heart images for each habit
const heartImages = {
  smoking: '../../images/heart-smoke.png',
  alcohol: '../../images/heart-alcohol.png',
  'poor-diet': '../../images/heart-unhealthy-diet.png',
  'poor-sleep': '../../images/heart-lackofsleep.png',
  normal: '../../images/heart-normal.png'
};

const habitInfo = {
  smoking: '<b>Possible Consequence ⚠️:</b> Cardiovascular Disease<br>• Damages the lining of blood vessels, making them more prone to plaque buildup (atherosclerosis)<br>• Reduces oxygen in the blood, forcing the heart to work harder<br>• Increases blood pressure and heart rate<br>• Raises risk of blood clots, heart attack, and stroke<br><br><b>Cause 🔍:</b> Nicotine and chemicals constrict blood vessels and damage artery linings<br><br><b>Symptoms 🤒:</b><br>• Chest pain, shortness of breath<br>• Irregular heartbeat<br>• High blood pressure<br>• Poor circulation, cold hands/feet',
  
  alcohol: '<b>Possible Consequence ⚠️:</b> Weakened Heart Muscle<br>• Raises blood pressure and triglyceride levels<br>• Can weaken the heart muscle over time (alcoholic cardiomyopathy)<br>• Increases risk of irregular heart rhythms (atrial fibrillation)<br>• Excessive use linked to obesity and liver damage, which indirectly stress the cardiovascular system<br><br><b>Cause 🔍:</b> Alcohol toxicity damages heart tissue and affects electrical signals<br><br><b>Symptoms 🤒:</b><br>• Irregular or rapid heartbeat<br>• Fatigue and weakness<br>• Swelling in legs/ankles<br>• Shortness of breath',
  
  'poor-diet': '<b>Possible Consequence ⚠️:</b> Blocked Arteries & High Cholesterol<br>• Diets high in saturated fats, trans fats, and cholesterol raise LDL ("bad") cholesterol and plaque buildup<br>• High sodium intake raises blood pressure and fluid retention<br>• Excess sugar intake contributes to obesity, diabetes, and metabolic syndrome<br>• Lack of fruits, vegetables, and fiber means less protection from antioxidants and essential nutrients<br><br><b>Cause 🔍:</b> Excess sodium, sugar, and unhealthy fats damage cardiovascular system<br><br><b>Symptoms 🤒:</b><br>• High blood pressure<br>• Chest pain (angina)<br>• Fatigue and reduced stamina<br>• Weight gain',
  
  'poor-sleep': '<b>Possible Consequence ⚠️:</b> High Blood Pressure & Inflammation<br>• Chronic sleep deprivation raises blood pressure and stress hormones<br>• Increases risk of obesity and diabetes, which strains the heart<br>• Sleep apnea (if untreated) increases the risk of high blood pressure, arrhythmias, and heart failure<br>• Disturbs heart\'s natural recovery and repair cycles<br><br><b>Cause 🔍:</b> Lack of sleep affects cardiovascular recovery and repair<br><br><b>Symptoms 🤒:</b><br>• Elevated blood pressure<br>• Irregular heartbeat<br>• Increased stress on heart<br>• Higher risk of heart attack',
};

// Toggle sidebar dropdown
function toggleSidebarDropdown() {
  const habitsList = document.getElementById('sidebarHabitsList');
  const toggle = document.getElementById('sidebarToggle');
  
  habitsList.classList.toggle('open');
  toggle.classList.toggle('open');
}

// Handle habit selection and change heart image
function selectHabit(habit) {
  console.log('Selected habit:', habit);
  const heartImage = document.getElementById('heartImage');
  const info = document.getElementById('info');
  const descriptionBox = document.getElementById('descriptionBox');
  
  // Change the heart image
  if (heartImage && heartImages[habit]) {
    heartImage.src = heartImages[habit];
  }
  
  // Show info box with content
  if (info) {
    info.innerHTML = habitInfo[habit] || habitInfo.default;
    info.style.display = 'block';
  }

  // Hide the "Select a Habit" box once a habit is clicked 👇
  if (descriptionBox) {
    descriptionBox.style.display = 'none';
  }
}

// Reset to normal heart
function resetHeart() {
  console.log('Reset to normal heart');
  const heartImage = document.getElementById('heartImage');
  const info = document.getElementById('info');
  const info2 = document.getElementById('info2');
  const descriptionBox = document.getElementById('descriptionBox');
  
  if (heartImage) {
    heartImage.src = heartImages.normal;
  }
  
  if (info) info.style.display = 'none';
  if (info2) info2.style.display = 'none';

  if (descriptionBox) {
    descriptionBox.style.display = 'block';
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

// Initialize and bind buttons
window.addEventListener('DOMContentLoaded', function() {
  const heartImage = document.getElementById('heartImage');
  if (heartImage) {
    heartImage.src = heartImages.normal;
  }

  const btnMap = {
    smbutton: 'smoking',
    abutton: 'alcohol',
    pdbutton: 'poor-diet',
    psbutton: 'poor-sleep',
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