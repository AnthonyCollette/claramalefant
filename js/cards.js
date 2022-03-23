let cards = document.getElementsByClassName('card')
let buttonsMore = document.getElementsByClassName('btn-more')
let buttonsLess = document.getElementsByClassName('btn-less')

for (let i in buttonsMore) {
	buttonsMore[i].onclick = () => {
		cards[i].classList.add('open-card')
	}
	buttonsLess[i].onclick = () => {
		cards[i].classList.remove('open-card')
	}
}
