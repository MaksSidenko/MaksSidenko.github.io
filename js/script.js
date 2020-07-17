$(document).ready(function(){
  $('.slider__inner').slick({
  	nextArrow: '<button type="button" class="slick-next"></button>',
	prevArrow: '<button type="button" class="slick-prev"></button>',
	dots: true,
	arrows: true,
	infinite: true,
  	slidesToShow: 1,
  	autoplaySpeed: 4000,
  	initialSlide: 0
  });
});

