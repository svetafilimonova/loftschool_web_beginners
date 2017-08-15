$(document).ready(function(){
 
    $('.ham-button').on('click', function(e){
    e.preventDefault()
        $('.hamburger-menu').fadeIn(2000);   

})

    $('.hamburger-menu__close').on('click', function(e){
    e.preventDefault()
        $('.hamburger-menu').fadeOut(2000);  

})

})