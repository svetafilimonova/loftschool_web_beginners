$(document).ready(function(){

$('.ham-button').on('click', function(e){
    e.preventDefault();

$('.hamburger-menu').css('display', 'block');
   

})

$('.hamburger-menu__close').on('click', function(e){
    e.preventDefault();

   $('.hamburger-menu').css('display', 'none'); 
     
    
    })


    $('.ham-button').on('click', function(e){
    e.preventDefault()
        $('.hamburger-menu').fadeIn(3000);   

})

    $('.hamburger-menu__close').on('click', function(e){
    e.preventDefault()
        $('.hamburger-menu').fadeOut(3000);  

})

})