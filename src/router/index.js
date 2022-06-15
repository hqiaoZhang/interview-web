/*
* @Author: xiexiaoying
* @Date: 2021-12-16 09:12
* @Email: 634021337@qq.com
* @Description:
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2022-06-14 21:26:46
*/
import Vue from 'vue'
import Router from 'vue-router'
// 注册Router
Vue.use(Router)
// 配置项
import config from '@/config/base.config'
// 登录
const Home = () => import('@/containers/home/index.vue')
 
const routes = [
  {
    path: '*',
    redirect: `/index`,
    component: Home // 首页
  },
  {
    path:`/index`,  
    name: '首页',
    component: Home
  },  
]



// const originalPush = Router.prototype.push
// Router.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }


export default new Router({
  // mode: 'history',
  base: config.routerPath,
  routes
})

