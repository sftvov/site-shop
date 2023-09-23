let shiftPressed = false;

document.addEventListener('keydown', (e) => {
	if (e.key === 'Shift') shiftPressed = true;
});

document.addEventListener('keyup', (e) => {
	if (e.key === 'Shift') shiftPressed = false;
});
