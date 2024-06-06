import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/admin/",
            name: "admin",
            component: () => import('@/view/admin.vue'),
        },
        {
            path: "/login/",
            name: "login",
            component: () => import('@/view/login.vue')
        },

    ]
})

export default router