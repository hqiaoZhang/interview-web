/*
 * @Author: zhanghongqiao
 * @Date: 2018-07-06 15:54:54
 * @Email: 991034150@qq.com
 * @Description: 登录
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2022-03-07 13:30:11
 */

import { getCookie } from '@/utils/util'
// let userId = getCookie('userId')
let userId = sessionStorage.getItem('userId')  
let module = getCookie('module')

const state = {
  logged: !userId,
  userId: userId,
  cityId: Number(getCookie('cityId')),
  cityName: decodeURI(sessionStorage.getItem('cityName')),
  cityType: getCookie('cityType'),
  parentId: getCookie('parentId'),
  fullName: decodeURI(sessionStorage.getItem('fullName')),
  module: module
}

// const state = {
//   logged: false,
//   userId: '4028f481585db7d701585dc9f8a00018',
//   cityId: 370800,
//   cityName: '济宁市',
//   cityType: 2
// }


// getters
const getters = {
  logged: state => state.logged,
  cityId: state => state.cityId,
  parentId: state => state.parentId,
  cityName: state => state.cityName,
  userId: state => state.userId,
  cityType: state => state.cityType,
  fullName: state => state.fullName,
  module: state => state.module
}

// 登录mutations
const mutations = {
  /**
   * @description 设置登录状态
   * @param {object} state 状态
   * @param {array} data 数据
   */
  setLoginState (state, logged) {
    state.logged = logged
    mutations.setUserId(state, sessionStorage.getItem('userId'))
    mutations.setUserName(state, sessionStorage.getItem('fullName'))
    mutations.setCityType(state, getCookie('cityType'))
    mutations.setParentId(state, getCookie('parentId'))
  },

  /**
   * @description 设置地区信息(id,名称)
   * @param {object} state 状态
   * @param {array} data 数据
   */
  setAreaInfo (state, city) {
    state.cityId = Number(city.id)
    state.cityName = city.domainName
    state.parentId = city.parentDomainId
  },
  /**
   * 设置用户id
   * @param state
   * @param userId
   */
  setUserId (state, userId) {
    state.userId = userId
  },

  /**
   * 设置用户名
   * @param state
   * @param userId
   */
  setUserName (state, fullName) {
    state.fullName = fullName
  },
  /**
   * 设置城市类型
   * @param state
   * @param userId
   */
  setCityType (state, cityType) {
    state.cityType = cityType
  },
  /**
   * 设置城市父亲ID
   * @param state
   * @param userId
   */
  setParentId (state, parentId) {
    state.parentId = parentId
  }
}

export default {
  state,
  getters,
  mutations
}
