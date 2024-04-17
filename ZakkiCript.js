
function toggleMenu() {
    var menuWrap = document.querySelector('.menu-wrap');
    var hamburger = document.querySelector('.c-hamburger');
    hamburger.classList.toggle('is-active');
    menuWrap.classList.toggle('show-menu');
};


// GALLERY
 $('#gallery').mixItUp({});

 function mixClear() {
   setTimeout(function() {
     $('#gallery').removeClass('waypoint');
   }, 2000);
 }


 // SCROLL ANIMATIONS
function onScrollInit(items, elemTrigger) {
    var offset = $(window).height() / 1.6;
    items.each(function() {
      var elem = $(this),
        animationClass = elem.attr('data-animation'),
        animationDelay = elem.attr('data-delay');

      elem.css({
        '-webkit-animation-delay': animationDelay,
        '-moz-animation-delay': animationDelay,
        'animation-delay': animationDelay
      });

      var trigger = elemTrigger ? trigger : elem;

      trigger.waypoint(
        function() {
          elem.addClass('animated').addClass(animationClass);
          if (elem.get(0).id === 'gallery') mixClear(); //OPTIONAL
        },
        {
          triggerOnce: true,
          offset: offset
        }
      );
    });
  }

  setTimeout(function() {
    onScrollInit($('.waypoint'));
  }, 10);
