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

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

$('[data-modal=bannerpopup]').on('click', function () {
  $('.overlay, #bannerpopup').fadeIn('slow');
});
$('.modal__close').on('click', function () {
  $('.overlay, #bannerpopup').fadeOut('slow');
});


//carousel
/* $(document).ready(function () {
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
}); */