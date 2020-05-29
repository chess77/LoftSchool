import $axios from "../../requests";
//import {baseURL, token} from "./constants";

//axios.defaults.headers.baseUrl=baseURL




    export default {
        state:{
            error:null
        },
        mutations:{
            setError(state,payload){
                state.error=payload
           },
            clearError(state){
                state.error=null
            },
        },
        actions: {
              loginUser({commit},params) {
                try {
                    $axios.post("/login",  {'name':params['name'],'password':params['password']})
                        .then(response => {
                           // console.log(response.data.token)
                            const token = response.data.token;
                            localStorage.setItem("token", token);
                            $axios.defaults.headers["Authorization"] = `Bearer ${token}`
                           // this.$root.$router.push('/')
                        })

                } catch (e) {
                    commit('setError',error,{root: true})
                }
            },
            checkUser({commit}){
                try {

                    $axios.get("/user")
                        .then(response => {

                        })
                    return true

                } catch (e) {
                    commit('setError',e,{root: true})
                }
                return false


            },
            logout({commit}){

                try {
                    this.dispatch('checkUser')
                    $axios.post("/logout")
                        .then(response => {
                            // console.log(response.data.token)
                            //const token = response.data.token;
                            //localStorage.setItem("token", token);
                            //$axios.defaults.headers["Authorization"] = `Bearer ${token}`
                            // this.$root.$router.push('/')
                        })

                } catch (e) {
                    commit('setError',e,{root: true})
                }


            },

            closeError({commit}) {
                commit('clearError')

            }
        },

        getters:{
            errorGet(state) {
                return state.error;
            }
        }

    }



