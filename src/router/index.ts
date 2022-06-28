import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../components/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        props: true,
        component: HomeView
    },
    {
        path: '/vue3',
        name: 'vue3',
        props: true,
        component: () => import(/* webpackChunkName: "vue3" */ '../views/Vue3View.vue')
    },
    {
        path: '/about',
        name: 'about',
        props: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
console.log("ROUTER", process.env)
export default router
