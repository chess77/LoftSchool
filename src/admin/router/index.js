// import about from '../components/aboutBlock'
//
// import Vue from "vue";
// import router from "vue-router";
// //import routes from "./routes";
//
// Vue.use(router);
//
// export default new router ({
//     routes: [
//         {
//             path: "/",
//             name: 'home',
//             component: about,
//             meta: {
//                 title: "Блок «Обо мне»"
//             }
//         },
//         {
//             path: "/works",
//             name:"works",
//             component: () => import("../components/workBlock.vue"),
//             meta: {
//                 title: "Блок «Работы»"
//             }
//         },
//         {
//             path: "/reviews",
//             name: "works",
//             component: () => import("../components/feedBlock.vue"),
//             meta: {
//                 title: "Блок «Отзывы»"
//             }
//         },
//         {
//             path: "/login",
//             name:"login",
//             component: () => import("../components/loginBlock.vue"),
//             meta: {
//
//                 public: true
//             }
//         }
//     ]
//
// }  );
//export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "../store";
import axios from "axios";

const guard = axios.create({
    baseURL: "https://webdev-api.loftschool.com"
});

Vue.use(VueRouter);

const router = new VueRouter({ routes });

router.beforeEach(async (to, from, next) => {
   // console.log("beforeCHangeRoute")
    const isPublicRoute_from = from.matched.some(route => route.meta.public);
    //if (isPublicRoute_from) return ;
    const isPublicRoute = to.matched.some(route => route.meta.public);
    const isUserLoggedIn = store.getters["user/userIsLoggedIn"];
    const token = localStorage.getItem("token");

    if (token == ""){router.replace('/login');}

    if (isPublicRoute === false && isUserLoggedIn === false ) {


        // guard.defaults.headers["Authorization"] = `Bearer ${token}`;
        //
        // try {
        //     const response = await guard.get("/user");
        //     store.commit("user/SET_USER", response.data.user);
        //     next();
        // } catch (error) {
            router.replace('/login');
            localStorage.clear();
   //     }
    } else {
        next();
    }
});

export default router;