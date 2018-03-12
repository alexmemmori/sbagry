// Кнопка "Показать номер"

$('.sidebar-seller .display-phones-btn').on('click', function(event) {
  event.preventDefault();
  $(this).addClass('hidden');
  $('.sidebar-seller .phones-seller').addClass('show');
})