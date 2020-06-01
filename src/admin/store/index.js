import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
Vue.use(Vuex);
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);


import login from '../store/modules/login.js';
import skills from '../store/modules/skills.js';
import reviews from '../store/modules/reviews';
import works from '../store/modules/works';
import user from '../store/modules/user';


const baseUrl="https://webdev-api.loftschool.com/";




export default new Vuex.Store({
//export const store = new Vuex.Store({
    modules: {
        namespaced: true,
        login,
        skills,
        reviews,
        works,
        user

    },

    mutations:{

    }

});