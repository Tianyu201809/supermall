import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () =>
    import ('../views/home/Home.vue')
const Category = () =>
    import ('../views/category/Category.vue')
const Cart = () =>
    import ('../views/cart/Cart.vue')
const Profile = () =>
    import ('../views/profile/Profile.vue')

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/home'
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }, {
        path: '/home',
        component: Home
    }, {
        path: '/category',
        component: Category
    }, {
        path: '/cart',
        component: Cart
    }, {
        path: '/profile',
        component: Profile
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router