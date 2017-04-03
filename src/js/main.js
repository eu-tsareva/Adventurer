//= ../../bower_components/jquery/dist/jquery.js
//= ./partials/svg.js

//= ./partials/jquery.easing.1.3.js
//= ./partials/hammer.min.js
//= ./partials/jquery.hammer.js
//= ./partials/initial.js
//= ./partials/global.js
//= ./partials/carousel.js
//= ./partials/sideNav.js
//= ./partials/collapsible.js

(function($){
  $(function(){

    $('.button-collapse').sideNav();

    var $carousel = $('.banner');
    $carousel.carousel({
      fullWidth: true
    });
    $('.banner-control-prev').click(function(e) {
      e.preventDefault();
      $carousel.carousel('prev');
    });
    $('.banner-control-next').click(function(e) {
      e.preventDefault();
      $carousel.carousel('next');
    });

    $('.collapsible').collapsible('open', 0);

  }); // end of document ready
})(jQuery); // end of jQuery name space
