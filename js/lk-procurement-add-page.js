$('.lk-procurement-add-area .categories-list li').on('click', function(event) {
  event.preventDefault();
  $(this).parent().find('li.active').removeClass('active');
  $(this).toggleClass('active');
})