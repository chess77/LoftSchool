import Vue from 'vue';
import App from './App.vue'
import Vuex from 'vuex';
Vue.use(Vuex);
new Vue({
  el: "#app-root",
  render: h => h(App)
});