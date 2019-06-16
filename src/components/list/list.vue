<template>
  <div class="app">
    <Nav></Nav>
    <article>
      <aside class="l_box">
        <AboutMe></AboutMe>
        <tags></tags>
        <my-recommend></my-recommend>
        <links></links>
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
    <foot></foot>
    <top></top>
  </div>
</template>

<script>
  //import section components
  import Nav from '../section/nav';
  import AboutMe from "../section/aboutMe";
  import MyRecommend from "../section/recommends";
  import Links from "../section/links";
  import Concern from "../section/concern";
  import Foot from "../section/foot";
  import Tags from "../section/tags";
  import Page from "../section/page";
  import Top from "../section/top";

  export default {
    name: 'myList',
    components: {
      Top,
      Page,
      Tags,
      Foot,
      Concern,
      Links,
      MyRecommend,
      AboutMe,
      Nav
    },
    data() {
      return {
        currentPage: 1,
        pageRows: 10,
        total: 0,
        noDataShow: false,
        noDataText: '暂无内容,看看最新推荐吧',
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
        let param = this.$route.params;
        this.keywords = param.keywords;
        this.tags = this.$route.params.tags;
        this.http.post(this.ports.article.search, {
          currentPage: this.currentPage,
          tags: this.tags,
          keywords: this.keywords
        }, res => {
          if (res.success) {
            //console.log(JSON.stringify(res.data.results));
            let datas = res.data.results;
            this.articles = datas.records;
            this.currentPage = datas.currentPage;
            this.total = datas.totalRecords;
            if (this.total > 10) {
              this.noDataShow = false;
              this.pageShow = true;
            } else if (this.total > 0) {
              this.noDataShow = false;
            } else {
              this.noDataShow = true;
            }
          } else {
            this.noDataShow = true;
            this.articles = [];
          }
        })
      },
      goInfo(obj) {
        if (obj.id == null) {
          console.log('goInfo id :' + id);
          return;
        }
        //console.log('goInfo method param:' + JSON.stringify(obj));
        let id = obj.id;
        this.$router.push({path: '/info/' + id});
      },
      pageChange(curPage) {
        this.http.post(this.ports.article.search, {
          currentPage: curPage,
          tags: this.tags,
          keywords: this.keywords
        }, res => {
          if (res.success) {
            let datas = res.data.results;
            this.articles = datas.records;
            this.currentPage = datas.currentPage;
            this.total = datas.totalRecords;
            this.noDataShow = false;
            if (this.total > 10) {
              this.noDataShow = false;
              this.pageShow = true;
            } else if (this.total > 0) {
              this.noDataShow = false;
            } else {
              this.noDataShow = true;
            }
          } else {
            this.noDataShow = true;
            this.articles = [];
          }
        })
      },
      search(keyword) {
        //console.log("list search:" + keyword);
        this.$router.push({name: 'home', params: {tags: '', currentPage: 1, keywords: keyword}})
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/base.css";
  @import "../../assets/css/index.css";
  @import "../../assets/css/m.css";
</style>
