// Маска ввода телефона

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
});

function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires*1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) { 
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for(var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];    
    if (propValue !== true) { 
      updatedCookie += "=" + propValue;
     }
  }

  document.cookie = updatedCookie;
};

// возвращает cookie с именем name, если есть, если нет, то undefined
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

// Кнопка "Закрыть" на нижней панели "Смотреть презентацию"
  if(Cookies.get('close-view') == "true") {
    $('.view-modal-container').addClass('hidden');
  }

$('.close-view-modal-btn').on('click', function(event) {
  event.preventDefault();
  $(this).parent().addClass('hidden');
  Cookies.set('close-view', "true", { expires: 7, path: '/' });
});