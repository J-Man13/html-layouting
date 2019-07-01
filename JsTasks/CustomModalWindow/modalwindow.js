
let modalWindow = document.getElementById('modal-window');
let modalButton = document.getElementById("modal-shower");

modalButton.addEventListener("click",function(){
    document.body.style.backgroundColor = "grey";
    modalWindow.style.visibility = 'visible';
    modalWindow.style.backgroundColor = 'white';
},false);

window.addEventListener("click",function(e){
    if(modalWindow.contains(e.target) || modalButton.contains(e.target)){
        return;
    }
    modalWindow.style.visibility = 'hidden';
    document.body.style.backgroundColor = "white";
});