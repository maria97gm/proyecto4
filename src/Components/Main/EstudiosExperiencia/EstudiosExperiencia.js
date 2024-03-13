import './EstudiosExperiencia.css'

export const createSection = (sectionData, sectionClass, hasDegree = true) => {
  const myMain = document.querySelector('.main')
  const sectionContainer = document.createElement('div')
  sectionContainer.classList.add(sectionClass)
  sectionContainer.id = 'estudiosexperiencia'

  for (const element of sectionData) {
    const sectionItem = document.createElement('div')
    const myH3 = document.createElement('h3')
    const myH4 = document.createElement('h4')
    const myP = document.createElement('p')

    if (hasDegree) {
      myH3.textContent = element.degree
      myH4.textContent = element.university
    } else {
      myH3.textContent = element.position
      myH4.textContent = element.company
    }

    myP.textContent = element.date

    sectionItem.appendChild(myH3)
    sectionItem.appendChild(myH4)
    sectionItem.appendChild(myP)
    sectionContainer.appendChild(sectionItem)
  }

  myMain.appendChild(sectionContainer)
}
