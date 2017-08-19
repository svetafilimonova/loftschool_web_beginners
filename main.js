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

$(document).ready(function(){

 $('.team__block-title').on('click', function(e) {
    e.preventDefault()
    var elem = $(e.target),
    item = elem.closest ('.team__block-item'),
    content = item.find('.team__description'),
    otherItems = item.siblings(),
    other = otherItems.find('.team__description'),
    // contHeight = item.find('.team__description-content').outerHeight();
    contHeight = item.find('.team__description-avatar').outerHeight();
    contHeight += item.find('.team__description-text').outerHeight();
    contHeight += item.find('.team__description-info').outerHeight();

  console.log(contHeight);
  
    if(!item.hasClass('active')){

    otherItems.removeClass('active');
    item.addClass('active');


         other.css({
        'height': 0
    });

       content.css({
        'height': contHeight

    })
    //  other.slideUp(200);
    // content.slideDown(200);

    
  
    } else {
        item.removeClass('active')
        //    content.slideUp(200);
        content.css({
        'height': 0
    })

    }

 });
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
    linkWidth = item.find('.menu__item-link').width();
    linkAmount = $('.menu__list').find('.menu__item-link').length;
    allLinkWidth = linkWidth * linkAmount;
    contentWidth = $(window).width() - allLinkWidth;
    console.log(contentWidth);

    if(!item.hasClass('active')) {

    otherItems.removeClass('active')    
    item.addClass('active')

     content.css({
        "width" : contentWidth

    })

    other.css({
        "width" : 0
    })

   
    } else {
        item.removeClass('active')
           content.css({
        "width" : 0
    })
    }//else


    })//onclicker
});//f()

// });

