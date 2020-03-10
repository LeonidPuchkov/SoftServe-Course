//modal
$('[data-modal=consultation]').on('click', function () {
  $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function () {
  $('.overlay, #consultation').fadeOut('slow');
});

//arrow_up
$(window).scroll(function () {
  if ($(this).scrollTop() > 1400) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
});

$("a[href^='#']").click(function () {
  const _href = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(_href).offset().top + "px"
  });
  return false;
});

//carousel
$(document).ready(function () {
  $('.carousel__inner').slick({
    infinite: true,
    speed: 1200,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/prevArrow.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/nextArrow.svg"></button>',
    responsive: [{
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});