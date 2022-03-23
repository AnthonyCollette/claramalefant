let chevron = document.getElementById('chevron-down')
let submenuparent = document.getElementById('submenu-parent')
let submenu = document.getElementById('submenu')

submenuparent.addEventListener('click', () => {
	if (chevron.classList.contains('transform-up')) {
		chevron.classList.remove('transform-up')
		submenu.classList.remove('display-flex')
	} else {
		chevron.classList.add('transform-up')
		submenu.classList.add('display-flex')
	}
})
