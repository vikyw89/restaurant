import { HomeContent } from "./HomeContent.js"
import { MenuContent } from "./MenuContent.js"

const Main = (e) => {
    const child = document.createElement('div')
    child.classList.add('Main')
    child.appendChild(HomeContent(e))
    return child
}

export { Main }