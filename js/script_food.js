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

/*------------------food-------------------*/

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}


function addClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}


function removeClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


let btnContainer = document.getElementById("foodbtn");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
   let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}