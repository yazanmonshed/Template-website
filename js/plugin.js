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
});
