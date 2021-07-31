// Animation for About me
var m = 0;
var txt = 'Developer.';
var speed = 200;
typeWriter();
function typeWriter() {
  if (m < txt.length) {
    document.getElementById("typing-effect").innerHTML += txt.charAt(m);
    m++;
    setTimeout(typeWriter, speed);
  }
}
//navbar active
button = document.querySelector(".menu-button");
navList = document.querySelector(".navlist");
navBar = document.querySelector(".navbar");
let i=0;
function one(){
  console.log("clicked");
  navList.classList.toggle("active");
  navBar.classList.toggle("active");
}
// change the button to cross
button.addEventListener("click", () => {
  one();
});
// hide navbar on click of nav-items
document.querySelectorAll('.hide-button').forEach(item => {
  item.addEventListener('click', call => {
    one();
  })
})
//hide navbar on scroll
var prev = window.pageYOffset;
window.onscroll = function() {
var current = window.pageYOffset;
  if (prev > current) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-7vh";
  }
  prev = current;
}
