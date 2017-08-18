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


// *****Яндекс карта*****

    ymaps.ready(init);
    var myMap;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [59.91817154482064,30.30557799999997],
            zoom: 11,
            controls: []
        });
     myMap.behaviors.disable('scrollZoom');

        //  var myPlacemark = new ymaps.Placemark([59.91817154482064,30.30557799999997],
        //     {}, {
        // iconLayout: 'default#image',
        // iconImageHref: 'img/icons/map-marker.svg',
        // iconImageSize: [46, 57],
        // iconImageOffset: [-26, -57]
        //     });

        // myMap.geoObjects.add(myPlacemark);



        	
var coords = [
    [59.879269981030134,30.448023499999973], 
    [59.96424153122341,30.35280250000002], 
    [59.9295426647133,30.344236499999965],
    [59.91817154482064,30.30557799999997]

],
    myCollection = new ymaps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/map-marker.svg',
        iconImageSize: [46, 57],
        iconImageOffset: [-60, -50],
        draggable: false // и их можно перемещать
    });

for (var i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
}

myMap.geoObjects.add(myCollection);

    }

// Аккордеон секции команда

$(function() {

 $('.team__block-title').on('click' , function(e) {
    e.preventDefault()
    var elem = $(e.target),
    item = elem.closest ('.team__block-item'),
    content = item.find('.team__description'),
    otherItems = item.siblings(),
    other = item.siblings().find('.team__description');
    contheight = item.find('.team__description-text').innerHeight();
    // console.log(contheight);


    if(!item.hasClass('active')){

    otherItems.removeClass('active') 
     other.slideUp(300);

    item.addClass('active')

    content.slideDown(300);
  
    } else {
        item.removeClass('active')
           content.slideUp(300);
    }

 });


//  Аккордеон секции меню


$(function() {

 $('.menu__item-link').on('click' , function(e) {
    e.preventDefault()
    var elem = $(e.target),
    item = elem.closest ('.menu__item'),
    content = item.find('.menu__item-description'),
    otherItems = item.siblings(),
    other = item.siblings().find('.menu__item-description');
    contentWidth = item.find('.menu__item-content').outerWidth();
    

    if(!item.hasClass('active')) {

    otherItems.removeClass('active')    
    item.addClass('active')

     content.css({
        "width" : "80vh"

    })

    other.css({
        "width" : 0
    })

   
    } else {
        item.removeClass('active')
           content.css({
        "width" : 0
    })
    }


    })
});

});

