<template>
  <div class="app">
    <Nav></Nav>
    <article>
      <aside class="l_box">
        <AboutMe></AboutMe>
        <concern></concern>
      </aside>
      <main class="r_box">
        <div v-for="item in articles">
          <li>
            <i v-if="item.logo != ''">
              <a href="javascript: void(0)" @click="goInfo(item)">
                <img :src="item.logo">
              </a>
            </i>
            <h3><a href="javascript: void(0)" @click="goInfo(item)">{{item.title}}</a></h3>
            <p>{{item.articleSection}}</p>
          </li>
        </div>
        <div>
          <li v-if="noDataShow">{{noDataText}}</li>
        </div>
        <page :totalRecords="total" :currentPage='currentPage' @pageChange="pageChange"
              v-if="pageShow"></page>
      </main>
    </article>
    <top></top>
  </div>
</template>

<script>
  import Nav from '../section/nav';
  import AboutMe from "../section/aboutMe";
  import Concern from "../section/concern";
  import Foot from "../section/foot";
  import Page from "../section/page";
  import Top from "../section/top";

  export default {
    name: 'life',
    components: {
      Top,
      Page,
      Foot,
      Concern,
      AboutMe,
      Nav
    },
    data() {
      return {
        currentPage: 1,
        pageRows: 10,
        total: 0,
        noDataShow: false,
        noDataText: '暂无内容,看看其他模块吧',
        pageShow: false,
        keywords: '',
        tags: '',
        articles: []
      }
    },
    mounted() {
      this.getInitList()
    },
    methods: {
      getInitList() {
        this.noDataShow = true;
      },
      goInfo(obj) {

      },
      pageChange(curPage) {
        this.noDataShow = true;
      },
      search(keyword) {
        this.$router.push({name: 'list', params: {tags: '', currentPage: 1, keywords: keyword}})
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/base.css";
  @import "../../assets/css/index.css";
  @import "../../assets/css/m.css";
</style>
