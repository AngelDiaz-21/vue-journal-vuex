

export default () => ({
    isLoading: true,
    entries: [
        {
            // Este id mayormente va a venir de la base de datos
            // Como id se esta colocando la fecha actual 
            id: new Date().getTime(),//1234567892
            // Se pone la fecha propiamente en la cual vamos a saber cuando fue hecha esta entrada
            date: new Date().toDateString(),//saturday 23, julio
            text: 'Nisi nulla aute nostrud consequat ullamco. Id irure tempor ex magna anim. Pariatur dolor ad velit laboris nisi elit consectetur sunt nulla. Proident amet excepteur mollit mollit aute. Pariatur sint est duis consectetur ex officia officia occaecat eiusmod.',
            picture: null, //Va a venir en https://
        },
        {
            // Este id mayormente va a venir de la base de datos
            // Como id se esta colocando la fecha actual 
            id: new Date().getTime() + 1000,//1234567892
            // Se pone la fecha propiamente en la cual vamos a saber cuando fue hecha esta entrada
            date: new Date().toDateString(),//saturday 23, julio
            text: 'Irure cillum dolore consequat non in eiusmod mollit ea reprehenderit ullamco sunt magna ex.',
            picture: null, //Va a venir en https://
        },
        {
            // Este id mayormente va a venir de la base de datos
            // Como id se esta colocando la fecha actual 
            id: new Date().getTime() + 2000,//1234567892
            // Se pone la fecha propiamente en la cual vamos a saber cuando fue hecha esta entrada
            date: new Date().toDateString(),//saturday 23, julio
            text: 'Pariatur deserunt velit consectetur ullamco ullamco aute aute et culpa.',
            picture: null, //Va a venir en https://
        },
    ]
})