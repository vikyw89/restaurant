import { HomeContent } from "./HomeContent.js"
import { MenuContent } from "./MenuContent.js"

const child = document.createElement('div')
const Header = (e) => {
    const child = document.createElement('div')
    child.classList.add('Header')
    child.appendChild(Home(e))
    child.appendChild(Menu(e))
    child.appendChild(Contact(e))
    return child
}

const Home = (e) => {
    const child = document.createElement('div')
    child.classList.add('Home')
    child.textContent = 'Home'
    // bind events
    child.addEventListener('pointerdown', (e)=>{
        const node = document.querySelector('.Main')
        node.innerHTML = ''
        node.appendChild(HomeContent(e))
    })
    return child
}

const Menu = (e) => {
    const child = document.createElement('div')
    child.classList.add('Menu')
    child.textContent = 'Menu'
    // bind events
    child.addEventListener('pointerdown', (e)=>{
        const node = document.querySelector('.Main')
        node.innerHTML = ''
        node.appendChild(MenuContent(e))
    })
    return child
}

const Contact = (e) => {
    const child = document.createElement('div')
    child.classList.add('Contact')
    child.textContent = 'Contact Us'
    return child
}

export { Header }