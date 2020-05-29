import Vue from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
//import Vue from 'vue';






import Vuelidate from 'vuelidate';

//Vue.use(Vuelidate);


import $axios from './requests';




store.$axios = $axios;

import VModal from 'vue-js-modal';

Vue.use(VModal )
//import Vue from 'vue';



var vue= new Vue({
  el: "#app-root",
  router,
  store,




  render: h => h(App)
});

