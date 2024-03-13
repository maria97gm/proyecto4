import './contactme.css'

export function createEmailButton() {
  const emailButton = document.createElement('button')
  emailButton.textContent = '¡Espero tu correo con tu feedback!'
  emailButton.id = 'email-button'
  document.body.appendChild(emailButton)

  emailButton.addEventListener('click', function () {
    window.location.href = 'mailto:mariagomezmateo97@gmail.com'
  })
}
