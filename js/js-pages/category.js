const filter__categoryLinks = document.querySelectorAll('.filter__category-link');
const filter__firstCategoryLink = filter__categoryLinks[0];
const filter__lastCategoryLink = filter__categoryLinks[filter__categoryLinks.length - 1];
const filterButton = document.querySelector('.filter-button');
const filter = document.querySelector('.filter');
const goods = document.querySelector('.goods');
const description = document.querySelector('.description');

@@include('../elements/priceSliders.js');


activator('.filter-button',{ 
	removed: ['.filter'], 
	bodyLock: true,
	escClose: true,
	inert: [header, footer, goods, description],
	focus: filter__firstCategoryLink,   
});

activator('.filter__color-item', {});
activator('.filter__size', {});
activator('.goods__filter', {
	deactivate: false,
	onlyOne: true,
});