const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
const page = document.querySelector('.page');
const header = document.querySelector('.header');

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

// let headerHeight;

// function hh() {
// 	headerHeight = header.offsetHeight;
// };

// function spaceForHeader() {
// 	hh();
// 	let pElements = document.querySelectorAll('._padding-header');
// 	if(pElements) {
// 		for(el of pElements) {
// 			el.style.paddingTop = headerHeight + 'px';
// 		}
// 	}
// 	let mElements = document.querySelectorAll('._margin-header');
// 	if(mElements) {
// 		for(el of mElements) {
// 			el.style.marginTop = headerHeight + 'px';
// 		}
// 	}
// }


// function spaceForMobileMenu() {
// 	if (body.offsetWidth < 939.95 && !window.offsetWidth) {
// 		headerHeight = headerBody.offsetHeight;
//     header.style.marginTop = headerHeight + 'px';
// 		menu.style.paddingTop = headerHeight + 'px';
// 		topBody.classList.add('_container');
// 	}
// 	else {
//     header.removeAttribute('style');
// 		menu.removeAttribute('style');
// 		topBody.classList.remove('_container');
// 	}
// }

// ----------------------------------------------------------------------

// include('functions/sendmail.js');
@@include('../../../src/functions/isMobile.js');
@@include('../../../src/functions/webp.js');
@@include('../../../src/functions/slide.js');
@@include('../../../src/functions/activator.js');
@@include('../../../src/functions/body_lock.js');
// include('functions/dynamic_adapt.js');
// include('elements/search.js');
// include('elements/tabs.js');
// include('elements/popups.js');
// include('elements/gallery.js');
@@include('../../../src/libs/swiper.min.js');
// include('elements/scroll.js');
@@include('elements/spollers.js');

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

activator('.header__icon--search',{ 
	removed: ['.header__search-wrapper'], 
	effects: ['U'],
	effectDuration: 300,
	// bodyLock: true,
	removing: ['.goods__filter'],
	// deactivate: false,
	// onlyOne: true,
	clickOutClose: true,
	escClose: true,
});

activator('.filter-button',{ 
	removed: ['.filter'], 
	bodyLock: true,
	escClose: true,
});

activator('.filter__color-item', {});
activator('.filter__size', {});
activator('.goods__icon-favorite', {
	clickOutClose: true
});

activator('.goods__filter', {
	deactivate: false,
	onlyOne: true,
});



let headerCategoriesSlider = new Swiper('.header__menu-wrapper', {
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
	// 	type: 'bullets',
	// 	clickable: true,
	// },
	// initialSlide: 2,
	// effect: 'fade',
	// Arrows
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },
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

window.onload = () => {
	addTouchClassForMobile();
}


