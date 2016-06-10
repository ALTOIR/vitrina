$(document).ready(function() {

  // Toggel content

  $('.js__Toggle').click(function(event) {
    $(this).siblings('.section-info__wrapper').toggleClass('js__Height')
    $(this).toggleClass('js__More');
  });

  $('.js__Search').click(function(event) {
    $('.menu__search').toggleClass('js__SearchActive');
  });

  $(".js__tab").click(function() {
    $(".js__tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".js__cont").hide().eq($(this).index()).fadeIn()
  }).eq(0)

  // popup
  $('.close').click(function(event) {
    $('.dashboard__popup-wrapper').removeClass('visible');
    $('.sing-in, .rec-in, .reg-in, .vid-in, .inv-in, .inv-out, .sub-in').removeClass('block');
    $(this).closest('.js__visible').removeClass('js__visible');
    $(this).closest('.visible').removeClass('visible');
  });
  $('.jsPopup').click(function(event) {
    $('.dashboard__popup-wrapper').addClass('visible');
    $('.sing-in').addClass('block');
    return false
  });
  $('.js__vid, .jsInvest, .jsInvout, .jsSub').click(function(event) {
    $('.dashboard__popup-wrapper').addClass('visible');
    return false
  });

  // Navgoco acordion
  // $(".faq__questions").navgoco({accordion: true});

  // Slider 
  $('.section-slider__slides').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true
  });
  // Sandwitch
  $('.menu__sandwitch').click(function(event) {
    $(this).toggleClass('active');
    $('.wrapper').toggleClass('m-active');
  });

});

