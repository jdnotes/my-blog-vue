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
            <router-link :to="{path:'/life'}">生活</router-link>
          </li>
          <li>
            <router-link :to="{path:'/message'}">留言</router-link>
          </li>
          <li>
            <router-link :to="{path:'/about'}">关于我</router-link>
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
          return;
        } else {
          //子组件调用父组件方法
          this.$parent.search(1, '', keyword);
        }
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/base.css";
  @import "../../assets/css/index.css";
  @import "../../assets/css/m.css";
</style>
