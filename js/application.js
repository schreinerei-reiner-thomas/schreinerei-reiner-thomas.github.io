$(document).ready(function() {

  // Navbar burger
  $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  });

  $(".modal-background").click(function() {
    $(".modal").removeClass("is-active");
  });

  $(".modal-close").click(function() {
    $(".modal").removeClass("is-active");
  });

  $(".modal-card-head .delete").click(function() {
    $(".modal").removeClass("is-active");
  });

  $(".show-imprint").click(function() {
    $("#modal-imprint").addClass("is-active");
  });

  $(".show-privacy").click(function() {
    $("#modal-privacy").addClass("is-active");
  });

  // Smooth scrolling to anchor links
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 52
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
  });

  // Highlighting of currently active section
  $(window).on("scroll", function() {
    $("section.section").each(function() {
      if($(window).scrollTop() >= $(this).offset().top - 52) {
        var id = $(this).attr("id");
        console.log("Scrolled past " + id);
        $(".navbar-end a").removeClass("is-active");
        $(".navbar-end a[href='#"+ id +"']").addClass("is-active");
      }
    });
  });

  // Remove paralax scrolling for iOS
  var deviceAgent = navigator.userAgent.toLowerCase();

  if (deviceAgent.match(/(iphone|ipod|ipad)/)) {
    $('#landing-page').addClass('ios-attachment-fix');
  }

});
