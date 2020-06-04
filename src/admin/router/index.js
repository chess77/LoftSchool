import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "../store";
import $axios from "../requests";
Vue.use(VueRouter);
const router = new VueRouter({ routes });
router.beforeEach(async (to, from, next) => {
    const isPublicRoute_from = from.matched.some((route) => route.meta.public);
    const isPublicRoute = to.matched.some((route) => route.meta.public);
    const isUserLoggedIn = store.getters["user/userIsLoggedIn"];
    const token = localStorage.getItem("token");
    if (isPublicRoute === false && isUserLoggedIn === false) {
        if  (token!= ""){
            const response = await $axios.get("/user");
            if (response && response.status === 200) {
                store.commit("user/SET_USER", response.data.user);
                console.log("user updated")
                next();
            }else{
                router.replace("/login");
                localStorage.clear();
            }
        }
    } else {
        next();
    }
});
export default router;
