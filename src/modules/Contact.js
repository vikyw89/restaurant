import { contacts } from "./state.js"

const ContactContent = (e) => {
    const child = document.createElement('div')
    child.classList.add('ContactContent')
    child.appendChild(ContactTitle(e))
    child.appendChild(ContactCardContainer(e))
    return child
}

const ContactTitle = (e) => {
    const child = document.createElement('div')
    child.classList.add('ContactTitle')
    child.textContent = 'Contact Us'
    return child
}

const ContactCardContainer = (e) => {
    const child = document.createElement('div')
    child.classList.add('ContactCardContainer')
    console.log(contacts())
    for (let contact of contacts()){
        child.appendChild(ContactCard(e, contact.name, contact.position, contact.phone, contact.email))
    }
    return child
}

const ContactCard = (e, name, position, phone, email) => {
    const child = document.createElement('div')
    child.classList.add('ContactCard')
    child.appendChild(ContactCardName(e, name))
    child.appendChild(ContactCardPosition(e, position))
    child.appendChild(ContactCardPhone(e, phone))
    child.appendChild(ContactCardEmail(e, email))
    return child
}

const ContactCardName = (e, arg) => {
    const child = document.createElement('div')
    child.classList.add('ContactCardName')
    child.textContent = arg
    return child
}

const ContactCardPosition = (e, arg) => {
    const child = document.createElement('div')
    child.classList.add('ContactCardPosition')
    child.textContent = arg
    return child
}

const ContactCardPhone = (e, arg) => {
    const child = document.createElement('div')
    child.classList.add('ContactCardPhone')
    child.textContent = arg
    return child
}

const ContactCardEmail = (e, arg) => {
    const child = document.createElement('div')
    child.classList.add('ContactCardEmail')
    child.textContent = arg
    return child
}

export { ContactContent }