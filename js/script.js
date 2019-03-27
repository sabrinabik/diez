$(document).ready(function() {

  $("#burger").click(function(){
    $(this).hide();
    $("#burger-close").show();
    $('.menu__list').slideToggle( "slow");
  });

   $("#burger-close").click(function(){
    $(this).hide();
    $("#burger").show();
    $('.menu__list').slideToggle( "slow");
  });

  var slickIsActive = false;

  checkSlider();

  $(window).on("resize", function(){
    checkSlider();
  });

  function checkSlider(){

    if( $(window).width() < 1280 ) {
      if( slickIsActive === false ) {
        $("#slider").slick();
        slickIsActive = true;
      } 
    }
    else {
      if( slickIsActive === true ) {
        $("#slider").slick("unslick");
        slickIsActive = false;
      }
    }

  }
});