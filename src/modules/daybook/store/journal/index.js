// Este index es lo que vamos a terminar importando en el store  


import state from './state' 
import * as actions from './actions' 
import * as getters from './getters' 
import * as mutations from './mutations' 

// Este es el modulo
const journalModule = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default journalModule