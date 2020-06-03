import axios from 'axios'
import $axios from "../../requests";
export default {
    namespaced: true,
    state: {
        user: {}
    },
    mutations: {
        SET_USER: function(state, user){
            (state.user = user )
          //  console.log("state", state)

        },
        CLEAR_USER: state => (state.user = {}),
        LOGOUT_USER:  function () {


            //this.dispatch('checkUser')

            state.user = {};

        }
    },
    getters: {
        userIsLoggedIn: state => {
            const userObj = state.user;
            let userObjectIsEmpty = false
            console.log("userobj", userObj)
//Object.keys(userObj).length === 0 && userObj.constructor === Object
                if(  Object.keys(userObj).length === 0 && userObj.constructor === Object){
                    userObjectIsEmpty = true
                };
               // console.log("isloggedon", userObjectIsEmpty)


            return !userObjectIsEmpty ;
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