const miniSlider = new Swiper('.card__mini-slider', {
	enabled: false,
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
	breakpoints: {
		[md4]: {
			enabled: true,
		},
	},
	a11y: {
		enabled: false,
	},
});

const mainSlider = new Swiper('.card__main-slider', {
	observer: true,
	observeParents: true,
	grabCursor: true,
	simulateTouch: true,
	speed: 800,
	initialSlide: 1,
	spaceBetween: 5,
	thumbs: {
		swiper: miniSlider,
	},
	keyboard: {
		enabled: true,
	},
});

activator('.card__change-button--color', {
	deactivate: false,
	onlyOne: true,
});
activator('.card__change-button--size', {
	deactivate: false,
	onlyOne: true,
});
activator('.card__advantage', {
	removed: ['.goods__card', '.description__table'],
	removing: ['.card__subtitle'],
});

@@include('../../../../src/js-elements/tabs.js');
