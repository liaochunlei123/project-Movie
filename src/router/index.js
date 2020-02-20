import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieRouter from './movie'
import CinameRouter from './ciname'
import MineRouter from './mine'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    MovieRouter,
    CinameRouter,
    MineRouter,
    {
      path:'/*',redirect:'/movie'
    }
  ]
})

export default router
