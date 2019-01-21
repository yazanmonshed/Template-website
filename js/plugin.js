/*global, alert, console*/
$(function(){
  'use strict';

    $('header').height($(window).height());

    $(window).resize(function(){

      $('header').height($(window).height());

    })
    $('header .arrow i').click(function(){
      $('html, body').animate({

        scrollTop: $('.featuers').offset().top

      }, 1000);

    });
    $('btn').click( function() {

        $('.hidden').fadeIn();

    });

    // var ArrowLeft  =  $('.arrow-left .fa-angle-left ');
    //
    // var ArrowRight =  $('.arrow-right .fa-angle-right');
    //
    // function CheckArrow() {
    //
    //   if ($('.client:first')).hasClass('active') {
    //
    //        ArrowLeft.fadeOut();
    //   } else {
    //
    //       ArrowLeft.fadeIn();
    //   }
    // }
    // CheckArrow();
});
