let body = document.querySelector('body');
let wrapper = document.querySelector('.wrapper');
let page = document.querySelector('.page');
let header = document.querySelector('.header');
// ----------------------------------------------------------------------

let headerHeight;

function hh() {
	headerHeight = header.offsetHeight;
};

function spaceForHeader() {
	hh();
	let pElements = document.querySelectorAll('._padding-header');
	if(pElements) {
		for(el of pElements) {
			el.style.paddingTop = headerHeight + 'px';
		}
	}
	let mElements = document.querySelectorAll('._margin-header');
	if(mElements) {
		for(el of mElements) {
			el.style.marginTop = headerHeight + 'px';
		}
	}
}


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
// @@include('../../../src/functions/body_lock.js');
// include('functions/dynamic_adapt.js');
// include('../../../src/js-elements/burger.js');
// include('elements/search.js');
// include('elements/tabs.js');
// include('elements/popups.js');
// include('elements/gallery.js');
// include('elements/sliders.js');
// include('elements/scroll.js');
@@include('elements/spollers.js');

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

activator('.header__icon--search',{ 
	removed: ['.header__search-wrapper'], 
	effects: ['U'],
	effectDuration: 300
});


activator('.filter__color-item', {});


activator('.filter__size', {});

window.onload = () => {
	addTouchClassForMobile();
}
