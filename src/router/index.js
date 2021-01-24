import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/pages/test'
import one from '@/pages/one'
import login from '@/pages/login'
import shoppingCar from "@/pages/shoppingCar";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/one',
      name: 'one',
      component: one
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/shoppingCar',
      name: 'shoppingCar',
      component: shoppingCar
    }
  ]
})
