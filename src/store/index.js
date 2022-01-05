import { createStore } from 'vuex' 

import journal from '../modules/daybook/store/journal/index' 

const store = createStore({
    // Nombre del modulo
    modules: {
        journal,
    }
})

export default store