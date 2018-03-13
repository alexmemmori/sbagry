// Кнопка "Показать меню"

$('.lk-chat-item .header-chat .menu .menu-icon').on('click', function(event) {
  event.preventDefault();
  $('.lk-chat-item .header-chat .menu').toggleClass('show');
})

// Кнопки действий меню

$('.lk-chat-item .header-chat .menu > div:not(.menu-icon)').on('click', function(event) {
  event.preventDefault();
  $(this).toggleClass('active');
})