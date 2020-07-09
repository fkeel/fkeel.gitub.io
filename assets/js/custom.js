"use strict";

$(document).ready(function() {
  // executes when HTML-Document is loaded and DOM is ready

  /*
  ################
  Add navbar background color when scrolled
  */
  $(window).scroll(function() {
    if ($(window).scrollTop() > 70) {
      // $(".navbar").removeClass("navbar-transparent");
      // $(".navbar").addClass("bg-light");
      // $(".navbar").addClass("navbar-light");
      // $(".navbar").removeClass("bg-dark");
      // $(".navbar").removeClass("navbar-dark");
      // $(".navbar").addClass("navbar-translucent");
    } else {
      // $(".navbar").removeClass("navbar-translucent");
      // $(".navbar").removeClass("bg-dark");
      // $(".navbar").addClass("navbar-transparent");
      // $(".navbar").removeClass("bg-light");
      // $(".navbar").removeClass("navbar-light");
      // $(".navbar").addClass("bg-dark");
      // $(".navbar").addClass("navbar-dark");
    }
  });
  // If Mobile, add background color when toggler is clicked
  $(".navbar-toggler").click(function() {
    if (!$(".navbar-collapse").hasClass("show")) {
      // $(".navbar").addClass("bg-dark");
      // $(".navbar").removeClass("navbar-transparent");
      // $(".navbar").addClass("bg-light");
      // $(".navbar").addClass("navbar-light");
      // $(".navbar").removeClass("bg-dark");
      // $(".navbar").removeClass("navbar-dark");
    } else {
      if ($(window).scrollTop() < 70) {
        // $(".navbar").removeClass("bg-dark");
        // $(".navbar").addClass("navbar-transparent");
        // $(".navbar").removeClass("bg-light");
        // $(".navbar").removeClass("navbar-light");
        // $(".navbar").addClass("bg-dark");
        // $(".navbar").addClass("navbar-dark");
      } else {
      }
    }
  });
  // ############

  // document ready
});