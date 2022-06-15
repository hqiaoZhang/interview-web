/*
* @Author: zhanghongqia
* @email: 991034150@qq.com
* @Date: 2018-06-08 21:37:15
* @Description: 地区列表
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2020-11-28 10:48:58
*/

<template>
  <div class="area_menu" v-clickoutside="handleClose" >
    <p @click="handleName">
      <span>{{defaultName}}</span><i class="icon-down"></i>
    </p>
    <ul v-show="isShow" class="area_list white_shadow">
      <li v-for="item in areaList" :key="item.id" @click="handleSelect(item)">
        {{item.domainName}}
      </li>
    </ul>
  </div>
</template>

<script>
  import './index.scss'
  import clickoutside from 'element-ui/src/utils/clickoutside'

  export default {
    data() {
      return {
        isShow: false,
        activeIndex: '1',
        defaultName: '' // 默认显示的城市名
      }
    },
    props: {
      areaList: Array,
      cityName: String
    },
    directives: {clickoutside},
    mounted() {
      this.defaultName = this.cityName
    },

    methods: {
      handleSelect(item) {
        this.isShow = false
        this.defaultName = item.domainName
        this.$store.commit('setAreaInfo', item)
        this.$store.commit('setCityType', item.cityType)
        this.setCookie("cityId", item.id)
        this.setCookie("provinceId", item.parentId)
        this.setCookie("cityName", encodeURI(item.domainName))
        this.setCookie("cityType", item.cityType)
        this.setCookie("parentId", item.parentId)
      },
      handleName() {
        this.isShow = !this.isShow
      },
      /**关闭面板 */
      handleClose() {
        this.isShow = false
      },
      setCookie(key, val, path) {
        if (!path) path = "/";
        document.cookie = key + "=" + val + "; expires=Session; path=" + path;  //设置cookie
      }
    },
    watch: {
      // 监听地区名
      'cityName': function () {
        this.defaultName = this.cityName
      }
    }
  }
</script>
