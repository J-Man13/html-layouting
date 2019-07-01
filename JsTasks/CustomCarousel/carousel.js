let backgroundImages = ["/slider-bg-1.png", "/slider-bg-2.jpg", "/slider-bg-3.png"];
let backgroundImagesIterator = 0;

document.getElementById("carousel").style.backgroundImage = 'url('+backgroundImages[backgroundImagesIterator]+''+')';;


let buttonLeft = document.getElementById("upper-bg-left");
buttonLeft.addEventListener("click",function(e){
    if(backgroundImagesIterator == 0)
        backgroundImagesIterator = backgroundImages.length;
    fadeIn(document.getElementById("carousel"),1000);    
    document.getElementById("carousel").style.backgroundImage = 'url('+backgroundImages[--backgroundImagesIterator]+''+')';
},false);

let buttonRight = document.getElementById("upper-bg-right");
buttonRight.addEventListener("click",function(e){
    if(backgroundImagesIterator == backgroundImages.length-1)
        backgroundImagesIterator = -1;
    fadeIn(document.getElementById("carousel"),1000);    
    document.getElementById("carousel").style.backgroundImage = 'url('+backgroundImages[++backgroundImagesIterator]+''+')';
},false);


function fadeIn(el, time) {
    el.style.opacity = 0;
    var last = +new Date();
    var tick = function() {
      el.style.opacity = +el.style.opacity + (new Date() - last) / time;
      last = +new Date();
  
      if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
    tick();
}    