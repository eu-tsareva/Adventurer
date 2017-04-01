(function($){
  $(function(){

    $('.button-collapse').sideNav();
    var $carousel = $('.carousel.carousel-slider');
    $carousel.carousel({
      fullWidth: true
    });
    $('#carousel-prev').click(function(e) {
      e.preventDefault();
      $carousel.carousel('prev');
    });
    $('#carousel-next').click(function(e) {
      e.preventDefault();
      $carousel.carousel('next');
    });
    $('.collapsible').collapsible('open', 0);

  }); // end of document ready
})(jQuery); // end of jQuery name space
