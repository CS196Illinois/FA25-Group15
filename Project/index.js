const button = document.getElementById("smbutton");
const button2 = document.getElementById("abutton");
const button3 = document.getElementById("dsbutton");
const img = document.getElementById("images");


button.addEventListener("click", function() {
  img.src = 'images/5286d567c2870e1f6fdb5048c43f7fd0.png';
  
});

button2.addEventListener("click", function() {
  img.src = 'images/batman.jpg';
});

button3.addEventListener("click", function() {
  img.src = 'images/frnd0632.png'
});