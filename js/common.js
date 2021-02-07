// Плавный скроллинг при нажатии меню
jQuery(function($){
	// Функция которая делает плавный скроллинг к элементу с id или class указанным в атрибуте href ссылки
	$('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
		var scroll_el = "#" + $(this).attr('href'); // возьмем содержимое атрибута href. В первых скобках указываем или решетку (#) или точку (.), это необходимо для того чтобы указать как искать элемент для перехода, по id или class.
		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top - 20 }, 500); // анимируем скроллинг к элементу scroll_el
		}
		return false; // выключаем стандартное действие
	});
});

// Плавный скроллинг в начало страницы
jQuery(function($){
	$('.go_to_top').click( function(){ // ловим клик по ссылке с классом go_to_top
		$('html, body').animate({ scrollTop: 0 }, 500); // анимируем скроолинг к верху страницы
		return false; // выключаем стандартное действие
	});
});

// Настройка слайдера
$('.slider-web-threats').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	prevArrow: '<i class="fa fa-angle-left arrow-left" aria-hidden="true"></i>',
	nextArrow: '<i class="fa fa-angle-right arrow-right" aria-hidden="true"></i>',
	responsive: [{
		breakpoint: 1024,
		settings: {
			slidesToShow: 2
		}
	},{
		breakpoint: 800,
		settings: {
			slidesToShow: 1
		}
	},{
		breakpoint: 480,
		settings: {
			slidesToShow: 1
		}
	}]
});


// Настройка модального окна
// Элемент модального окна
var modal = document.getElementById('myModal');
// Элемент для открытия окна
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
// Элемент для закрытия окна
var span = document.getElementsByClassName("close")[0];
// Когда пользователь нажимает кнопку, то необходимо открыть модальное окно
btn1.onclick = btn2.onclick = btn3.onclick = function() {
	modal.style.display = "block";
}
// Когда пользователь нажимает кнопку <span> (x), то закрыть модальное окно
span.onclick = function() {
	// modal.style.display = "none";
	modal.style.display = "none";
}
// Когда пользователь нажимает кнопку вне модального окна, то закрыть его
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

// Функция которая делает плавный скроллинг к началу страницы
jQuery(function($){
	$('#go_to_top').click( function(){ // ловим клик по ссылке с id - go_to_top
		$('html, body').animate({ scrollTop: 0 }, 500); // анимируем скроолинг к верху страницы
		return false; // выключаем стандартное действие
	});
});


// Появление кнопки вверх при скроллинге
$(window).scroll(function(){
	if ($(this).scrollTop() > 300) {
		$('#go_to_top').addClass("go_to_top_visible");
	} else {
		$('#go_to_top').removeClass("go_to_top_visible");
	}
});

// Инициализация wow.js
new WOW().init();

// Настройка мобильного меню
function openNav() {
	document.getElementById("mobyle-menu").style.width = "100%";
}
function closeNav() {
	document.getElementById("mobyle-menu").style.width = "0%";
}
$('#mobyle-menu a').bind('click', function(){
	closeNav();
});