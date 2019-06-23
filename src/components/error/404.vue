<template>
  <div class="app">
    <Nav></Nav>
    <article>
      <aside class="l_box">
      </aside>
      <main class="r_box">
        <div>
          <div class="notfound">404</div>
          <div class="remark">{{noDataText}}</div>
        </div>
      </main>
    </article>
  </div>
</template>

<script>
  import Nav from '../section/nav';

  export default {
    name: 'notFound',
    components: {
      Nav
    },
    data() {
      return {
        noDataText: '您访问的页面不存在',
      }
    },
    mounted() {
      this.getInitList()
    },
    methods: {
      getInitList() {
      },
      search(curPage, tags, keyword) {
        this.$router.push({name: 'home', params: {currentPage: curPage, tags: tags, keywords: keyword}});
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/base.css";
  @import "../../assets/css/index.css";
  @import "../../assets/css/m.css";

  .notfound {
    text-align: center;
    margin-top: 25px;
    height: 100px;
    font-size: 100px;
    color: #f79b3b;
    font-family: '方正舒体'
  }

  .remark {
    text-align: center;
    margin-top: 25px;
    height: 150px;
    font-size: 30px;
    color: #26bc50;
    font-family: '方正舒体'
  }
</style>
