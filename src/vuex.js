/**
 * VUEX Store Definition
 * v0.1.1
 * r.w. 2017
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

var store = new Vuex.Store({
    state: {
        count: 0,
        menuEnabled: false
    },
    getters: {
        menuEnabled: state => state.menuEnabled
    },


    // Extremely important:
    // Mutation == SYNC
    // Action == ASYNC, call here
    
    // Register mutations here
    mutations: {
        // exampleCommitEvent (state: State, payload: any) {
        //     state.prop = payload;
        // },
        toggleMenu (state) {
            state.menuEnabled = !state.menuEnabled;
            console.log(state.menuEnabled);
        }
    },

    // Register actions here
    actions: {
        toggleMenu ({ commit }) {
            console.log('[actions] toggleMenu dispatched');
            commit('toggleMenu')
        }
    }
});

export default store;