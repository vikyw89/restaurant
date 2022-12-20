import { Header } from './modules/Header.js'
import { Footer } from './modules/Footer.js'
import { Main } from './modules/Main.js'

const content = document.querySelector('#content')


const Controller = (e) => {
    content.innerHTML = ''
    content.classList.add('Controller')
    content.appendChild(Header(e))
    content.appendChild(Main(e))
    content.appendChild(Footer(e))
    return content
}

Controller()

export { Controller }

