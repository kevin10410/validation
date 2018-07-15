import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Info from '@/components/Infomation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/infomation',
      name: 'infomation',
      component: Info
    }
  ]
})
