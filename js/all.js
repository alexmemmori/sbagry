// Плавная прокрутка до якоря
var scroll = new SmoothScroll();

var smoothScrollWithoutHash = function (selector, settings) {
  var clickHandler = function (event) {
    var toggle = event.target.closest( selector );
    if ( !toggle || toggle.tagName.toLowerCase() !== 'a' ) return;
    var anchor = document.querySelector( toggle.hash );
    if ( !anchor ) return;
    // event.preventDefault(); // Prevent default click event
    scroll.animateScroll( anchor, toggle, settings || {} );
  };

  window.addEventListener('click', clickHandler, false );
};

smoothScrollWithoutHash('a[data-scroll]');

// Маска номера

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

// Нажатие на категорию

$('.categories-section .item').on('click', function(event) {
  event.preventDefault();
  $('.categories-section .active').removeClass('active');
  $(this).toggleClass('active');
  // В этот DIV выводим аяксом подкатегории с сервера
  $('.sub-categories-section.active').removeClass('show'); // Если окно с подкатегориями уже выведено на страницу, то удаляем его
  $('.sub-categories-section').addClass('show');
  // очищаем активные пункты в меню подкатегорий, если они есть
  $('.sub-categories-ul-1 .active').removeClass('active');
  $('.sub-categories-ul-1 li .show').removeClass('show');
  // Костыль для дизайнера для работы с position: absolute
  $(".sub-categories-ul-1").css("min-height", "inherit");
})

// Подкатегории

$('.sub-categories-ul-1 > li').on('click', function(event) {
  event.preventDefault();
  $('.sub-categories-ul-1 > .active').removeClass('active');
  $(this).toggleClass('active');
  $('.sub-categories-ul-1 > li .show').removeClass('show');
  $('.sub-categories-ul-1 > .active ul').toggleClass('show');
  // Костыль для дизайнера для работы с position: absolute
  $(".sub-categories-ul-1").css("min-height", $(".sub-categories-ul-2.show").height()+"px");
})

$('.sub-categories-ul-2 > li').on('click', function(event) {
  event.preventDefault();
  $('.sub-categories-ul-2 > .active').removeClass('active');
  $(this).addClass('active');
})


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

// Слайдер в карточке товара

$('.product-card-container-slider .big-photos').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product-card-container-slider .small-photos'
});

$('.product-card-container-slider .small-photos').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.product-card-container-slider .big-photos',
  centerMode: true,
  focusOnSelect: true,
  vertical: true,
  verticalSwiping: true
});