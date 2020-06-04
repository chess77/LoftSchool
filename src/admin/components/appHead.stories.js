import loginBlock from "./loginBlock.vue";
export default {
    title: "login",
    component: loginBlock,
};
export const defaultView = () => ({
    components: { loginBlock },
    template: "<loginBlock />",
});
