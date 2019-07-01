let accordionButtons = document.getElementsByClassName("accordion-element-button");
for (let i = 0; i < accordionButtons.length; i++) {
    accordionButtons[i].addEventListener('click', function(){
        if(accordionButtons[i].nextElementSibling.style.display != 'none')
            accordionButtons[i].nextElementSibling.style.display = 'none';
        else if(accordionButtons[i].nextElementSibling.style.display == 'none')
            accordionButtons[i].nextElementSibling.style.display = 'block';
    }, false);
}