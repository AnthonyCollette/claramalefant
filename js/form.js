let labelName = document.getElementById('label-name')
let inputName = document.getElementById('input-name')
let labelEmail = document.getElementById('label-email')
let inputEmail = document.getElementById('input-email')
let labelObject = document.getElementById('label-object')
let inputObject = document.getElementById('input-object')
let labelMessage = document.getElementById('label-message')
let inputMessage = document.getElementById('input-message')
let formData = document.getElementById('formData')
let contact_number = document.getElementById('contact_number')
let confirmationText = document.getElementById('confirmation')

inputName.addEventListener('focus', () => {
	labelName.classList.add('label-up')
})

inputName.addEventListener('focusout', () => {
	if (inputName.value === '') {
		labelName.classList.remove('label-up')
	}
})

inputEmail.addEventListener('focus', () => {
	labelEmail.classList.add('label-up')
})

inputEmail.addEventListener('focusout', () => {
	if (inputEmail.value === '') {
		labelEmail.classList.remove('label-up')
	}
})
inputObject.addEventListener('focus', () => {
	labelObject.classList.add('label-up')
})

inputObject.addEventListener('focusout', () => {
	if (inputObject.value === '') {
		labelObject.classList.remove('label-up')
	}
})
inputMessage.addEventListener('focus', () => {
	labelMessage.classList.add('label-up')
})

inputMessage.addEventListener('focusout', () => {
	if (inputMessage.value === '') {
		labelMessage.classList.remove('label-up')
	}
})

emailjs.init('kumy6jobfYirZhvg4')

formData.addEventListener('submit', (e) => {
	e.preventDefault()
	this.contact_number.value = (Math.random() * 100000) | 0
	if (
		formData.name.value != '' &&
		formData.email.value != '' &&
		formData.object.value != '' &&
		formData.message.value != ''
	) {
		emailjs.sendForm('service_qufozu9', 'template_1dywiyi', formData).then(
			() => {
				console.log('Email envoyé !')
				confirmationText.classList.remove('display-none')
				formData.classList.add('display-none')
			},
			(error) => {
				alert(
					'Il y a eu un problème ! Merci de contacter le développeur du site!'
				)
				console.log(error)
			}
		)
	} else {
		alert('Merci de remplir tous les champs !')
	}
})
