<template>
  <div class="home">
    <div v-for="(item, index) in problemList" :key="index">
      <h2>{{item.subject}}</h2>
      <ul>
        <li v-for="(sub, j) in item.list" :key="'child'+j">
          <h3>{{sub.problem}}</h3>
          <p v-html="sub.answer">  </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import './index.scss'
import problemList from './problemList.js'
export default {
  data() {
    return {
      problemList
    }
  },
  mounted() {
    let list = ['a', 'b', 'c', 'd']
    let obj = {
      a: '1',
      b: '2',
      c: '3'
    }
    let newlist = []
  

    let test = list.unshift('a')
    console.log(test)


  }
}
</script>

<style>

</style>
