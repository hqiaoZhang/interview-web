/*
* @Author: xiexiaoying
* @Date: 2021-12-15 17:02
* @Email: 634021337@qq.com
* @Description: 顶部菜单
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2022-03-07 13:00:47
*/
<template>
  <div class="header">
   <div class="logo">
      <!-- <img v-if="logoUrl" :src="`${cHost}/file/view/${logoUrl}`">   -->
<!--      <img src="static/images/logo.png">-->
  </div>

    <div class="top_menus">
      <a :href="item.menuUrl" :class="{active: item.id==topActiveId}" @click="handleMenu(item)" v-for="item in menuList" :key="item.id">
         <i class="iconfont" v-html="item.iconUrl || '&#xe686;'"></i>
        <span>{{item.menuName}}</span>
      </a>
    </div>

    <!--右边导航部分-->
    <div class="right-select"> 
      <!--地区选择菜单-->
      <AreaMenu :areaList="areaList"
                :cityName="cityName" />

        <!--用户名  -->
       <div class="user_name">
        <i class="iconfont">&#xe685;</i>
        {{userName}}
      </div>

      <!--系统设置菜单-->
      <Seting :logout="logout"
              :userName="userName"
              :requestChangePwd="requestChangePwd" />
    </div>
  </div>
</template>

<script>
import "./index.scss";
import AreaMenu from "./areaMenu";
import Seting from "./seting/index.vue";
import config from '@/config/base.config'


export default {
  components: {
    AreaMenu,
    Seting,
  },
  props: {
    logoUrl: String,
    menuList: Array,
    areaList: Array,
    logout: Function,
    requestChangePwd: Function,
    topActiveId: String,
    cityName: String,
    userName: String,
  },
  data() {
    return {
      cHost: config.host,
      currenIndex: 0,
      hasError: false,
      menus: "",
      level: 0,
      isShowApp: false
    };
  },
  methods: {
    handleMenu(item) { 
      console.log(item.id)
      this.$store.commit('setCurrentTopMenuId',  item.id)
      this.$store.commit('setSideMenuState', item.haveChildren) 
    },
  }, 
};
</script>


