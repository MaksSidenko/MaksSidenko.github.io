// выбираем наш документ "$(document)". Метод ready отслеживает окончание загрузки странцы и когда страница загрузилась будет выполняться то, что находится в фигурных скобках
$(".reset").click(function() {
    $(this).closest('form').find("input[type=text], textarea").val("");
});

$(".burger").on("click", function(burger_trans){
	burger_trans.preventDefault;
	$(this).toggleClass("burger-active");
})

$('.burger').on('click', function(e) {
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
});

$('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
});
$('.burger').on('click', function(e) {
  e.preventDefault();
  $('.mobile-menu').toggleClass('mobile-menu-open');
});