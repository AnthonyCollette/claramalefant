const nav = document.getElementById('nav-list')
const line1 = document.getElementById('line-1')
const line2 = document.getElementById('line-2')
const line3 = document.getElementById('line-3')
const burgerButton = document.getElementById('burger-btn')

burgerButton.addEventListener('click', () => {
	if (nav.style.transform == 'scaleY(1)') {
		nav.style.transform = 'scaleY(0)'
		// burgerButton.style.bottom = '20px'
		line1.style.transform = 'rotate(0)'
		line3.style.transform = 'rotate(0)'
		line2.style.opacity = 1
		burgerButton.classList.remove('to-bottom')
	} else {
		nav.style.transform = 'scaleY(1)'
		// burgerButton.style.bottom = '-70px'
		line1.style.transform = 'translateY(8px) rotate(45deg)'
		line3.style.transform = 'translateY(-8px) rotate(-45deg)'
		line2.style.opacity = 0
		burgerButton.classList.add('to-bottom')
	}
})
