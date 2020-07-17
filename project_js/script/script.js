//scroll
var toTop = document.querySelector('.top2');

toTop.addEventListener('click', function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
});

function Scroll(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        toTop.style.display = "block";
    } 
    else {
        toTop.style.display = "none";
    }
}
window.onscroll = Scroll;


//modal
var bShowmodal = document.querySelector('.noborder');
var modal = document.querySelector('.modal_wrapp');
var bClose = document.querySelector('.close');

bShowmodal.addEventListener('click', function(){
    modal.style.display = "block";
    bClose.style.display = "block"; 
    document.body.style.overflow = "hidden";   
});

bClose.addEventListener('click', function(){
    modal.style.display = "none";
    bClose.style.display = "none";  
    document.body.style.overflow= "unset"; 
});



//slider
$(document).ready(function(){
    $('.slider2').slick({
        autoplay: false,
        autoplaySpeed: 1000,
        dots: true
    });
});