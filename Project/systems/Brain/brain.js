// Toggle sidebar dropdown
function toggleSidebarDropdown() {
  const habitsList = document.getElementById('sidebarHabitsList');
  const toggle = document.getElementById('sidebarToggle');
  
  habitsList.classList.toggle('open');
  toggle.classList.toggle('open');
}
// Show info panel

function showInfoPanel(htmlForInfo) {
  const info = document.getElementById('info');

  if (info) {
    info.innerHTML = htmlForInfo || '';
  }

  if (typeof hs === 'function') {
    hs('info');
  } else {
    if (info) info.style.display = 'block';
  }
}

// Handle habit selection
function selectHabit(habit) {
  console.log('Selected habit:', habit);
  const brainImage = document.getElementById('brainImage');
  const prefrontalImage = document.getElementById('prefrontalImage');
  const nervousImage = document.getElementById('nervousImage');
  const info = document.getElementById('info');
  const defaultImage = document.getElementById('defaultImage');
 
  // hide all organ images first
  if (defaultImage) defaultImage.style.display = 'none';
  if (brainImage) brainImage.style.display = 'none';
  if (nervousImage) nervousImage.style.display = 'none';
  if (prefrontalImage) prefrontalImage.style.display = 'none';

  // switch on habit
  if (habit === 'sedentary') {
    if (nervousImage) nervousImage.style.display = 'block';
    info.style.display = 'block';
    info.innerHTML = '<b>Possible Consequence ⚠️:</b> Cognitive decline<br>• After sitting for a long time, the brain cannot get enough oxygen and energy, and the hippocampus cannot receive stimulation to produce new neurons, so the plasticity of the brain and learning ability are reduced<br>• Neuron death causes slow thinking and cognitive decline<br><br><b>Cause 🔍:</b> Reduced blood flow and oxygen to the brain due to low physical activity<br><br><b>Symptoms 🤒:</b><br>• Memory decline, difficulty concentrating, slowed thinking.<br>• Lower metabolic process<br>• Insufficient blood supply to the brain<br><br> <b>More:</b> Regular physical activity (≈150 min/week) supports brain health.';
  } else if (habit === 'alcohol') {
    if (prefrontalImage) brainImage.style.display = 'block';
    info.style.display = 'block';
    info.innerHTML = '<b>Possible Consequence ⚠️:</b> Brain Structure impairment<br>• Prefrontal cortex: Decreased judgment, impulsive behavior, lack of foresight, leading to reckless decisions after drinking.<br>• Cerebellum: leading to unstable gait, difficulty standing, and uncoordinated movements. This is the direct cause of swaying while walking for intoxicated individuals, and long-term damage can lead to permanent walking difficulties.<br>• Hippocampus: leading to severe memory impairment, hard to form new episodic memories.  Fragment - a memory that is completely blank after drinking for a period of time.<br><br><b>Cause 🔍:</b> Heavy alcohol use affects decision-making and impulse control regions.<br><br><b>Symptoms 🤒:</b><br>Dizzy, Headache, Memory loss, loss balance<br>• ';
  } else if (habit === 'chronic-pressure') {
    if (brainImage) prefrontalImage.style.display = 'block';
    info.style.display = 'block';
    info.innerHTML = '<b>Possible Consequence ⚠️:</b> Stress-related cognitive effects<br>• Keeping individuals in a state of high anxiety and stress for a long time, further exacerbating stress reactions<br><b>Cause 🔍:</b> Chronic pressure/stress alters neural function and cortisol regulation.<b><br>Symptoms 🤒:</b><br>• Hippocampus<br>The hippocampus has high-density cortisol receptors and is extremely sensitive to stress. Long-term high cortisol levels can cause dendritic atrophy: reduced and weakened connections between neurons, even accelerating cell death.<br>• Prefrontal cortex. <br>Become indecisive, have difficulty concentrating, be impulsive and irritable, and have poorer emotional regulation abilities. ';
  } else if (habit === 'poor-sleep') {
    if (prefrontalImage) prefrontalImage.style.display = 'block';
    info.style.display = 'block';
    info.innerHTML = '<b>Possible Consequence ⚠️:</b> Impaired memory and executive function(Impaired prefrontal cortex function)<br><br>• Inattention: easily distracted.<br>• Decreased decision-making ability: more inclined to make risky and impulsive decisions.<br>• Difficulty in emotion regulation: become irritable, anxious and more sensitive to negative stimuli.<br><br><b>Cause 🔍:</b><br>• Sleep deprivation disrupts memory consolidation.<br><br><b>Symptoms 🤒:</b><br>• Memory loss, Hard to concentrate, Increased forgetfulness. <br>• Feeling dizzy and tired. <br>• Migraine headaches.';
  } else if (habit === 'Addiction-Device') {
    if (brainImage) brainImage.style.display = 'block';
    info.style.display = 'block';
    info.innerHTML = '<b>Possible Consequence ⚠️:</b> Disrupted attention/sleep<br>• Frequent task switching (returning messages, brushing news, watching videos) will train the brain to be used to short and fast stimuli, making it difficult to maintain long-term and deep attention.<br>• The blue light emitted by the device will inhibit the secretion of melatonin and directly affect the quality of sleep.<br><br><b>Cause 🔍:</b><br> • Excessive use of digital devices can impair sleep and attention.<br><br><b>Symptoms 🤒:</b><br> • Difficulty focusing on tasks<br> • Become fidgety and bored when without device(Addiction)<br> • Mood swings and irritability';
  } else {
    if (brainImage) brainImage.style.display = 'block';
    info.style.display = 'block';
    info.innerHTML = '<b>Possible Consequence ⚠️:</b> General brain health impact<br><b>Cause 🔍:</b> Various lifestyle habits can affect brain function and structure over time.';

  }
}

function resetBrain() {
  console.log('Reset to default brain view');
  const defaultImage = document.getElementById('defaultImage');
  const brainImage = document.getElementById('brainImage');
  const nervousImage = document.getElementById('nervousImage');
  const prefrontalImage = document.getElementById('prefrontalImage');
  const info = document.getElementById('info');
  const info2 = document.getElementById('info2');

  // Show default and hide other organ images
  if (defaultImage) defaultImage.style.display = 'block';
  if (brainImage) brainImage.style.display = 'none';
  if (nervousImage) nervousImage.style.display = 'none';
  if (prefrontalImage) prefrontalImage.style.display = 'none';

  // Hide info panels
  if (info) info.style.display = 'none';
  if (info2) info2.style.display = 'none';
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
