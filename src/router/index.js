import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/server/g&:game/i&:info_server",
        name: "server",
        component: () => import("../views/Server.vue"),
        props: true,
    },
    {
        path: "/404",
        name: "404",
        component: () => import("../views/404.vue"),
        props: true,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        redirect: "/404",
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;