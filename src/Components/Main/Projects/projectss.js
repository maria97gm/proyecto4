import './projects.css'
import { data } from '../../../../utils/DataMain/data'

export const myProjects = () => {
  const myMain = document.querySelector('main')

  const projectsContainer = document.createElement('div')
  projectsContainer.classList.add('projects')
  projectsContainer.id = 'projects'

  for (let element of data.projects) {
    const divProjects = document.createElement('div')
    const mockups = document.createElement('img')
    const titleMockup = document.createElement('h2')
    const technology = document.createElement('h3')
    const verWeb = document.createElement('a')

    mockups.src = element.preview
    mockups.alt = element.title
    verWeb.textContent = 'Ver web'
    verWeb.href = element.link
    verWeb.target = '_blank'

    // Evento de clic para abrir la imagen en grande
    mockups.addEventListener('click', () => {
      window.open(element.preview)
    })

    titleMockup.textContent = element.title
    technology.innerHTML = `Tecnologías utilizadas: ${element.technology.join(
      ', '
    )}`

    divProjects.appendChild(mockups)
    divProjects.appendChild(titleMockup)
    divProjects.appendChild(technology)
    divProjects.appendChild(verWeb)
    projectsContainer.appendChild(divProjects)
  }

  myMain.appendChild(projectsContainer)
}
