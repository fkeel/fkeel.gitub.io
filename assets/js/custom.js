"use strict";

$(document).ready(function() {
  // executes when HTML-Document is loaded and DOM is ready

  /*
  ################
  Add navbar background color when scrolled
  */
  $(window).scroll(function() {
    if ($(window).scrollTop() > 70) {

    } else {

    }
  });

  // If Mobile, add background color when toggler is clicked
  $(".navbar-toggler").click(function() {
    if (!$(".navbar-collapse").hasClass("show")) {

    } else {
      if ($(window).scrollTop() < 70) {

      } else {

      }
    }
  });
  // ############

  // document ready
});