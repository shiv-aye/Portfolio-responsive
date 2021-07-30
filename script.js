// Animation for About me
var i = 0;
var txt = 'Developer.';
var speed = 200;
typeWriter();
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing-effect").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}