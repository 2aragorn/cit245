




var hamburgers = document.getElementsByClassName("hamburger_menu");
for (var i = 0; i < hamburgers.length; i++) {
	var current = hamburgers[i];
	current.addEventListener('click', ToggleMenu, false);
}

function ToggleMenu() {	
	var menu = document.querySelector('.pages');
	if (window.getComputedStyle(menu).display == "none") {	// Get the style even if set by a CSS class
		menu.style.display = 'block';
	}
	else {
		menu.style.display = 'none';
	}
}