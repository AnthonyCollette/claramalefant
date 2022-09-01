const horizontalLine = document.getElementsByClassName('line-1')
const verticalLine = document.getElementsByClassName('line-2')
const button = document.getElementsByClassName('button-plus')
const text = document.getElementsByClassName('portfolio__case--text')
const content = document.getElementsByClassName('content')
const title = document.getElementsByClassName('title')

for (let i = 0; i < button.length; i++) {
	button[i].addEventListener('click', () => {
		if (horizontalLine[i].classList.contains('opacity')) {
			horizontalLine[i].classList.remove('opacity')
			verticalLine[i].style.transform = 'translateX(-50%) rotate(90deg)'
			text[i].style.whiteSpace = 'normal'
			text[i].style.overflow = 'visible'
			text[i].style.height = 'auto'
			content[i].style.opacity = '1'
			content[i].style.transform = 'scaleY(1)'
			title[i].style.maxWidth = '100%'
			title[i].style.whiteSpace = 'normal'
		} else {
			horizontalLine[i].classList.add('opacity')
			verticalLine[i].style.transform = 'translateX(-50%)'
			text[i].style.whiteSpace = 'nowrap'
			text[i].style.overflow = 'hidden'
			text[i].style.height = '20px'
			content[i].style.opacity = '0'
			content[i].style.transform = 'scaleY(0)'
			title[i].style.maxWidth = '90%'
			title[i].style.whiteSpace = 'nowrap'
		}
	})
}

const secondHorizontalLine = document.getElementsByClassName('accordeon-line-1')
const secondVerticalLine = document.getElementsByClassName('accordeon-line-2')
const secondButton = document.getElementsByClassName('experience-accordeon')
const secondText = document.getElementsByClassName(
	'experience-accordeon__content'
)
const textButton = document.getElementsByClassName('written-btn')

for (let i = 0; i < secondButton.length; i++) {
	secondButton[i].addEventListener('click', () => {
		if (secondHorizontalLine[i].classList.contains('opacity')) {
			secondText[i].style.display = 'block'
			secondHorizontalLine[i].classList.remove('opacity')
			secondVerticalLine[i].style.transform = 'translateX(-50%) rotate(90deg)'
		} else {
			secondHorizontalLine[i].classList.add('opacity')
			secondVerticalLine[i].style.transform = 'translateX(-50%)'
			secondText[i].style.display = 'none'
		}
	})
}
