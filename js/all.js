jQuery(function($) {
  $('input[type="tel"]').mask('+7 999-999-99-99');
});

// Нажатие на сердечко

$(".like").on('click', function(event) {
  event.preventDefault();
  $(this).toggleClass('active');
});

// Слайдер категорий

$('.categories-section .container').slick({
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});

// Панель логина

$('.user-login-panel .photo').on('click', function(event) {
  event.preventDefault();
  $('.user-login-panel').toggleClass('show');
})