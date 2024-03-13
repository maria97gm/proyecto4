import { arrayHeader } from '../../../utils/ArrayHeader/arrayheader'
import './header.css'

export const createNav = () => {
  const myHeader = document.querySelector('header')

  for (const element of arrayHeader) {
    const elementHeader = document.createElement('a')
    elementHeader.textContent = element.item
    elementHeader.href = element.url
    elementHeader.addEventListener('click', scrollToSection)
    myHeader.appendChild(elementHeader)
  }
}

export const createHeader = () => {
  const myHeader = document.querySelector('header')
  const logo = document.createElement('img')
  logo.src = '/assets/logo.jpg'
  logo.classList.add('logo')
  myHeader.appendChild(logo)
  createNav()
}

// Función para desplazar a la sección correspondiente
const scrollToSection = (event) => {
  const targetSectionId = event.currentTarget.getAttribute('href').substring(1)
  const targetSection = document.getElementById(targetSectionId)
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' })
  }
}
