// Update navbar to be fixed or not
function updateNav() {
	// Make nav fixed or not fixed
	var nav = document.getElementsByTagName("nav")[0];

	if (window.scrollY > 200)
		nav.classList.add("fixed");
	else
		nav.classList.remove("fixed");
	
	// Update nav selected
	var scrollPos = window.scrollY + window.innerHeight / 2;

	var about = document.getElementById("about");
	var aboutNav = document.getElementById("about-nav");

	if (scrollPos >= about.offsetTop && scrollPos < about.offsetTop + about.offsetHeight - 10)
		aboutNav.classList.add("nav-selected");
	else
		aboutNav.classList.remove("nav-selected");

	var portfolio = document.getElementById("portfolio");
	var portfolioNav = document.getElementById("portfolio-nav");

	if (scrollPos >= portfolio.offsetTop && scrollPos < portfolio.offsetTop + portfolio.offsetHeight - 10)
		portfolioNav.classList.add("nav-selected");
	else
		portfolioNav.classList.remove("nav-selected");

	var resume = document.getElementById("resume");
	var resumeNav = document.getElementById("resume-nav");

	if (scrollPos >= resume.offsetTop && scrollPos < resume.offsetTop + resume.offsetHeight - 10)
		resumeNav.classList.add("nav-selected");
	else
		resumeNav.classList.remove("nav-selected");
}

window.onscroll = updateNav;

window.onload = function () {
	AOS.init();
	updateNav();

	// Blur
	var aTags = document.getElementsByTagName("a");
	var buttons = document.getElementsByTagName("button");

	for (var i = 0; i < aTags.length; i++) {
		var aTag = aTags[i];
		aTag.addEventListener("click", function () {
			aTag.blur();
		});
	}

	for (var i = 0; i < buttons.length; i++) {
		var button = buttons[i];
		button.addEventListener("click", function () {
			button.blur();
		});
	}

	// Dark Mode Toggle
	var DARK_MODE_KEY = "dark-mode";
	var docEl = document.documentElement;
	var toggle = document.getElementById("dark-mode-toggle");

	function setDarkMode(isDark) {
		localStorage.setItem(DARK_MODE_KEY, isDark.toString());
	}

	toggle.addEventListener("click", function () {
		if (docEl.classList.contains("dark-mode")) {
			docEl.classList.remove("dark-mode");
			setDarkMode(false);
		} else {
			docEl.classList.add("dark-mode");
			setDarkMode(true);
		}
	});
};
