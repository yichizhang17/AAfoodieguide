
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