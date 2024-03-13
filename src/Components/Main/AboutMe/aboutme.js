import { data } from '../../../../utils/DataMain/data'
import './aboutme.css'
export const aboutMe = () => {
  const myMain = document.querySelector('.main')
  const divAboutMe = document.createElement('div')
  divAboutMe.classList.add('aboutMe')
  divAboutMe.innerHTML = `
  <img src="/public/assets/IMG_4925.jpg"" alt="María Gómez">
  <h1>${data.name}</h1>
  <h2>${data.email}</h2>
  <p>${data.aboutMe}</p>
  `
  myMain.appendChild(divAboutMe)
}
