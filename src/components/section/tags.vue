<template>
  <div id="tags">
    <div class="cloud">
      <h2>标签云</h2>
      <ul>
        <a href="javascript: void(0)" @click="goHome('kgiimupo8c')">JAVA</a>
        <a href="javascript: void(0)" @click="goHome('zmskn8mhgy')">Spring</a>
        <a href="javascript: void(0)" @click="goHome('ycpeq3dhnt')">MyBatis</a>
        <a href="javascript: void(0)" @click="goHome('kgvxds693y')">MYSQL</a>
        <a href="javascript: void(0)" @click="goHome('vzkj1eaqvq')">Redis</a>
        <a href="javascript: void(0)" @click="goHome('ggg2hiyuel')">RabbitMQ</a>
        <a href="javascript: void(0)" @click="goHome('b74a2zmqci')">JVM</a>
        <a href="javascript: void(0)" @click="goHome('pe9t7or91t')">多线程</a>
        <a href="javascript: void(0)" @click="goHome('bcm8i92uf2')">ES</a>
        <a href="javascript: void(0)" @click="goHome('8gej5sog8p')">Nginx</a>
        <a href="javascript: void(0)" @click="goHome('st66vzoqga')">Docker</a>
        <a href="javascript: void(0)" @click="goHome('us8qajui6x')">ZooKeeper</a>
        <a href="javascript: void(0)" @click="goHome('2qz2e5t5ye')">Dubbo</a>
        <a href="javascript: void(0)" @click="goHome('r5doz8h7lg')">IDEA</a>
        <a href="javascript: void(0)" @click="goHome('wnntvov3xe')">git</a>
        <a href="javascript: void(0)" @click="goHome('nlllkzg421')">实战</a>
        <a href="javascript: void(0)" @click="goHome('uytuec863g')">推荐</a>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tags',
    inject: ['reload'],
    data() {
      return {
        title: '标签云',
        tags: [
          {'id': 1001, 'name': 'JavaSE', 'num': '16'},
          {'id': 1002, 'name': 'Spring', 'num': '21'},
          {'id': 1003, 'name': 'JVM', 'num': '34'}
        ]
      }
    },
    mounted() {
      this.getInitList()
    },
    methods: {
      getInitList() {
        //console.log('tags init method');
      },
      goHome(code) {
        let tags = code;
        this.$parent.search(1, tags, '');
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/base.css";
  @import "../../assets/css/index.css";
  @import "../../assets/css/m.css";
</style>
