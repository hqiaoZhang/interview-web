/*
 * @Author: zhanghongqia 
 * @email: 991034150@qq.com 
 * @Date: 2018-06-02 11:09:45 
 * @Description: 皮肤切换
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2019-09-16 18:04:07
 */
 

const state = {
  theme: localStorage.getItem('skinStyle'),
}

// getters
const getters = {
  theme: state => state.theme
}

// 皮肤切换mutations
const mutations = {
  themeChange (state, theme) {
    state.theme = theme
  }
}

export default {
  state,
  getters,
  mutations
}
