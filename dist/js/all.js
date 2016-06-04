$(document).ready(function() {

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
  $(".faq__questions").navgoco({accordion: true});
  // Show google map 

  $('.partners').slick({
  infinite: true,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  autoplay: true,
  slidesToShow: 15,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 15,
        slidesToScroll: 15,
        infinite: true
      }
    },
    {
      breakpoint: 1564,
      settings: {
        slidesToShow: 13,
        slidesToScroll: 13
      }
    },
    {
      breakpoint: 1410,
      settings: {
        slidesToShow: 11,
        slidesToScroll: 11
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

});

