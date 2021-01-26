import Vue from 'vue'
import Router from 'vue-router'
import {on} from "element-ui/src/utils/dom";

const test = () => import('@/pages/test')
const aidedTool = () => import('@/pages/aidedTool')
const login = () => import('@/pages/login')
const shoppingCar = () => import('@/pages/shoppingCar')
const index = () => import('@/pages/index')
const delProd = () => import('@/pages/delProd')

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
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '',
          redirect: 'aidedTool'
        },
        {
          path: 'aidedTool',
          name: '辅助工具',
          component: aidedTool,
          meta: {
            title: '辅助工具'
          },
          children:[
            {
              path: 'delProd',
              name: '删除进件信息',
              component: delProd
            }
          ]
        },
        {
          path: 'login',
          name: '登录',
          component: login,
          meta: {
            title: '登录'
          }
        }
      ]
    }
  ]
})


const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
