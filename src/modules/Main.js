import { HomeContent } from "./HomeContent.js"

const Main = (e) => {
    const child = document.createElement('div')
    child.classList.add('Main')
    child.appendChild(HomeContent(e))
    return child
}

export { Main }