import './skills.css'
import { data } from '../../../../utils/DataMain/data'
export const skillsPorcentajes = () => {
  const myMain = document.querySelector('main')
  const divSkills = document.createElement('div')
  divSkills.classList.add('skills')
  divSkills.id = 'skills'

  for (const element of data.skills) {
    const skillContainer = document.createElement('section')
    skillContainer.classList.add('skill-container')

    const skillName = document.createElement('h3')
    skillName.textContent = element.skill

    const skillBar = document.createElement('div')
    skillBar.classList.add('skill-bar')
    skillBar.textContent = `${element.percentage}%`
    skillBar.style.width = `${element.percentage}%`
    skillContainer.appendChild(skillName)
    skillContainer.appendChild(skillBar)
    divSkills.appendChild(skillContainer)
    myMain.appendChild(divSkills)
  }
}
