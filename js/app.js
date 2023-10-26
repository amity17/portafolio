const hamburgerIcon = document.getElementById('hamburger-icon')
const menu = document.getElementById('menu')
hamburgerIcon.addEventListener('click', () => {
	menu.classList.toggle('active')
})

menu.addEventListener('click', (e) => {
	const links = e.target.classList.contains('menu__link')
	if (links) {
		menu.classList.remove('active')
	}
})
