// Слайдер в карточке товара

$('.product-card-container-slider .big-photos').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  infinite: false,
  asNavFor: '.product-card-container-slider .small-photos'
});

$('.product-card-container-slider .small-photos').slick({
  slidesToShow: 4,
  infinite: false,
  slidesToScroll: 1,
  asNavFor: '.product-card-container-slider .big-photos',
  centerMode: false,
  focusOnSelect: true,
  vertical: true,
  verticalSwiping: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});