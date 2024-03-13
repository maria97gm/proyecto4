import './footer.css'

export const createFooter = () => {
  const myFooter = document.querySelector('footer')
  myFooter.innerHTML = `
    <a href="https://www.linkedin.com/in/mar%C3%ADa-g%C3%B3mez-mateo-941071171/" target="_blank">
      <img src="/public/assets/linkedin.png" alt="LinkedIn">
    </a>
    <a href="mailto:mariagomezmateo97@gmail.com">mariagomezmateo97@gmail.com</a>
    <a href="tel:+34600000000">+34 600 000 00</a>
  `
}
