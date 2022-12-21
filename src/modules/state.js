const localStorage = window.localStorage

const count = () =>{
    return +localStorage.count
}

const setCount = (arg) => {
    localStorage.count = arg
    return +localStorage.count 
}

const hours = () => {
    return JSON.parse(localStorage.hours)
}

const setHours = (arg)=>{
    localStorage.hours = JSON.stringify(arg)
    return JSON.parse(localStorage.hours)
}

const reviews = () => {
    return JSON.parse(localStorage.reviews)
}

const setReviews = (arg) => {
    localStorage.reviews = JSON.stringify(arg)
    return JSON.parse(localStorage.reviews)
}

const menu = () => {
    return JSON.parse(localStorage.menu)
}

const setMenu = (arg) => {
    localStorage.menu = JSON.stringify(arg)
    return JSON.parse(localStorage.menu)
}

const contacts = () => {
    return JSON.parse(localStorage.contacts)
}

const setContacts = (arg) => {
    localStorage.contacts = JSON.stringify(arg)
    return JSON.parse(localStorage.contacts)
}

// init
setCount(0)
setHours([
    `Sunday: 8am - 8pm`,
    `Monday: 6am - 6pm`,
    `Tuesday: 6am - 6pm`,
    `Wednesday: 6am - 6pm`,
    `Thursday: 6am - 10pm`,
    `Friday: 6am - 10pm`,
    `Saturday: 8am - 10pm`
])

setReviews([
    {
        name: 'Irene',
        review: `Irene's has the best porridge!`
    },
    {
        name: 'Irena',
        review: `Yum.. Yum..`,
    },
    {
        name:'Irenelle',
        review: `This is exactly the kind of place that I like to return to again and again.`
    }
])


setMenu(
    {
        beverages: [
            {
                name: 'Espresso',
                price: '1.75'
            },
            {
                name: 'Tazo Hot Tea',
                price: '2.50'
            },
            {
                name: 'Caffe Americano',
                price: '2.25'
            },
            {
                name:'Hot Chocolate',
                price: '2.75'
            }
        ],
        sides : [
            {
                name: 'Samosa',
                price: '1.20'
            },
            {
                name:'Green Salad',
                price: '0.99'
            },
            {
                name: 'Kebab Wrap',
                price: '2.99'
            }
        ],
        main : [
            {
                name: 'Braised Sirloin',
                price: '9.00'
            },
            {
                name: 'Nova Scottia Pan Seared Haddock',
                price: '14.00'
            },
            {
                name: 'Cranberry Wallnut Crusted Salmon',
                price: '17.00'
            }
        ]
    }
)

setContacts([
    {
        name: 'Irene',
        position: 'CEO',
        phone: '999-123-4141',
        email: 'irene@email.com'
    },
    {
        name: 'Irena',
        position: 'CEO too',
        phone: '999-123-4141',
        email: 'irena@email.com'
    },
    {
        name: 'Irenelle',
        position: 'yes, CEO too',
        phone: '999-123-4141',
        email: 'irenelle@email.com'
    }
])

export {
    count,
    setCount,
    hours,
    setHours,
    reviews,
    setReviews,
    menu,
    setMenu,
    contacts,
    setContacts
}