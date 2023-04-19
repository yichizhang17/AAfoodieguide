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

let filename = path.split('/').pop();

let links = document.getElementsByClassName('navlink');

for (let i = 0; i < links.length; i++) {
  if (links[i].href.endsWith(filename)) {
    links[i].classList.add('clicked');
    break; 
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

let navbar = document.getElementById("menunav");

let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}







