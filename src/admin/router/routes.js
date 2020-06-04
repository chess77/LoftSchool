import about from "../components/aboutBlock";
export default [
    {
        path: "/",
        name: "home",
        component: about,
        meta: {
            title: "Блок «Обо мне»",
        },
    },
    {
        path: "/works",
        name: "works",
        component: () => import("../components/workBlock.vue"),
        meta: {
            title: "Блок «Работы»",
        },
    },
    {
        path: "/reviews",
        name: "works",
        component: () => import("../components/feedBlock.vue"),
        meta: {
            title: "Блок «Отзывы»",
        },
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../components/loginBlock.vue"),
        meta: {
            public: true,
        },
    },
];
