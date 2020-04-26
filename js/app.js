// Update navbar to be fixed or not
function updateNav() {
	let nav = document.getElementsByTagName("nav")[0];

	if (window.scrollY > 200)
		nav.classList.add("fixed");
	else
		nav.classList.remove("fixed");
}

window.onscroll = updateNav;

window.onload = () => {

	updateNav();


	// Blur
	let aTags = document.getElementsByTagName("a");

	for (let i = 0; i < aTags.length; i++) {

		let aTag = aTags[i];
		aTag.addEventListener("click", () => {
			aTag.blur();
		});
	}
};