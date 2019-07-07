 
let sliderInvokerSpan = document.getElementById("sliderInvoker");
sliderInvokerSpan.addEventListener('click', function () {
    if (document.getElementById("lefSliderNav").style.width == '500px')
        document.getElementById("lefSliderNav").style.width = '0px';
    else if (document.getElementById("lefSliderNav").style.width == '0px')
        document.getElementById("lefSliderNav").style.width = '500px';
}, false);


let dotSpan = document.getElementsByClassName("dot")[0];
dotSpan.addEventListener('click', function () {
    if(document.getElementById("lefSliderNav").style.width != '500px')
        return;
        
    let cardTitle = document.getElementById("inputTitleInput").value.trim();
    let cardImgUrl = document.getElementById("inputImageUrlInput").value.trim();
    let cardParagraphText = document.getElementById("inputContentInput").value.trim(); 

    if(cardTitle == '' ||
       cardImgUrl == '' ||
       cardParagraphText == '')
       return;

    let divCard = document.createElement('div');
    divCard.className = 'card';
    divCard.innerHTML =
        '<div class="card"/>\
            <h1>'+cardTitle+'</h1>\
            <div class="card-data-wrapper">\
                <img src="'+cardImgUrl+'">\
                <p>'+cardParagraphText+'</p>\
            </div>\
        </div>';                        
    document.getElementsByClassName("container")[0].appendChild(divCard);
    
}, false);