import about from '../components/aboutBlock'

import Vue from "vue";
import router from "vue-router";
//import routes from "./routes";

Vue.use(router);

export default new router ({
    routes: [
        {
            path: "/",
            name: 'home',
            component: about,
            meta: {
                title: "Блок «Обо мне»"
            }
        },
        {
            path: "/works",
            name:"works",
            component: () => import("../components/workBlock.vue"),
            meta: {
                title: "Блок «Работы»"
            }
        },
        {
            path: "/reviews",
            name: "works",
            component: () => import("../components/feedBlock.vue"),
            meta: {
                title: "Блок «Отзывы»"
            }
        },
        {
            path: "/login",
            name:"login",
            component: () => import("../components/loginBlock.vue"),
            meta: {

                public: true
            }
        }
    ]

}  );




//router.b.beforeEach((to, from, next) => {
 //   next();
//});

