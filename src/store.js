import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        
        loggedUser: {}
    },
    getters: {
        
        getLoggedUser: state => {
            return state.loggedUser
        }
    },
    mutations: {
        

        // ADD_LOGGED_USER: (state, user) => {
        //     state.loggedUser = user
        //     localStorage.setItem('_auth', encryptUser(user))
        // },

        
    },
    actions: {}
})