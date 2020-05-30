import loginBlock from "./loginBlock.vue"
//import "./login.spec.js"

export default {
    title: "login",
    component: loginBlock,
}

export const defaultView = () => ({
    components: { loginBlock },
    template: '<loginBlock />',
});