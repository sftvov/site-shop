const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
const page = document.querySelector('.page');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

const header__logoLink = document.querySelector('.header__logo');
const header__searchWrapper = document.querySelector('.header-search');
const headerSearch__input = document.querySelector('.header-search__input');
const header__iconSearch = document.querySelector('.header__icon--search');
const header__icons = document.querySelectorAll('.header__icon');
const header__lastIcon = header__icons[header__icons.length - 1];

// ----------------------------------------------------------------------

const md1 = getComputedStyle(document.documentElement)
.getPropertyValue('--md1');
const md2 = getComputedStyle(document.documentElement)
.getPropertyValue('--md2');
const md3 = getComputedStyle(document.documentElement)
.getPropertyValue('--md3');
const md4 = getComputedStyle(document.documentElement)
.getPropertyValue('--md4');
const md5 = getComputedStyle(document.documentElement)
.getPropertyValue('--md5');

// ----------------------------------------------------------------------

// include('../../../src/functions/sendmail.js');
// include('../../../src/functions/isMobile.js');
// include('../../../src/functions/webp.js');
@@include('../../../src/functions/slide.js');
@@include('../../../src/functions/activator.js');
@@include('../../../src/functions/body_lock.js');
@@include('../../../src/functions/dynamic_adapt.js');
// include('../../../src/js-elements/search.js');
// include('../../../src/js-elements/tabs.js');
// include('../../../src/js-elements/popups.js');
// include('../../../src/js-elements/gallery.js');
// include('../../../src/js-elements/scroll.js');
@@include('../../../src/js-elements/spollers.js');
@@include('../../../src/libs/swiper.min.js');
//include('elements/shiftPressed.js');

// ----------------------------------------------------------------------

activator('.header__icon--search',{ 
	removed: ['.header-search'], 
	effects: ['U'],
	effectDuration: 300,
	// bodyLock: true,
	removing: ['.goods__filter'],
	// deactivate: false,
	// onlyOne: true,
	clickOutClose: true,
	escClose: true,
	// inert: [header, footer, filter, description],
	focus: headerSearch__input,
});

const headerCategoriesSlider = new Swiper('.menu', {
	// direction: 'vertical',
	observer: true,
	observeParents: true,
	slidesPerView: 'auto',
	// slidesOffsetAfter: 60,
	// slidesOffsetBefore: 60,
	// watchOverflow: true,
	// centerInsufficientSlides: true,
	// spaceBetween: 30,
	// autoHeight: true,
	grabCursor: true,
	simulateTouch: true,
	// touchStartForcePreventDefault: true,
	// touchStartPreventDefault: false,
	// uniqueNavElements: false,
	// touchRatio: 2,
	speed: 800,
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	type: 'progressbar',
	// 	clickable: true,
	// },
	// initialSlide: 2,
	// effect: 'fade',
	// Arrows
	navigation: {
		nextEl: '.menu__button-next',
		prevEl: '.menu__button-prev',
	},
	// mousewheel: true,
	// scrollbar: {
	//   el: '.swiper-scrollbar',
	//   draggable: true,
	// },
	// controller: {
	// 	control: mini_slider,
	// },
	// autoplay: {
	// 	delay: 3000,
	// 	disableOnInteraction: true,
	// },
	// loop: true,
	//preloadImages: false,
	// lazy: true,
	breakpoints: {
		[md3]: {
			enabled: false,
		},
	},
	// on: {
	// 	lazyImageReady: function () {
	// 		ibg();
	// 	},
	// }
});

// window.onload = () => {
// 	addTouchClassForMobile();
// 	console.log(typeof(header));
// }


activator('.goods__icon-favorite', {});