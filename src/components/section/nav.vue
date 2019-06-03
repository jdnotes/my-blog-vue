<template>
  <div id="nav">
    <header class="header-navigation" id="header">
      <nav>
        <div class="logo"><a href="/">{{title}}</a></div>
        <div class="search">
          <form method="post" name="searchform" id="searchform" @submit.prevent="search">
            <input name="keyboard" id="keyboard" class="input_text"
                   style="color: rgb(153, 153, 153);" type="text"
                   v-model="keywords" placeholder="请输入关键字词"/>
            <input name="Submit" class="input_submit" value="搜索" type="submit"/>
          </form>
        </div>
        <ul id="starlist">
          <li><a href="/">首页</a></li>
          <li>
            <router-link :to="{path:'/info'}">生活</router-link>
          </li>
          <li>
            <router-link :to="{path:'/info'}">留言</router-link>
          </li>
          <li>
            <router-link :to="{path:'/info'}">关于我</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'myNav',
    data() {
      return {
        title: '简单笔记',
        keywords: ''
      }
    },
    methods: {
      search(e) {
        let keyword = this.keywords;
        if (!keyword) {
          console.log('search is null');
          return;
        } else {
          //子组件调用父组件方法
          this.$parent.search(keyword);
        }
      },
      back(obj) {
        console.log('back nav method:' + JSON.stringify(obj));
        this.$router.push({path: '/info/1003'});
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/base.css";
  @import "../../assets/css/index.css";
  @import "../../assets/css/m.css";
</style>
