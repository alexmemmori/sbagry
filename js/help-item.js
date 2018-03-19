// Кнопки "Помог ли Вам ответ?"

$('.help-main-container .question .btn').on('click', function(event) {
  event.preventDefault();
  $(this).parent().find('.active').removeClass('active');
  $(this).toggleClass('active');
})