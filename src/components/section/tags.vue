<template>
  <div id="tags">
    <div class="cloud">
      <h2>标签云</h2>
      <ul>
        <a href="/">JAVA</a>
        <a href="/">Spring</a>
        <a href="/">MyBatis</a>
        <a href="/">MYSQL</a>
        <a href="/">Redis</a>
        <a href="/">MQ</a>
        <a href="/">JVM</a>
        <a href="/">Threads</a>
        <a href="/">ES</a>
        <a href="/">Nginx</a>
        <a href="/">Docker</a>
        <a href="/">ZooKeeper</a>
        <a href="/">Dubbo</a>
        <a href="/">IDEA</a>
        <a href="/">git</a>
        <a href="/">example</a>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tags',
    data() {
      return {
        title: '标签云',
        tags: [
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
