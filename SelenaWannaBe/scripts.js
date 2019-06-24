let backgroundImagesIterator = 0;
let backgroundImages = ["/slider-bg-1.jpg", "/slider-bg-2.jpg", "/slider-bg-3.jpg"];
let images = ["/slider-item-1.png", "/slider-item-2.png"];

let interval = setInterval(function(){backgroundImagesIterator++;changeImage();},5000);

function changeImage(){
    if(backgroundImagesIterator < 0)
        backgroundImagesIterator = backgroundImages.length-1; 

    if(backgroundImagesIterator > backgroundImages.length -1)
        backgroundImagesIterator = 0;
        
    elementsKeyFramesTrigger();
    document.getElementById("upper-bg").style.backgroundImage = 'url('+backgroundImages[backgroundImagesIterator]+''+')';    
    if(backgroundImagesIterator < 2)
        document.getElementById("container1-right-pic-img").src = images[backgroundImagesIterator];        
    fadeIn(document.getElementById("upper-bg"),1000);

}


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
  

let buttonLeft = document.getElementById("upper-bg-left");
buttonLeft.addEventListener("click",function(e){
    backgroundImagesIterator--;
    clearInterval(interval);
    interval = setInterval(function(){backgroundImagesIterator--;changeImage();},5000);    
    elementsKeyFramesTrigger();
    changeImage();
    fadeIn(document.getElementById("upper-bg"),1000);
},false);

let buttonRight = document.getElementById("upper-bg-right");
buttonRight.addEventListener("click",function(e){
    backgroundImagesIterator++;
    clearInterval(interval);
    interval = setInterval(function(){backgroundImagesIterator++;changeImage();},5000);    
    elementsKeyFramesTrigger();
    changeImage();
    fadeIn(document.getElementById("upper-bg"),1000);
},false);

function elementsKeyFramesTrigger(){
    removeElement("container1-left-desc-data-h1");
    addElement("container1-left-desc-data","h1","container1-left-desc-data-h1","MULTIPURPOSE THEME")
    removeElement("container1-left-desc-data-h2");
    addElement("container1-left-desc-data","h2","container1-left-desc-data-h2","CRAS JUSTO ODIO, DAPIBUS AC FACILISIS")

    removeElement("container1-left-desc-data-div");
    let buttonsHTML = "<button id="+"container1-left-desc-data-button1"+" type="+"submit"+">READ MORE</button>"+
    "<button id="+"container1-left-desc-data-button2" +" type=submit>➡</button>";
    addElement("container1-left-desc-data","div","container1-left-desc-data-div",buttonsHTML);

    removeElement("container1-right-pic-img");
    addElement("container1-right-pic","img","container1-right-pic-img")    
}

function addElement(parentId, elementTag, elementId, html) {
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}

function removeElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}