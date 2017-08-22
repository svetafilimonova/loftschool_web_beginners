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




// Всплывашка в отзывах

$(function() {

$('.feedback__link-popup').fancybox();

});


// Слайдер 

$(document).ready(function(){

   var slider = $('.bxslider').bxSlider({
        pager: false

    });

    $('.price__navigation-next').on('click', function(e){
        e.preventDefault();

        slider.goToNextSlide();
    });

    $('.price__navigation-prev').on('click', function(e){
        e.preventDefault();

        slider.goToPrevSlide();
    });

  });


//   One-page scroll

$(function(){

    var sections = $('.section'),
    container = $('.maincontent'),
    isScroll = false;

    var md = new MobileDetect(window.navigator.userAgent),
    isMobile = md.mobile();
    var screenWidth = $(window).width();
    // console.log(screenWidth);

    var performScroll = function (sectionEq) {

        if(!isScroll){
            isScroll = true;
            var position = (sectionEq * -100) + '%';
            container.css({
                'transform':'translateY(' + position + ')',
                '-webkit-transform':'translateY((' + position + ')'
            })
    
            sections.eq(sectionEq).addClass('active')
            .siblings().removeClass('active');


            setTimeout(function(){
                isScroll = false; 
                $('.navigation__list-item').eq(sectionEq).addClass('active')
                .siblings().removeClass('active');

            }, 500);
        }

    }    

        var findSection = function(sections) {

            var activeSections = sections.filter('.active');
            return {
                activeSections : activeSections,
                nextSection    : activeSections.next(),
                prevSection    : activeSections.prev()
            }
        }

    
        if(!isMobile || screenWidth >=768) {
    $('.wrapper').on('wheel', function(e){

        var scroll = e.originalEvent.deltaY;
        var section = findSection(sections);

        if(scroll > 0 && section.nextSection.length){ //сколлим вниз 
            console.log("вниз");

            performScroll(section.nextSection.index());
        }

        if(scroll < 0 && section.prevSection.length){  //сколлим вверх
            console.log("вверх");

            performScroll(section.prevSection.index());

        }
    });

}

    $(document).on('keydown', function (e) {


        var section = findSection(sections);

        switch (e.keyCode) {
            case 40: //стрелка вниз
                if(section.nextSection.length) {
                performScroll(section.nextSection.index());
            }
             break;
            case 38: // стелка вверх
            if(section.prevSection.length) {
                performScroll(section.prevSection.index());
            }
            break;  
        }

    });

    $('[data-go-to]').on('click', function(e){
        e.preventDefault();

        var elem = $(e.target);

        performScroll(elem.attr('data-go-to'));

    });

    // $(window).swipe({
    //     //Generic swipe handler for all directions
    //     swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
    //     //   alert("You swiped " + direction );  
    //     }
    //   });

});


// Отправка формы




var submitForm = function (e) {
    e.preventDefault();

    console.log('I am from submit');

    var form = $(e.target);

    var request = ajaxForm(form);


    request.done(function(msg){
        alert(msg);
        var mes = msg.mes,
            status = msg.status;
        if (status === 'OK') {
            form.append('<p>' + mes + '</p>');
        } else{
            form.append('<p>' + mes + '</p>');
        }

    });

    request.fail(function(jqXHR, textStatus){
        alert("error" + textStatus);

    });
}

var ajaxForm = function (form) {

    var  url = form.attr('action'),
         data = form.serialize();

    return $.ajax({
        type:'POST',
        url : url,
        data: data,
        dataType : 'JSON'

    });

}

$('#order-form').on('submit', submitForm);