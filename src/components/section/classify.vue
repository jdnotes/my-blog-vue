<template>
  <div id="classify">
    <div class="fenlei">
      <h2>文章分类</h2>
      <ul v-for="item in classifies">
        <li><a href="javascript: void(0)" @click="back(item)"> {{ item.name }} ({{item.num}})</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'classify',
    data() {
      return {
        classifies: [
          {'id': 1001, 'name': 'JavaSE', 'num': '16'},
          {'id': 1002, 'name': 'Spring', 'num': '21'},
          {'id': 1003, 'name': 'JVM', 'num': '34'}
        ]
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/base.css";
  @import "../../assets/css/index.css";
  @import "../../assets/css/m.css";
</style>
