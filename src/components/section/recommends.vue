<template>
  <div id="recommend">
    <div class="tuijian">
      <h2>最新推荐</h2>
      <ul v-for="item in recommends">
        <li><a href="javascript: void(0)" @click="back(item)"> {{ item.title }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'recommend',
    data() {
      return {
        recommends: [
          {'id': '1001', 'title': '你是什么人便会遇上什么人'},
          {'id': '1001', 'title': '个人博客模板'}
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
