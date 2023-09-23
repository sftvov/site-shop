const miniSlider = new Swiper('.card__mini-slider', {
	direction: 'vertical',
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	grabCursor: true,
	simulateTouch: true,
	speed: 800,
	initialSlide: 1,
	navigation: {
		nextEl: '.mini-slider__next',
		prevEl: '.mini-slider__prev',
	},
});

const mainSlider = new Swiper('.card__main-slider', {
	observer: true,
	observeParents: true,
	grabCursor: true,
	simulateTouch: true,
	speed: 800,
	initialSlide: 1,
	thumbs: {
		swiper: miniSlider,
	},
});
