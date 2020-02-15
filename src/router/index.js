import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import pet from '../views/pet.vue'
import cat from '../views/cat.vue'
import dog from '../views/dog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/pet/:species/:id',
    name: 'pet',
    component: pet
  },
  {
    path: '/cat',
    name: 'cat',
    component: cat
  },
  {
    path: '/dog',
    name: 'dog',
    component: dog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
