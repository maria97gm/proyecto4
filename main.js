import { createHeader } from './src/Components/Header/header'
import { aboutMe } from './src/Components/Main/AboutMe/aboutme'
import { createSection } from './src/Components/Main/EstudiosExperiencia/EstudiosExperiencia'
import { skillsPorcentajes } from './src/Components/Main/Skills/skills'
import { myProjects } from './src/Components/Main/Projects/projectss'
import { createFooter } from './src/Components/Footer/footer'
import { data } from './utils/DataMain/data'
import { createEmailButton } from './src/Components/Contactme/contactme'

createHeader()
createEmailButton()
aboutMe()
createSection(data.education, 'estudios')
createSection(data.workExperience, 'experiencia', false)
skillsPorcentajes()
myProjects()
createFooter()
