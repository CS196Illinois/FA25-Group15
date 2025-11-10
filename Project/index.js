const button = document.getElementById("smbutton");
const button2 = document.getElementById("abutton");
const button3 = document.getElementById("dsbutton");
const habitText = document.getElementById("info");
const habitText2 = document.getElementById("info2");
const newp = document.createElement('p');
const newp2 = document.createElement('p');

function hs(id) {
  var div = document.getElementById(id);
  if(div.style.display === 'none') {
    div.style.display = 'block';
  }
  else {
    div.style.display = 'none';
  }
}

button.addEventListener("click", function() {
  habitText.style.display = 'block';
  habitText2.style.display = 'block';
  newp.textContent = 'smoking bad for your liver';
  habitText.appendChild(newp);
  newp2.textContent = 'smoking bad for your small intestine';
  habitText2.appendChild(newp2);
  /**habitText.textContent = `
  Drug indulgence is a destructive habit that takes a severe toll on both the body and mind. Many substances, including stimulants, opioids, and marijuana, cause long-term damage to vital organs and systems. Stimulants like cocaine, meth,
  or misused Adderall place extreme stress on the heart, increasing the risk of heart attack or stroke, and can even damage blood vessels and the brain due to oxygen deprivation. They can also cause internal issues such as ulcers, tissue death
  in the intestines (ischemia), and severe weight loss from malnutrition. Opioids, on the other hand, slow down the body’s natural processes—causing opioid-induced bowel dysfunction (OIBD), depressed breathing that deprives organs of oxygen, and 
  an overall breakdown in health. Even marijuana, which is often viewed as less harmful, can lead to lung irritation and heart strain when smoked heavily. Over time, drug abuse can cause tooth decay, bowel irregularities, cramps, and a weakened 
  immune system, all while eroding mental stability and self-control. What may begin as a coping mechanism or form of escape quickly becomes a habit that damages the body’s essential functions and quality of life. Drug indulgence doesn’t just harm 
  the user physically—it traps them in a cycle that destroys their health, clarity, and potential.
  `; Sorry :(**/
  
});

button2.addEventListener("click", function() {
  habitText.style.display = 'block'; 
  habitText2.style.display = 'block';
  newp.textContent = 'alcohol bad for your liver';
  habitText.appendChild(newp);
  newp2.textContent = 'alcohol bad for your small intestine';
  habitText2.appendChild(newp2);
  /** habitText.textContent = `
  Drinking alcohol might seem harmless or even relaxing at first, but it’s actually a habit that takes a serious toll on nearly every part of your body. Long-term alcohol use can lead to cancers of the esophagus, throat, larynx, liver, colon,
  and even the rectovaginal area. It damages vital organs like the liver and kidneys, raises blood pressure, and irritates the stomach lining while inflaming the pancreas. Over time, alcohol dehydrates you, throws off your body’s
  fluid and electrolyte balance, and weakens your immune system, leaving you more vulnerable to illness. It also disrupts metabolism, causes malnutrition and weight loss, and even damages your DNA — harm that can’t easily be undone.
  Beyond the physical effects, alcohol can also quietly rewire your brain. Drinking gives you a temporary boost of dopamine — the brain’s “feel good” chemical — but repeated use lowers your natural baseline levels. This means your brain 
  becomes less sensitive to pleasure, making everyday life feel dull and empty without alcohol. Over time, drinking doesn’t make you happy; it just keeps you from feeling worse. In this way, alcohol steals your natural sense of joy, 
  trapping you in a cycle where you need it just to feel normal.
  `; **/
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

