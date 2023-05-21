import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }

        if (to.hash) return false

        return { top: 0 }
    },
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/HomePage.vue'),
        },
        {
            path: '/admin',
            name: 'Admin',
            component: () => import('@/views/AdminPage.vue'),
        },
    ],
})

export default router
