const filterPricesWrapper = document.querySelector('.filter__prices-wrapper');
const filterPriceLine = filterPricesWrapper.querySelector('.filter__price-line');
const pricesRounds = filterPriceLine.querySelectorAll('button');
const pricesInputs = filterPricesWrapper.querySelectorAll('.filter__price-input');

const priceMax = filterPricesWrapper.dataset.price;
let whichRound;

for (const round of pricesRounds) {
	round.addEventListener('mousedown', addListenerForPriceLine);
	round.addEventListener('touchstart', addListenerForPriceLine);
	round.addEventListener('keydown', (e) => {
		whichRound = round.classList.contains('filter__price-round--one') ? 0 : 1;
		const value = parseInt(pricesInputs[whichRound].value.match(/[0-9]+/)[0]);
		if (e.key === 'ArrowRight') {
			changeValue(value + 1);
		} else if (e.key === 'ArrowLeft') {
			changeValue(value - 1);
		}
	});
}

for (const input of pricesInputs) {
	input.addEventListener('change', (e) => {
		const input = e.target;
		whichRound = input.classList.contains('_one') ? 0 : 1;
		const value = parseInt(input.value.match(/[0-9]+/)[0]);
		changeValue(value);
	});
	input.addEventListener('keydown', (e) => {
		whichRound = input.classList.contains('_one') ? 0 : 1;
		const value = parseInt(e.target.value.match(/[0-9]+/)[0]);
		if (e.key === 'ArrowUp') {
			changeValue(value + 1);
		} else if (e.key === 'ArrowDown') {
			changeValue(value - 1);
		}
	});
}

function changeValue(value) {
	let percent = Math.round((value / priceMax) * 100);
	if (whichRound === 0) {
		if (percent < 0) {
			percent = 0;
			value = 0;
		}
		const right = parseInt(getComputedStyle(filterPriceLine).getPropertyValue('--end-price'));
		if (percent > right) {
			percent = right;
			value = (percent * priceMax) / 100;
		}
		filterPriceLine.style.setProperty('--start-price', percent + '%');
		pricesInputs[0].value = '$' + value;
	} else {
		const left = parseInt(getComputedStyle(filterPriceLine).getPropertyValue('--start-price'));
		if (percent < left) {
			percent = left;
			value = (percent * priceMax) / 100;
		}
		if (percent > 100) {
			percent = 100;
			value = priceMax;
		}
		filterPriceLine.style.setProperty('--end-price', percent + '%');
		pricesInputs[1].value = '$' + value;
	}
}

function changePriceLinePos(e) {
	const left = filterPriceLine.getBoundingClientRect('left').x;
	const width = filterPriceLine.offsetWidth;
	let value = Math.round((((e.clientX || e.targetTouches[0].clientX) - left) / width) * priceMax);
	changeValue(value);
}

function removeListenerFromPriceLine() {
	body.classList.remove('_mob-lock', '_no-select');
	document.removeEventListener('mousemove', changePriceLinePos);
	document.removeEventListener('touchmove', changePriceLinePos);
	document.removeEventListener('mouseup', removeListenerFromPriceLine);
	document.removeEventListener('touchend', removeListenerFromPriceLine);
}

function addListenerForPriceLine(e) {
	whichRound = e.target.classList.contains('filter__price-round--one') ? 0 : 1;
	body.classList.add('_mob-lock', '_no-select');
	e.target.focus();
	document.addEventListener('mousemove', changePriceLinePos);
	document.addEventListener('touchmove', changePriceLinePos);
	document.addEventListener('mouseup', removeListenerFromPriceLine);
	document.addEventListener('touchend', removeListenerFromPriceLine);
}
