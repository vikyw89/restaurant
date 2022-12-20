import { count, hours, reviews, setCount, setHours } from './state.js'

const HomeContent = (e) => {
    const child = document.createElement('div')
    child.classList.add('HomeContent')
    child.appendChild(HomeTitleContainer(e))
    child.appendChild(ReviewContainer(e))
    child.appendChild(HoursContainer(e))
    child.appendChild(LocationContainer(e))
    return child
}

const HomeTitleContainer = (e) => {
    const child = document.createElement('div')
    child.classList.add('HomeTitleContainer')
    child.textContent = `Irene's Restaurant`
    return child
}

const ReviewContainer = (e) => {
    const child = document.createElement('div')
    child.classList.add('ReviewContainer')
    child.textContent = 'Reviews'
    child.appendChild(ReviewCard(e, reviews()[count()].name, reviews()[count()].review))
    setInterval(()=>{
        child.removeChild(child.lastChild)
        child.appendChild(ReviewCard(e, reviews()[count()].name, reviews()[count()].review))
        setCount((count()+1)% reviews().length)
    },3000)
    return child
}

const ReviewCard = (e, name, review) => {
    const child = document.createElement('div')
    child.classList.add('ReviewCard')
    child.appendChild(ReviewerContent(e, review)) 
    child.appendChild(ReviewerName(e, name))
    return child
}

const ReviewerName = (e, name) => {
    const child = document.createElement('div')
    child.classList.add('ReviewerName')
    child.textContent = `~${name}`
    return child
}

const ReviewerContent = (e, content) => {
    const child = document.createElement('div')
    child.classList.add('ReviewerContent')
    child.textContent = content
    return child
}

const HoursContainer = (e) => {
    const child = document.createElement('div')
    child.classList.add('HoursContainer')
    for (let hour of hours()) {
        child.appendChild(Hours(e, hour))
    }
    return child
}

const Hours = (e, arg) => {
    const child = document.createElement('div')
    child.classList.add('Hours')
    child.textContent = arg
    return child
}

const LocationContainer = (e) => {
    const child = document.createElement('div')
    child.classList.add('LocationContainer')
    child.textContent = 'Our Location'
    child.appendChild(Location(e))
    return child
}

const Location = (e) => {
    const child = document.createElement('div')
    child.classList.add('Location')
    child.textContent = 'Imus, Cavite'
    return child
}

export { HomeContent }