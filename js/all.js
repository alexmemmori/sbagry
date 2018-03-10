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

// Кнопка "Вход" в модальном окне

$('#registrationModal .login-link').on('click', function(event) {
  event.preventDefault();
  $('#registrationModal').modal('hide');
  $('#loginModal').modal('show');
})

// Кнопка "Регистрация" в модальном окне

$('#loginModal .registration-link').on('click', function(event) {
  event.preventDefault();
  $('#loginModal').modal('hide');
  $('#registrationModal').modal('show');
})

// Панель логина

$('.user-login-panel .photo').on('click', function(event) {
  event.preventDefault();
  $('.user-login-panel').toggleClass('show');
})