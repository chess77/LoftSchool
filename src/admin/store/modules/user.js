import axios from 'axios'
import $axios from "../../requests";
export default {
    namespaced: true,
    state: {
        user: {}
    },
    mutations: {
        SET_USER: (state, user) => (state.user = user),
        CLEAR_USER: state => (state.user = {})
    },
    getters: {
        userIsLoggedIn: state => {
            const userObj = state.user;
            let userObjectIsEmpty = true

                if(Object.keys(userObj).length === 0 && userObj.constructor === Object){
                    userObjectIsEmpty = false
                };


            return userObjectIsEmpty ;
        }
    },
    actions: {
       async logout({ commit }) {

                try {
                    //this.dispatch('checkUser')
                    await $axios
                        .post('/logout')
                        .then(response => {
                            commit("CLEAR_USER");
                            localStorage.clear();
                        });
                } catch (e) {
                    commit('setError',error,{root: true})
                }


        }
    }
};