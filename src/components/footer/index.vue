/*
 * @Author: zhanghongqiao
 * @Date: 2018-12-20 08:47:41
 * @Email: 991034150@qq.com
 * @Description: footer
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2020-10-27 14:54:39
 */
<style lang="scss" >

.footer {
  color: #fff;
  color: #666;
  padding: 9px 0;
  font-size: 9px;
  width: calc(100% - 2.31rem);
  margin-left:2.31rem;
  text-align: center;
  // border-top: 1px solid #e0e0e0;
  height: 32px;
  margin-top: 10px;
  float: left;
  span {
    padding-left: 20px;
    a {
      padding: 5px;
      text-decoration: underline;
      color: #092266;
    }
  }
}
// .theme-blue .footer {
//   background: #1c2d64;
//   color: #eee;
//   border-top: 1px solid #1c2d64;
//   span a {
//     color: #eee;
//   }
// }
</style>

<template>
  <div class="footer" v-html="sourceData || '大气热点网格管控平台由北京蛙鸣华清环保科技有限公司运营 提供技术支持'">
  </div>
</template>

<script>
export default {
  data() {
    return {
      timmer: null,
    }
  },
  props: {
    sourceData: String,
  },

}
</script>

