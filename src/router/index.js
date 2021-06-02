import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载
const Home =() => import('../views/Home.vue')
const About =() => import('../views/About.vue')
const Chat =() => import('../views/chat/Chat.vue')
const Calendar =() => import('../views/calendar/calendar.vue')
const Publish =() => import('../views/publish/publish.vue')
const Search =() => import('../views/search/search.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/chat',
    component: Chat
  },
  {
    path: '/calendar',
    component: Calendar
  },
  {
    path: '/publish',
    component: Publish
  },
  {
    path: '/search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
