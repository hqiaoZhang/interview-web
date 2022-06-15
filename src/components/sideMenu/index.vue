/*
 * @Author: zhanghongqiao
 * @Date: 2018-11-13 17:37:53
 * @Email: 991034150@qq.com
 * @Description: 左边菜单
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2022-02-28 14:47:44
 */

 <template>

   <div class="side_menu layout_bg" :class="{w56: defIsCollapse}">
    <el-menu  :default-active="leftActiveId" :collapse="defIsCollapse" :open="leftActiveId"
      @open="handleOpen" @select="handleSelect">
      <template v-for="item in sourceData">
        <!-- 一级菜单 -->
        <el-menu-item v-if="isEmpty(item.childList)"
          :key="item.id" :index="item.id">
          <template v-if="isGridWeb(item.menuUrl)">
            <a
                :key="item.id"
                :href="item.menuUrl" >
                <i class="iconfont" v-html="item.iconUrl || '&#xe686;'"></i>
                {{item.menuName}}
            </a>
          </template>
          <!-- 第三方链接 target="_blank" -->
          <template v-else-if="isOtherWeb(item.menuUrl)">
            <a
              :key="item.id"
              :href="item.menuUrl" >
               <i class="iconfont" v-html="item.iconUrl || '&#xe686;'"></i>
            {{item.menuName}}
          </a>
        </template>
        <template v-else>

          <a :href="item.menuUrl">
            <i class="iconfont" v-html="item.iconUrl || '&#xe686;'"></i>
            {{item.menuName}}
          </a>
        </template>

          <!-- <router-link :to="{path: `${item.menuUrl}`}">
              <i class="iconfont" v-html="item.iconUrl || '&#xe686;'"></i>
              <span>{{item.menuName}}</span>
          </router-link>   -->
        </el-menu-item>
        <!-- 有二级菜单 -->
        <el-submenu v-if="!isEmpty(item.childList)"
            popper-class="top-menu-popper"
            :key="item.id" :index="item.id">
          <template slot="title">
             <i class="iconfont" v-html="item.iconUrl || '&#xe686;'"></i>
             <span slot="title">{{item.menuName}}</span>
          </template>
          <MenuItem :menus="item.childList" :isGridWeb="isGridWeb" :isOtherWeb="isOtherWeb" />
        </el-submenu>
      </template>
    </el-menu>
    <transition name="el-zoom-in-center">
      <span @click="handleOpenMenu" class="footer_btn open_btn" v-if="defIsCollapse">
        <i class="iconfont">&#xe605;</i>
      </span>
    </transition>
    <transition name="el-zoom-in-center">
      <span @click="handleColseMenu" class="footer_btn close_btn" v-if="!defIsCollapse">
        <i class="iconfont">&#xe605;</i>
        </span>
    </transition>
   </div>
 </template>

 <script>
 import './index.scss'
 import MenuItem from './menuItem.vue'
 import { isEmpty } from 'lodash'
 export default {
   data() {
     return {
       defIsCollapse: false,
     }
   },
   props: {
     sourceData: Array,
     leftActiveId: String,
     isCollapse: Boolean,
   },
   components: {
     MenuItem
   },
   mounted() {
     this.defIsCollapse = this.isCollapse
   },
   methods: {
     isEmpty: isEmpty,
     handleOpenMenu() {
       this.defIsCollapse = false
       this.$store.commit('setOpenSideMenu', false)
     },
     handleColseMenu() {
       this.defIsCollapse = true
       this.$store.commit('setOpenSideMenu', true)
     },
      // 选种项
      handleSelect(key, path) {
        console.log('path', key, path)
        this.$store.commit('setSideMenuDefActive', key)
      },
      // 打开
      handleOpen(key, keyPath) {
        return 
        this.$store.commit('setSideMenuDefActive', key)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      isGridWeb(str) {
        return str.includes('waste-management')
      },
      //是否是第三方链接
      isOtherWeb(str) {
        return str.startsWith('http')
      }
    },
    watch: {
      isCollapse: function() {
        this.defIsCollapse = this.isCollapse
      }
    }
 }
 </script>


