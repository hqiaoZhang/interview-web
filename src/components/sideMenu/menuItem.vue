<template>
  <div class="child_menu">
    <template v-for="item in menus">
      <el-menu-item :key="item.id"
      v-if="isEmpty(item.childList)" class="two_menu" :index="String(item.id)">
        <!-- 指挥平台/新版网格化 -->
        <template v-if="isGridWeb(item.menuUrl)">
          <a :key="item.id" :href="item.menuUrl" >
            <template v-if="!isThree">•</template> {{item.menuName}}
          </a>  
        </template>
        <!--第三方链接-->
         <!-- target="_blank"  -->
        <template v-else-if="isOtherWeb(item.menuUrl)">
          <a :key="item.id" :href="item.menuUrl" >
            <template v-if="!isThree">•</template> {{item.menuName}}
          </a>
        </template>
        <template v-else>
          <a :href="item.menuUrl">
            <template v-if="!isThree">•</template> {{item.menuName}}
          </a>
        </template>
      </el-menu-item> 
       <el-submenu :key="item.id" 
          v-else :index="String(item.id)">  
          
          <template slot="title">
             <a :href="item.menuUrl">
              • {{item.menuName}} </a>
          </template>
          <MenuItem :isThree="true" :isGridWeb="isGridWeb" :isOtherWeb="isOtherWeb" :menus=item.childList />
        </el-submenu>
    </template>
  </div>
 
</template>

<script>
import { isEmpty } from "lodash"
export default {
  name: 'MenuItem',  
  props:{
    menus: Array, 
    isGridWeb: Function,
    isOtherWeb: Function,
    isThree: Boolean
  },
  methods: {
    isEmpty: isEmpty
  },
 
}
</script>
