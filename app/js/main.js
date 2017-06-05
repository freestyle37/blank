$(document).ready(function() {

  $(".fa-chevron-down").on('click',function() {
    $(".header-main .header-inner .about-us > div").show();
    $(".kt").hide();
    $(".header-main .header-center .header-inner .phone-main").css("align-items", "center");
    $(".header-main .header-center .header-inner .phone-main .phone-main-number").css("margin-top", "0");
    $(".fa-chevron-up").on('click',function() {
      $(".header-main .header-inner .about-us > div").hide();
      $(".kt").show();
    });
  }); 






}); 