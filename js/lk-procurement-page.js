// Кнопка "Показать меню"

$('.edit-menu .menu-icon').on('click', function(event) {
  event.preventDefault();
  $(this).parent().toggleClass('show');
})