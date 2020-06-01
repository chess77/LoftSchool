import $axios from "../../requests";
import store from "../index";
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



