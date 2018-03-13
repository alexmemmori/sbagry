// Кнопка "Показать меню"

$('.edit-menu .menu-icon').on('click', function(event) {
  event.preventDefault();
  $(this).parent().toggleClass('show');
})

// Кнопки действий меню

$('.edit-menu > div:not(.menu-icon)').on('click', function(event) {
  event.preventDefault();
  $(this).toggleClass('active');
})