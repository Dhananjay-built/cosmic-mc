function changeBg(){
    var navbar = document.getElementById('navbar');
    var ul = document.getElementById('player');

    var scrollValue = window.scrollY;
    if(scrollValue < 150){
        navbar.classList.remove('bgColor');
        ul.classList.remove('player-color');
       


    }else{
        navbar.classList.add('bgColor');
        ul.classList.add('player-color');

        
    }
}
window.addEventListener('scroll', changeBg);


function copyText() {

    /* Copy text into clipboard */
    navigator.clipboard.writeText
        ("mc.cosmic-mc.tk");
    alert("Server Ip got Copied => mc.Cosmic-mc.tk");
}