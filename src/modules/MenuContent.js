import { menu, setMenu} from './state.js'

const MenuContent = (e) => {
    const child = document.createElement('div')
    child.classList.add('MenuContent')
    child.appendChild(MenuTitle(e))
    child.appendChild(BeveragesContainer(e))
    child.appendChild(SidesContainer(e))
    child.appendChild(MainDishesContainer(e))
    return child
}

const MenuTitle = (e) => {
    const child = document.createElement('div')
    child.classList.add('MenuTitle')
    child.textContent = 'Our Menu'
    return child
}

const BeveragesContainer = (e) => {
    const child = document.createElement('div')
    child.classList.add('BeveragesContainer')
    child.textContent = 'Beverages'
    child.appendChild(BeverageCard(e))
    return child
}

const BeverageCard = (e) => {
    const child = document.createElement('div')
    child.classList.add('BeverageCard')
    for (let item of menu().beverages) {
        child.appendChild(BeverageCardName(e, item.name))
        child.appendChild(BeverageCardPrice(e, item.price))
    }
    // child.appendChild(BeverageCardDescription())
    // child.appendChild(BeverageCardPicture(e))
    return child
}

const BeverageCardName = (e, name) => {
    const child = document.createElement('div')
    child.classList.add('BeverageCardName')
    child.textContent = name
    return child
}

const BeverageCardDescription = (e, description) => {
    const child = document.createElement('div')
    child.classList.add('BeverageCardDescription')
    child.textContent = description
    return child
}

const BeverageCardPrice = (e, price) => {
    const child = document.createElement('div')
    child.classList.add('BeverageCardPrice')
    child.textContent = price
    return child
}

const BeverageCardPicture = (e, picture) => {
    const child = document.createElement('div')
    child.classList.add('BeverageCardPicture')
    return child
}

const SidesContainer = (e) => {
    const child = document.createElement('div')
    child.classList.add('SidesContainer')
    return child
}

const MainDishesContainer = (e) => {
    const child = document.createElement('div')
    child.classList.add('MainDishesContainer')
    return child
}

export { MenuContent }