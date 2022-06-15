/*
 * @Author: zhanghongqiao 
 * @Date: 2018-11-14 10:56:32 
 * @Email: 991034150@qq.com 
 * @Description: 分页
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2022-02-22 17:12:06
 */

 <style lang="scss">
  
 
.grid_pagination {
  float: left;
  width: 100%;
  padding: 11px 16px;
  border-top: 1px solid;
  @include font_color('white10');
}
.el-input--mini .el-input__inner {
  height: 32px;
  line-height: 32px;
}
.el-pager li {
  min-width: 24px; 
  margin: 0 6px;
  font-weight: normal;
  background: none;
}
.el-pagination .btn-next, .el-pagination .btn-prev,
.el-pager li.btn-quicknext, .el-pager li.btn-quickprev {

  background: none;
}
.el-pager li.active {
  background-image: linear-gradient(-223deg, #6CCAFF 0%, #498FFF 100%);
  border-radius: 12px;
  color: #fff;
}
.el-pagination__total,
.el-pagination__sizes {
  float: left;
}
.el-pagination__jump {
  float: right;
  margin-left: 5px;
} 
.el-pagination__sizes {
  margin-right: 5px;
}
</style>
 

<template>

  <div class="grid_pagination" v-if="defautPaging.total > 10">
    <el-pagination 
      popper-class="wm_page_poper"
      class="white_panelbg1"
      layout="total, sizes, prev, pager, next, jumper, slot"
      :page-size="defautPaging.pageSize"
      :current-page="defautPaging.currentPage || 0"
      @size-change="handleSizeChange"
      @current-change="handleCurChange"
      @prev-text="handleCurChange"
      @next-text="handleCurChange"
      :total="defautPaging.total">
    </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      defautPaging: {
        pageSize: 10,
        total: 0,
        currentPage: 1,
      }
      // currentPage: 0,
    }
  },
  model: {
    event: 'change'
  },
  props: {
    paging: Object,
    total: Number, // 总条目数
    pageSize: Number, // 每页显示条目个数
    currentPage: Number,
  },
  mounted() {
    this.defautPaging = this.paging
  },
  methods: {
    /*
     * 当前页改变 
     */
    handleCurChange(val) {
      this.defautPaging.currentPage = val
      this.$emit('change', this.defautPaging)
    },
    handleSizeChange(val) {
      this.defautPaging.pageSize = val
      this.defautPaging.currentPage = 1
      this.$emit('change', this.defautPaging)
    },
    // 点击go
    handleGo() {
      this.$emit('change', this.defautPaging)
    }
  },
  watch: {
     paging: function() {
       this.defautPaging = this.paging
    } 
  }
}
</script>
 
 
