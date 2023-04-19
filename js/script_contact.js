
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