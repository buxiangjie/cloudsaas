import Vue from 'vue'
import Router from 'vue-router'
import {on} from "element-ui/src/utils/dom";

const test = () => import('@/pages/test')
const one = () => import('@/pages/one')
const login = () => import('@/pages/login')
const shoppingCar = () => import('@/pages/shoppingCar')
const index = () => import('@/pages/index')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: 'index'
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/shoppingCar',
      name: 'shoppingCar',
      component: shoppingCar
    },
    {
      path: '/index',
      component: index,
      children: [
        {
          path: '',
          redirect: 'one'
        },
        {
          path: 'one',
          name: 'one',
          component: one
        },
        {
          path: 'login',
          name: 'login',
          component: login
        }
      ]
    }
  ]
})
