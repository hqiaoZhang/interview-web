/*
 * @Author: xiexiaoying
 * @Date: 2019-11-12 14:14:44
 * @Email: 634021337@qq.com 
 * @Description: 序号
 * @Last Modified by: xiexiaoying
 * @Last Modified time: 2019-11-12 14:14:44
 */
<template>
  <el-table-column
    label="序号"
    type="index"
    :align="align"
    :index="indexMethod"
    :width="width"
    :fixed="fixed"/>
</template>


<script>
export default {
  props: {
    paging: Object,
    width: {
      type: Number,
      default: 55
    },
    fixed: Boolean,
    align: {
      type: String,
      default: 'left'
    }

  },
  methods: {
     // 重置序号
    indexMethod(index) {
      if (this.paging.currentPage > 1) {
        return index + 1 + (this.paging.currentPage - 1) * this.paging.pageSize;
      }
      return index + 1;
    }
  }
}
</script>
