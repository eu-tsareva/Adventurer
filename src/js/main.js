//= ../../bower_components/jquery/dist/jquery.js
//= ./partials/jquery.easing.1.3.js
//= ./partials/hammer.min.js
//= ./partials/jquery.hammer.js
//= ./partials/initial.js
//= ./partials/global.js
//= ./partials/carousel.js
//= ./partials/sideNav.js

(function($){
  $(function(){

    $('.button-collapse').sideNav();

    var $carousel = $('#banner');
    $carousel.carousel({
      fullWidth: true
    });
    $('#banner-prev').click(function(e) {
      e.preventDefault();
      $carousel.carousel('prev');
    });
    $('#banner-next').click(function(e) {
      e.preventDefault();
      $carousel.carousel('next');
    });

    // $('.collapsible').collapsible('open', 0);

  }); // end of document ready
})(jQuery); // end of jQuery name space
