new WOW().init();

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

function setColor(e){
     
  if(e.type==="mouseover" || e.type==="onclick")
    e.target.style.color = "white";
  else if(e.type==="mouseout")
    e.target.style.color = "#1d1d1d";
}

var blueRects = document.querySelectorAll(".block");
var a = document.querySelectorAll(".a");
for (let index = 0; index < blueRects.length; index++) {
  const react = a[index];
  react.addEventListener("mouseover", setColor);
  react.addEventListener("onclick", setColor);
  react.addEventListener("mouseout", setColor);
}

