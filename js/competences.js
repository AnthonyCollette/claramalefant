let skill = document.getElementsByClassName('competence')
let skills = [...skill]
let info = document.getElementsByClassName('info')
let infos = [...info]

for (let i = 0; i < skill.length; i++) {
	skill[i].addEventListener('click', () => {
		if (info[i].style.transform == 'translateX(-50%) scaleY(0)') {
			infos.map((item) => {
				item.style.transform = 'translateX(-50%) scaleY(0)'
			})
			skills.map((item) => {
				item.style.borderColor = 'transparent'
			})
			skill[i].style.borderColor = '#82a3eb'
			info[i].style.transform = 'translateX(-50%) scaleY(1)'
		} else {
			info[i].style.transform = 'translateX(-50%) scaleY(0)'
			skill[i].style.borderColor = 'transparent'
		}
	})
}
