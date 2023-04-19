document.querySelector(".icon").addEventListener("click",function(){
  let x = document.getElementById("menunav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
});

document.querySelector(".navlink").addEventListener("open",function(){
  
  console.log("clicked link");
  this.classList.add('clicked');
  
})

let path = window.location.pathname;

// Get the filename from the URL path
let filename = path.split('/').pop();

// Get all the link elements with class 'navlink'
let links = document.getElementsByClassName('navlink');

// Loop through the link elements and add 'underline' class to the matching link
for (var i = 0; i < links.length; i++) {
  if (links[i].href.endsWith(filename)) {
    links[i].classList.add('clicked');
    break; // Only underline the first matching link
  }
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("aa-slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("menunav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}







